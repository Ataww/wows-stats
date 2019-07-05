import { PlayerParameters } from "./PlayerParameters";

export interface PlayerStatisticsSearch extends PlayerParameters {
  dates?: string | string[];
  extra?: "pve";
}
