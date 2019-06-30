import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./components";
import { getPlayerProfile } from "./repository/PlayerRepository";

export default ({ id }: { id: number }) => {
  const [user, setUser] = useState<any>(undefined);
  const [isLoaded, setLoaded] = useState(false);
  const [delay, setDelay] = useState(false);
  const [error, setError] = useState<string>();

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
      <div>
        <p>
          <Link to={`/profile/${id}/season/12`}>Season 12</Link>
        </p>
        <p>
          <Link to={`/profile/${id}/season/11`}>Season 11</Link>
        </p>
      </div>
    </div>
  );
};
