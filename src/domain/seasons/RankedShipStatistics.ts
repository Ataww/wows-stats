import { RankedStatisticsType } from "./index";
import { Statistics } from "../Statistics";
import { NumberAssociativeArray } from "../../common/types";

export interface RankedShipStatistics {
  account_id: number;
  ship_id: number;
  seasons: NumberAssociativeArray<
    Partial<Record<RankedStatisticsType, Statistics>>
  >;
}
