enum StatisticsType {
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

export interface PlayerStats {
  account_id: number;
  nickname: string;
  hidden_profile: boolean;
  statistics: { [type in StatisticsType]: Statistics };
}

export interface Statistics {
  battles: number;
  xp: number;
  damage_dealt: number;
  frags: number;
  losses: number;
  wins: number;
  draws: number;
}

export interface RankInfo {
  max_rank: number;
  start_rank: number;
  stars: number;
  rank: number;
  stage: number;
}

export interface SeasonStats {
  rank_info: RankInfo;
  rank_div2?: Statistics;
  rank_div3?: Statistics;
  rank_solo?: Statistics;
}

export interface RankedStats {
  account_id: number;
  seasons: {
    [id: number]: SeasonStats;
  };
}
