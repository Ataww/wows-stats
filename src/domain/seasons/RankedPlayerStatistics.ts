import { RankedStatisticsType } from "./index";
import { Statistics } from "../Statistics";
import {
  NumberAssociativeArray,
  ConstrainedAssociativeArray
} from "../../common/types";

export interface RankInfo {
  max_rank: number;
  start_rank: number;
  stars: number;
  rank: number;
  stage: number;
}

export interface SeasonStats
  extends Partial<Record<RankedStatisticsType, Statistics>> {
  rank_info: RankInfo;
}

export interface RankedPlayerStatistics {
  account_id: number;
  seasons: NumberAssociativeArray<SeasonStats>;
}
