import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./components";
import { getPlayerProfile } from "./repository/PlayerRepository";
import { RankedSeason } from "./domain/RankedSeason";
import { getSeasons } from "./repository/RankedRepository";
import "./Profile.scss";

export default ({ id }: { id: number }) => {
  const [user, setUser] = useState<any>(undefined);
  const [isLoaded, setLoaded] = useState(false);
  const [delay, setDelay] = useState(false);
  const [error, setError] = useState<string>();
  const [seasons, setSeasons] = useState<RankedSeason[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => setDelay(true), 300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  useEffect(() => {
    getPlayerProfile(id).then(res => {
      res.cata(
        err => setError(err),
        response => {
          setUser(response.data[id]);
          setLoaded(true);
        }
      );
    });
  }, [id]);
  useEffect(() => {
    getSeasons({ season_id: [11, 12] }).then(response =>
      response.cata(setError, val => setSeasons(Object.values(val.data)))
    );
  }, []);

  if (!(isLoaded && delay)) {
    return <Loading />;
  } else if (error) {
    return (
      <div>
        <h3>Error</h3>
        <p>{error}</p>
        <Link to="/">Back</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>{user.nickname}</h1>
      <p>{user.account_id}</p>
      <p>{user.hidden_profile ? "Hidden profile" : "Public profile"}</p>
      <div className="seasons-grid">
        {seasons.map(s => (
          <div key={s.season_id}>
            <Link to={`/profile/${id}/season/${s.season_id}`}>
              {s.season_name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
