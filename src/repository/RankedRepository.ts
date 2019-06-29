import Axios, { AxiosRequestConfig } from "axios";
import { ApiResponse, IdIndexedData } from "../domain/ApiResponse";
import { RankedStats } from "../domain/PlayerStats";
import { PlayerShipRankedStats } from "../domain/ShipStats";
import ShipType from "../domain/ShipType";
import { formatOptions } from "./util";

export interface PlayerRankedSearchOptions {
  fields?: string[];
  language?: string;
  access_token?: string;
  [field: string]: any;
}
export interface ShipRankedSearchOptions extends PlayerRankedSearchOptions {
  ship_id?: number;
}

export async function getRankedStats(
  id: number,
  seasonId: number,
  options: Omit<PlayerRankedSearchOptions, "season_id" | "account_id"> = {},
  axiosOptions?: AxiosRequestConfig
): Promise<ApiResponse<IdIndexedData<RankedStats>>> {
  const response = await Axios.get(
    `https://api.worldofwarships.eu/wows/seasons/accountinfo/?application_id=${
      process.env.REACT_APP_WG_APP_ID
    }&account_id=${id}&season_id=${seasonId}${formatOptions(options)}`,
    axiosOptions
  );
  if (response.status !== 200) {
    throw new Error("Ranked stats fetch failed");
  }
  return response.data;
}

export async function getRankedShipsStats(
  id: number,
  seasonId: number,
  options: Omit<ShipRankedSearchOptions, "season_id" | "account_id"> = {},
  axiosOptions?: AxiosRequestConfig
): Promise<ApiResponse<PlayerShipRankedStats>> {
  const response = await Axios.get(
    `https://api.worldofwarships.eu/wows/seasons/shipstats/?application_id=${
      process.env.REACT_APP_WG_APP_ID
    }&account_id=${id}&season_id=${seasonId}${formatOptions(options)}`,
    axiosOptions
  );
  if (response.status !== 200) {
    throw new Error("Ranked ship stats fetch failed");
  }
  return response.data;
}

export function getRankedClassStats(
  id: number,
  seasonId: number,
  type: ShipType,
  options: Omit<
    ShipRankedSearchOptions,
    "season_id" | "account_id" | "ship_type"
  > = {}
) {}
