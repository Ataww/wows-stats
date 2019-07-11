import { MinMax } from "../../../common/types";

export interface PlaneSquadron {
  /**
   * Cruise Speed (knots)
   */
  cruise_speed: number;

  /**
   * Survivability
   */
  max_health: number;

  /**
   * Name of squadron
   */
  name: string;

  /**
   * Squadron tier
   */
  plane_level: number;

  /**
   * Time of preparation for takeoff (sec)
   */
  prepare_time: number;

  /**
   * Number of squadrons
   */
  squadrons: number;

  /**
   * Average damage per rear gunner of a torpedo bomber per second
   */
  gunner_damage: number;

  /**
   * Number of aircraft in a squadron
   */
  count_in_squadron: MinMax;
}

export interface DiveBomber extends PlaneSquadron {
  /**
   * Bomb weight
   */
  bomb_bullet_mass: number;

  /**
   * Chance of Fire on target caused by bomb (%)
   */
  bomb_burn_probability: number;

  /**
   * Maximum bomb damage
   */
  bomb_damage: number;

  /**
   * Bomb name
   */
  bomb_name: string;

  /**
   * Dive bombers' ID
   */
  dive_bomber_id: number;

  /**
   * Dive bombers string ID
   */
  dive_bomber_id_str: string;

  /**
   * Average damage per rear gunner of a dive bomber per second
   */
  gunner_damage: number;

  /**
   * Maximum Bomb Damage
   */
  max_damage: number;

  /**
   * Accuracy
   */
  accuracy: MinMax;
}

export interface Fighters extends PlaneSquadron {
  /**
   * Average damage caused per second
   */
  avg_damage: number;

  /**
   * Fighters' ID
   */
  fighters_id: number;

  /**
   * Fighters string ID
   */
  fighters_id_str: string;

  /**
   * Ammunition
   */
  max_ammo: number;
}

export interface TorpedoBomber extends PlaneSquadron {
  /**
   * Maximum Bomb Damage
   */
  max_damage: number;

  /**
   * Torpedo bombers' ID
   */
  torpedo_bomber_id: number;

  /**
   * Torpedo bombers string ID
   */
  torpedo_bomber_id_str: string;

  /**
   * Maximum torpedo damage
   */
  torpedo_damage: number;

  /**
   * Firing range
   */
  torpedo_distance: number;

  /**
   * Top Speed (knots)
   */
  torpedo_max_speed: number;

  /**
   * Torpedo name
   */
  torpedo_name: string;
}
