import Axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { RankedStats } from "./domain/PlayerStats";
import Warship from "./domain/Ship";
import { PlayerShipRankedStats } from "./domain/ShipStats";
import {
  getRankedShipsStats,
  getRankedStats
} from "./repository/RankedRepository";
import { getShips } from "./repository/ShipRepository";
import { IdIndexedData } from "./domain/ApiResponse";
import { Loading } from "./components";

export default ({ id, seasonId }: { id: number; seasonId: number }) => {
  const [stats, setStats] = useState<RankedStats>();
  const [shipStats, setShipStats] = useState<PlayerShipRankedStats>();
  const [ships, setShips] = useState<IdIndexedData<Warship>>({});
  const [isLoaded, setLoaded] = useState(false);
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setDelay(true), 300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const cancelHandle = useMemo(() => Axios.CancelToken.source(), []);
  useEffect(() => () => cancelHandle.cancel(), [cancelHandle]);

  useEffect(() => {
    if (
      stats &&
      stats.seasons[seasonId] &&
      shipStats &&
      shipStats[id] &&
      shipStats[id].length > 0 &&
      Object.keys(ships).length > 0
    ) {
      setLoaded(true);
    }
  }, [stats, shipStats, ships, id, seasonId]);

  useEffect(() => {
    getRankedStats(id, seasonId, {}, { cancelToken: cancelHandle.token }).then(
      response => {
        setStats(response.data[id]);
      }
    );
  }, [id, seasonId, cancelHandle.token]);

  useEffect(() => {
    getRankedShipsStats(
      id,
      seasonId,
      {},
      { cancelToken: cancelHandle.token }
    ).then(response => {
      setShipStats(response.data);
    });
  }, [id, seasonId, cancelHandle.token]);

  useEffect(() => {
    if (shipStats && shipStats[id] && shipStats[id].length > 0) {
      const ids = shipStats[id].map(ship => ship.ship_id);
      getShips(
        {
          ship_id: ids.join(",")
        },
        { cancelToken: cancelHandle.token }
      ).then(response => {
        setShips(response.data);
      });
    }
  }, [shipStats, id, cancelHandle.token]);

  return isLoaded && delay ? (
    <div>
      <div className="season-stats">
        <h3>Season {seasonId}</h3>
        <p>
          <strong>Battles</strong>:{" "}
          {stats && stats.seasons[seasonId].rank_solo!.battles}
        </p>
        <p>
          <strong>Wins</strong>:{" "}
          {stats && stats.seasons[seasonId].rank_solo!.wins}
        </p>
        <p>
          <strong>Win %</strong>:{" "}
          {stats &&
            (stats.seasons[seasonId].rank_solo!.wins /
              stats.seasons[seasonId].rank_solo!.battles) *
              100}
        </p>
      </div>
      <div className="ship-stats">
        <h3>Ship stats</h3>
        <table className="ship-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Battles</th>
              <th>Wins</th>
              <th>Win%</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {shipStats &&
              shipStats[id].map(stat => {
                return (
                  <tr key={stat.ship_id}>
                    <td>{ships[stat.ship_id].name}</td>
                    <td>{stat.seasons[seasonId].rank_solo!.battles}</td>
                    <td>{stat.seasons[seasonId].rank_solo!.wins}</td>
                    <td>
                      {(stat.seasons[seasonId].rank_solo!.wins /
                        stat.seasons[seasonId].rank_solo!.battles) *
                        100}
                    </td>
                    <td>{ships[stat.ship_id].type}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
