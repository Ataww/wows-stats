import Axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../components";
import { findPlayers } from "../repository/PlayerRepository";
import { PersonalData } from "../domain/account";

export default () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<PersonalData[]>([]);
  const [isSearching, setSearching] = useState(false);
  const [error, setError] = useState<string>();

  const cancelHandle = useMemo(() => Axios.CancelToken.source(), []);
  const doSearch = useCallback(async () => {
    setResult([]);
    setError(undefined);
    setSearching(true);
    const found = await findPlayers({ search: query }, {
      cancelToken: cancelHandle.token
    });
    found.cata(
      err => {
        setError(err);
      },
      response => {
        setResult(Object.values(response.data));
      }
    );
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
      return <div>
        {result.map(account => <p>
          <Link to={`profile/${account.account_id}`}>{account.nickname}</Link>
        </p>)}
      </div>;
    } else if (isSearching) {
      return <Loading text="Searching"/>;
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
        <ResultDisplay/>
      </div>
    </form>
  );
};
