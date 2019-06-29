import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { findPlayer } from "./repository/PlayerRepository";
import PlayerAccount from "./domain/PlayerAccount";
import Axios from "axios";
import { Loading } from "./components";

export default () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<PlayerAccount>();
  const [isSearching, setSearching] = useState(false);

  const cancelHandle = useMemo(() => Axios.CancelToken.source(), []);
  const doSearch = useCallback(async () => {
    setSearching(true);
    const found = await findPlayer(query, {
      cancelToken: cancelHandle.token
    });
    setResult(Object.values(found.data)[0]);
    setSearching(false);
  }, [query, cancelHandle.token]);

  useEffect(() => () => cancelHandle.cancel(), [cancelHandle]);
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
        {result ? (
          <Link to={`profile/${result.account_id}`}>{result.nickname}</Link>
        ) : (
          isSearching && <Loading text="Searching" />
        )}
      </div>
    </form>
  );
};
