import { StatisticsType } from "../StatisticsType";

export type RankedStatisticsType =
  | StatisticsType.RANKED_DIV2
  | StatisticsType.RANKED_DIV3
  | StatisticsType.RANKED_SOLO;

export * from "./RankedSeason";
export * from "./RankedShipStatistics";
export * from "./RankedPlayerStatistics";
