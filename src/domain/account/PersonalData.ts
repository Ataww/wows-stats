import { Statistics } from "../PlayerStats";
import { StatisticsType } from "../StatisticsType";

export interface PrivateGroupedData {
  /**
   * Blocked
   */
  blocked: number;

  /**
   * Groups
   */
  groups: { [id: string]: number[] };

  /**
   * Not grouped
   */
  ungrouped: number;
}

export interface PrivateData {
  /**
   * Overall battle life time in seconds
   */
  battle_life_time: number;

  /**
   * Credits
   */
  credits: number;
  /**
   * Number of slots available in the Port
   */
  empty_slots: number;

  /**
   * Free Experience
   */
  free_xp: number;

  /**
   * Gold
   */
  gold: number;

  /**
   * Ships in Port.
   */
  port?: number[];

  /**
   * Premium Account expiration time
   */
  premium_expires_at: number;

  /**
   * Number of slots in the Port
   */
  slots: number;

  groupd_contacts: PrivateGroupedData;
}

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

  private: PrivateData;

  statistics: { [type in StatisticsType]: Statistics };
}
