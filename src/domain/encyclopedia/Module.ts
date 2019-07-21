import { MinMax } from "../../common/types";

export interface ArtilleryProfile {
  /**
   * Rate of fire (rounds / min)
   */
  gun_rate: number;

  /**
   * Maximum Damage caused by Armor Piercing Shells
   */
  max_damage_AP: number;

  /**
   * Maximum Damage caused by High Explosive Shells
   */
  max_damage_HE: number;

  /**
   * 180 Degree Turn Time (sec)
   */
  rotation_time: number;
}

export interface DiveBomberProfile {
  /**
   * Chance of Fire on target caused by bomb (%)
   */
  bomb_burn_probability: number;

  /**
   * Cruise Speed (knots)
   */
  cruise_speed: number;

  /**
   * Maximum Bomb Damage
   */
  max_damage: number;

  /**
   * Survivability
   */
  max_health: number;

  /**
   * Accuracy
   */
  accuracy: MinMax;
}

export interface EngineProfile {
  /**
   * Top Speed (knots)
   */
  max_speed: number;
}

export interface FighterProfile {
  /**
   * Average damage caused per second
   */
  avg_damage: number;

  /**
   * Cruise Speed (knots)
   */
  cruise_speed: number;

  /**
   * Ammunition
   */
  max_ammo: number;

  /**
   * Survivability
   */
  max_health: number;
}

export interface FireControlProfile {
  /**
   * Firing range
   */
  distance: number;

  /**
   * Firing Range extension (%)
   */
  distance_increase: number;
}

export interface FlightControlProfile {
  /**
   * Number of bomber squadrons
   */
  bomber_squadrons: number;

  /**
   * Number of fighter squadrons
   */
  fighter_squadrons: number;

  /**
   * Number of torpedo bomber squadrons
   */
  torpedo_squadrons: number;
}

export interface HullProfile {
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

export interface TorpedoBomberProfile {
  /**
   * Cruise Speed (knots)
   */
  cruise_speed: number;

  /**
   * Firing range
   */
  distance: number;

  /**
   * Maximum Bomb Damage
   */
  max_damage: number;

  /**
   * Survivability
   */
  max_health: number;

  /**
   * Maximum torpedo damage
   */
  torpedo_damage: number;

  /**
   * Top Speed (knots)
   */
  torpedo_max_speed: number;

  /**
   * Torpedo name
   */
  torpedo_name: string;
}

export interface TorpedoesProfile {
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
  shot_speed: number;

  /**
   * Torpedo Speed (knots)
   */
  torpedo_speed: number;
}

export interface ModuleProfile {
  /**
   * Main battery
   */
  artillery: ArtilleryProfile;

  /**
   * Dive bombers
   */
  dive_bomber: DiveBomberProfile;

  /**
   * Engine
   */
  engine: EngineProfile;

  /**
   * Fighters
   */
  fighter: FighterProfile;

  /**
   * Gun Fire Control System
   */
  fire_control: FireControlProfile;

  /**
   * Flight Control
   */
  flight_control: FlightControlProfile;

  /**
   * Hull
   */
  hull: HullProfile;

  /**
   * Torpedo Bombers
   */
  torpedo_bomber: TorpedoBomberProfile;

  /**
   * Torpedo tubes
   */
  torpedoes: TorpedoesProfile;
}

export interface Modules {
  /**
   * Image link
   */
  image: string;

  /**
   * Module ID
   */
  module_id: number;

  /**
   * Module string ID
   */
  module_id_str: string;

  /**
   * Module name
   */
  name: string;

  /**
   * Cost in credits
   */
  price_credit: number;

  /**
   * Tag
   */
  tag: string;

  /**
   * Module type
   */
  type: string;

  /**
   * Module parameters, values related to the module type
   */
  profile: ModuleProfile;
}
