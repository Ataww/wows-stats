export interface FireControl {
  /**
   * Firing range
   */
  distance: number;

  /**
   * Firing Range extension (%)
   */
  distance_increase: number;

  /**
   * ID of Gun Fire Control System
   */
  fire_control_id: number;

  /**
   * String ID of Gun Fire Control System
   */
  fire_control_id_str: string;
}
