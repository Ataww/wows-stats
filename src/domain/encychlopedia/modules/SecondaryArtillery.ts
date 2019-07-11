import { AssociativeArray } from "../../../common/types";

export interface AtbasSlots {
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
   * Rate of fire (rounds / min)
   */
  gun_rate: number;

  /**
   * Shell name
   */
  name: string;

  /**
   * Reload time (s)
   */
  shot_delay: number;

  /**
   * Shell type
   */
  type: string;
}

export interface Atbas {
  /**
   * Firing range
   */
  distance: number;

  /**
   * Main gun slots
   */
  slots: AssociativeArray<AtbasSlots>;
}
