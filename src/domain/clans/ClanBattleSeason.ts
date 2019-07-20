export interface League {
  /**
   *     Color of the league icon
   */
  color: string;

  /**
   *     League icon
   */
  icon: string;

  /**
   *     League name
   */
  name: string;
}

export interface ClanBattleSeason {
  /**
   *     Number of the Rating points required for progression to the next league
   */
  division_points: number;

  /**
   *     Season end time
   */
  finish_time: number;

  /**
   *     Season name
   */
  name: string;

  /**
   *     Season ID
   */
  season_id: number;

  /**
   *     Maximum ship Tier in a season
   */
  ship_tier_max: number;

  /**
   *     Minimal ship Tier in a season
   */
  ship_tier_min: number;

  /**
   *     Season start time
   */
  start_time: number;
  leagues: League[];
}
