import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { findPlayer } from "./repository/PlayerRepository";
import PlayerAccount from "./domain/PlayerAccount";
import Axios from "axios";

const cancelHandle = Axios.CancelToken.source();

export default () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<PlayerAccount[]>([]);

  const doSearch = useCallback(async () => {
    const result = await findPlayer(query, {
      cancelToken: cancelHandle.token
    });
    if (result.length !== 0) {
      setResult(result);
    }
  }, [query]);

  useEffect(() => () => cancelHandle.cancel(), []);
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
