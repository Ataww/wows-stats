export interface RankedSeason {
  season_id: number;
  season_name: string;
  parent_season_id: number;
  account_tier: number;
  close_at: number;
  start_at: number;
  finish_at: number;
  max_ship_tier: number;
  min_ship_tier: number;
  start_rank: number;
}
