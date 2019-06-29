import { Statistics } from "./PlayerStats";

export interface SeasonShipStats {
  rank_solo?: Statistics;
  rank_div2?: Statistics;
  rank_div3?: Statistics;
}

export interface ShipRankedStats {
  seasons: {
    [id: number]: SeasonShipStats;
  };
  ship_id: number;
  account_id: number;
}

export interface PlayerShipRankedStats {
  [id: number]: ShipRankedStats[];
}
