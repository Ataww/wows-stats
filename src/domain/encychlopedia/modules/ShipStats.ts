import { MinMax } from "../../../common/types";

export interface Hull {
  /**
   * AA Mounts
   */
  anti_aircraft_barrels: number;

  /**
   * Number of main turrets
   */
  artillery_barrels: number;

  /**
   * Secondary gun turrets
   */
  atba_barrels: number;

  /**
   * Hit points
   */
  health: number;

  /**
   * Hull ID
   */
  hull_id: number;

  /**
   * Hull string ID
   */
  hull_id_str: string;

  /**
   * Hangar capacity
   */
  planes_amount: number;

  /**
   * Torpedo tubes
   */
  torpedoes_barrels: number;

  /**
   * Armor (mm)
   */
  range: MinMax;
}

export interface Armour {
  /**
   * Torpedo Protection. Damage Reduction (%)
   */
  flood_damage: number;

  /**
   * Torpedo Protection. Flooding Risk Reduction (%)
   */
  flood_prob: number;

  /**
   * Hit points
   */
  health: number;

  /**
   * Armor protection (%)
   */
  total: number;

  /**
   * Gun Casemate
   */
  casemate: MinMax;

  /**
   * Citadel
   */
  citadel: MinMax;

  /**
   * Armored Deck
   */
  deck: MinMax;

  /**
   * Forward and After Ends
   */
  extremities: MinMax;

  /**
   * Armor
   */
  range: MinMax;
}

export interface Weaponry {
  /**
   * Aircraft (%)
   */
  aircraft: number;

  /**
   * AA Guns (%)
   */
  anti_aircraft: number;

  /**
   * Artillery (%)
   */
  artillery: number;

  /**
   * Torpedoes (%)
   */
  torpedoes: number;
}

export interface Mobility {
  /**
   * Top Speed (knots)
   */
  max_speed: number;

  /**
   * Rudder Shift Time (sec)
   */
  rudder_time: number;

  /**
   * Maneuverability (%)
   */
  total: number;

  /**
   * Turning Circle Radius (m)
   */
  turning_radius: number;
}

export interface Concealment {
  /**
   * Air Detectability Range
   */
  detect_distance_by_plane: number;

  /**
   * Surface Detectability Range
   */
  detect_distance_by_ship: number;

  /**
   * Concealment (%)
   */
  total: number;
}
