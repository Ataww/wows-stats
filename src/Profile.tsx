import React, { useState, useEffect } from "react";
import { getPlayerProfile } from "./repository/PlayerRepository";
import { Link } from "react-router-dom";

export default ({ id }: { id: number }) => {
  const [user, setUser] = useState<any>(undefined);
  useEffect(() => {
    getPlayerProfile(id).then(response => {
      setUser(response.data[id]);
    });
  }, [id]);

  return user === undefined ? (
    <div>Loading...</div>
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
