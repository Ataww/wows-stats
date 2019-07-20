import { Statistics } from "../Statistics";
import { StatisticsType } from "../StatisticsType";

type Stats = StatisticsType.PVE | StatisticsType.PVP;
export interface PlayerStatistics extends Partial<Record<Stats, Statistics>> {}
