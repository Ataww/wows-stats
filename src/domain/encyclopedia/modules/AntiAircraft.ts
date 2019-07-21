import { AssociativeArray } from "../../../common/types";

export interface AntiAircraftSlots {
  /**
   * Average damage per second
   */
  avg_damage: number;

  /**
   * Caliber
   */
  caliber: number;

  /**
   * Firing range (km)
   */
  distance: number;

  /**
   * Number of guns
   */
  guns: number;

  /**
   * Gun name
   */
  name: string;
}

export interface AntiAircraft {
  /**
   * Anti-aircraft effectiveness
   */
  defense: number;

  /**
   * Gun slots
   */
  slots: AssociativeArray<AntiAircraftSlots>;
}
