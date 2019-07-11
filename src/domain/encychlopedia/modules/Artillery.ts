import {
  ConstrainedAssociativeArray,
  AssociativeArray
} from "../../../common/types";

export enum ShellType {
  AP = "AP",
  HE = "HE"
}

export interface ArtilleryShells {
  /**
   * Shell weight
   */
  bullet_mass: number;

  /**
   * Shell speed
   */
  bullet_speed: number;

  /**
   * Chance of Fire on target caused by shell (%)
   */
  burn_probability: number;

  /**
   * Maximum Damage
   */
  damage: number;

  /**
   * Shell name
   */
  name: string;

  /**
   * Shell type
   */
  type: string;
}

export interface ArtillerySlots {
  /**
   * Number of barrels per slot
   */
  barrels: number;

  /**
   * Number of main turrets
   */
  guns: number;

  /**
   * Name
   */
  name: string;
}

export interface Artillery {
  /**
   * Gun ID
   */
  artillery_id: number;

  /**
   * Gun string ID
   */
  artillery_id_str: string;

  /**
   * Firing range
   */
  distance: number;

  /**
   * Rate of fire (rounds / min)
   */
  gun_rate: number;

  /**
   * Maximum dispersion (m)
   */
  max_dispersion: number;

  /**
   * 180 Degree Turn Time (sec)
   */
  rotation_time: number;

  /**
   * Main battery reload time (s)
   */
  shot_delay: number;

  /**
   * Shells
   */
  shells: ConstrainedAssociativeArray<ShellType, ArtilleryShells>;

  /**
   * Main gun slots
   */
  slots: AssociativeArray<ArtillerySlots>;
}
