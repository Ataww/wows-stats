import { AxiosRequestConfig } from "axios";
import { Either, Left, Right } from "monet";
import { ApiResponse, IdIndexedData } from "../domain/ApiResponse";
import { ShipType } from "../domain/ShipType";
import { EitherApiResponse, EuClient } from "./ApiClient";
import { formatOptions } from "./util";
import {
  RankedPlayerStatistics,
  RankedSeason,
  RankedShipStatistics
} from "../domain/seasons";

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
): Promise<Either<string, ApiResponse<IdIndexedData<RankedPlayerStatistics>>>> {
  const response: EitherApiResponse<
    IdIndexedData<RankedPlayerStatistics>
  > = await EuClient.queryApi(
    "seasons/accountinfo",
    formatOptions({ account_id: id, season_id: seasonId, ...options }),
    axiosOptions
  );
  return response
    .catchMap(_ => Left("Ranked stats fetch failed"))
    .flatMap(val => {
      if (val.data[id] === null) {
        return Left(`Player has not played during season ${seasonId}`);
      }
      return Right(val);
    });
}

export async function getRankedShipsStats(
  id: number,
  seasonId: number,
  options: Omit<ShipRankedSearchOptions, "season_id" | "account_id"> = {},
  axiosOptions?: AxiosRequestConfig
) {
  const response: EitherApiResponse<
    IdIndexedData<RankedShipStatistics[]>
  > = await EuClient.queryApi(
    "seasons/shipstats",
    formatOptions({ account_id: id, season_id: seasonId, ...options }),
    axiosOptions
  );
  return response.catchMap(_ => Left("Ranked ship stats fetch failed"));
}

interface SeasonOptions {
  season_id?: number[];
  fields?: Array<keyof RankedSeason>;
  language?: string;

  [field: string]: string | string[] | number[] | undefined;
}

export async function getSeasons(
  options?: SeasonOptions,
  axiosOptions?: AxiosRequestConfig
) {
  const response: EitherApiResponse<
    IdIndexedData<RankedSeason>
  > = await EuClient.queryApi(
    "seasons/info",
    formatOptions(options),
    axiosOptions
  );
  return response.catchMap(_ => Left("Ranked seasons fetch failed"));
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
