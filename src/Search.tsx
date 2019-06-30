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
  const [error, setError] = useState<string>();

  const cancelHandle = useMemo(() => Axios.CancelToken.source(), []);
  const doSearch = useCallback(async () => {
    setResult(undefined);
    setSearching(true);
    try {
      const found = await findPlayer(query, {
        cancelToken: cancelHandle.token
      });
      const foundData = Object.values(found.data);
      if (foundData.length === 0) {
        setError("No player found");
      }
      setResult(Object.values(found.data)[0]);
    } catch (e) {
      setError(e.message);
    }
    setSearching(false);
  }, [query, cancelHandle.token]);

  useEffect(() => () => cancelHandle.cancel(), [cancelHandle]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (error) {
        setError(undefined);
      }
      setQuery(e.target.value);
    },
    [error]
  );

  const ResultDisplay = useCallback(() => {
    if (error) {
      return (
        <div>
          <p>
            <strong>{error}</strong>
          </p>
        </div>
      );
    } else if (result) {
      return <Link to={`profile/${result.account_id}`}>{result.nickname}</Link>;
    } else if (isSearching) {
      return <Loading text="Searching" />;
    }
    return null;
  }, [result, error, isSearching]);
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
          onChange={onChange}
          placeholder="Player name..."
        />
        <button onClick={doSearch}>Search</button>
      </div>
      <div>
        <ResultDisplay />
      </div>
    </form>
  );
};
