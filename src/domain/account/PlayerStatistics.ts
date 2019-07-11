import { Statistics } from "../Statistics";
import { StatisticsType } from "../StatisticsType";

export type PlayerStatistics = {
  [type in StatisticsType.PVE | StatisticsType.PVP]: Statistics
};
