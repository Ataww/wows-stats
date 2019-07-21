export interface Achievements {
  /**
   * Battle achievements
   */
  battle: BattleAchievements;
}

export interface BattleAchievements {
  /**
   * Achievement ID
   */
  achievement_id: string;

  /**
   * Battle types in which players can receive achievements. Battle types according to the Battle Types method response
   */
  battle_types: string[];

  /**
   * Indicates how many times achievement can be obtained per battle
   */
  count_per_battle: string;

  /**
   * Achievement description
   */
  description: string;

  /**
   * Achievement unavailable
   */
  hidden: number;

  /**
   * Image link
   */
  image: string;

  /**
   * Image of an unearned achievement
   */
  image_inactive: string;

  /**
   * Indicates if achievement is in progress
   */
  is_progress: number;

  /**
   * Maximum progress
   */
  max_progress: number;

  /**
   * Maximum tier of ship to receive this achievement
   */
  max_ship_level: number;

  /**
   * Minimum tier of ship to receive this achievement
   */
  min_ship_level: number;

  /**
   * Achievement that can be received multiple times.
   */
  multiple: number;

  /**
   * Achievement name
   */
  name: string;

  /**
   * Indicates if a reward is granted for achievement
   */
  reward: boolean;

  /**
   * Subtype of achievement
   */
  sub_type: string;

  /**
   * Type of achievement
   */
  type: string;
}
