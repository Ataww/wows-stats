import React, { useState, useEffect } from "react";
import { getPlayerProfile } from "./repository/PlayerRepository";
import { Link } from "react-router-dom";
import { Loading } from "./components";

export default ({ id }: { id: number }) => {
  const [user, setUser] = useState<any>(undefined);
  const [isLoaded, setLoaded] = useState(false);
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setDelay(true), 300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  useEffect(() => {
    getPlayerProfile(id).then(response => {
      setUser(response.data[id]);
      setLoaded(true);
    });
  }, [id]);

  return !(isLoaded && delay) ? (
    <Loading />
  ) : (
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
