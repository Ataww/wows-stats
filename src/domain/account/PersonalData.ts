export interface PersonalData {
  account_id: number;
  created_at: number;
  hidden_profile: boolean;
  karma: number;
  last_battle_time: number;
  leveling_points: number;
  leveling_tier: number;
  /**
   * End time of last game session
   */
  logout_at: number;

  /**
   * Player name
   */
  nickname: string;
  /**
   * Date when stats for player and player's ships were updated
   */
  stats_updated_at: number;

  /**
   * Date when player details were updated
   */
  updated_at: number;
}
