import { StatisticsType } from "./StatisticsType";

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
