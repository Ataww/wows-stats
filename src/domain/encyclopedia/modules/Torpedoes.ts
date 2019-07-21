import { AssociativeArray } from "../../../common/types";

export interface TorpedoesSlots {
  /**
   * Torpedo tubes per slot
   */
  barrels: number;

  /**
   * Caliber
   */
  caliber: number;

  /**
   * Torpedo tubes
   */
  guns: number;

  /**
   * Name
   */
  name: string;
}

export interface Torpedoes {
  /**
   * Firing range
   */
  distance: number;

  /**
   * Maximum Damage
   */
  max_damage: number;

  /**
   * Reload Time (sec)
   */
  reload_time: number;

  /**
   * 180 Degree Turn Time (sec)
   */
  rotation_time: number;

  /**
   * Torpedo
   */
  torpedo_name: string;

  /**
   * Torpedo Speed (knots)
   */
  torpedo_speed: number;

  /**
   * Torpedo tubes' ID
   */
  torpedoes_id: number;

  /**
   * Torpedo tubes string ID
   */
  torpedoes_id_str: string;

  /**
   * Torpedo range (km)
   */
  visibility_dist: number;

  /**
   * Slots for Torpedo tubes
   */
  slots: AssociativeArray<TorpedoesSlots>;
}
