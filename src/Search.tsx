import React, { useState } from "react";
import { Link } from "react-router-dom";
import { findPlayer } from "./repository/PlayerRepository";
import PlayerAccount from "./domain/PlayerAccount";

export default () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<PlayerAccount[]>([]);

  const doSearch = async () => {
    const result = await findPlayer(query);
    console.log(result);
    if (result.length !== 0) {
      setResult(result);
    }
  };
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        doSearch();
      }}
    >
      <div>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Player name..."
        />
        <button onClick={doSearch}>Search</button>
      </div>
      <div>
        {result.length !== 0 && (
          <Link to={`profile/${result[0].account_id}`}>
            {result[0].nickname}
          </Link>
        )}
      </div>
    </form>
  );
};
