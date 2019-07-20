export enum StatisticsType {
  PVP = "pvp",
  PVP_DIV2 = "pvp_div2",
  PVP_DIV3 = "pvp_div3",
  PVP_SOLO = "pvp_solo",
  TEAMBATTLE = "club",
  RANKED_DIV2 = "rank_div2",
  RANKED_DIV3 = "rank_div3",
  RANKED_SOLO = "rank_solo",
  PVE_DIV2 = "pve_div2",
  PVE_DIV3 = "pve_div3",
  PVE_SOLO = "pve_solo",
  PVE = "pve",
  OPERATION_SOLO = "oper_solo",
  OPERATION_DIV = "oper_div",
  OPERATION_DIV_HARD = "oper_div_hard"
}

export type PVXStatsType =
  | StatisticsType.PVE
  | StatisticsType.PVE_DIV2
  | StatisticsType.PVE_DIV3
  | StatisticsType.PVE_SOLO
  | StatisticsType.PVP
  | StatisticsType.PVP_DIV2
  | StatisticsType.PVP_DIV3
  | StatisticsType.PVP_SOLO
  | StatisticsType.RANKED_DIV2
  | StatisticsType.RANKED_DIV3
  | StatisticsType.RANKED_SOLO
  | StatisticsType.TEAMBATTLE;

export type OperationStatsType =
  | StatisticsType.OPERATION_DIV
  | StatisticsType.OPERATION_DIV_HARD
  | StatisticsType.OPERATION_SOLO;
