import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { findPlayer } from "./repository/PlayerRepository";
import PlayerAccount from "./domain/PlayerAccount";
import Axios from "axios";

const cancelHandle = Axios.CancelToken.source();

export default () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<PlayerAccount>();

  const doSearch = useCallback(async () => {
    const found = await findPlayer(query, {
      cancelToken: cancelHandle.token
    });
    setResult(Object.values(found.data)[0]);
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
        {result && (
          <Link to={`profile/${result.account_id}`}>{result.nickname}</Link>
        )}
      </div>
    </form>
  );
};
