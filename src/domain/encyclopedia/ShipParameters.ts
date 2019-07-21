import { AntiAircraft } from "./modules/AntiAircraft";
import {
  Armour,
  Concealment,
  Hull,
  Mobility,
  Weaponry
} from "./modules/ShipStats";
import { Artillery } from "./modules/Artillery";
import { Atbas } from "./modules/SecondaryArtillery";
import { DiveBomber, Fighters, TorpedoBomber } from "./modules/Planes";
import { Engine } from "./modules/Engine";
import { FireControl } from "./modules/FireControl";
import { FlightControl } from "./modules/FlightControl";
import { Torpedoes } from "./modules/Torpedoes";

export interface ShipParameters {
  /**
   * Maximum battle tier for a random battle
   */
  battle_level_range_max: number;

  /**
   * Minimum battle tier for a random battle
   */
  battle_level_range_min: number;

  /**
   * Ship ID
   */
  ship_id: number;

  /**
   * Anti-aircraft guns. If the module is absent on the ship, field value is null.
   */
  anti_aircraft: AntiAircraft;

  /**
   * Survivability of basic configuration
   */
  armour: Armour;

  /**
   * Main battery. If the module is absent on the ship, field value is null.
   */
  artillery: Artillery;

  /**
   * Secondary armament. If the module is absent on the ship, field value is null.
   */
  atbas: Atbas;

  /**
   * Concealment of basic configuration
   */
  concealment: Concealment;

  /**
   * Dive bombers. If the module is absent on the ship, field value is null.
   */
  dive_bomber: DiveBomber;

  /**
   * Engine
   */
  engine: Engine;

  /**
   *  If the module is absent on the ship, field value is null.
   */
  fighters: Fighters;

  /**
   * Gun Fire Control System. If the module is absent on the ship, field value is null.
   */
  fire_control: FireControl;

  /**
   * Flight Control. If the module is absent on the ship, field value is null.
   */
  flight_control: FlightControl;

  /**
   * Hull
   */
  hull: Hull;

  /**
   * Maneuverability of basic configuration
   */
  mobility: Mobility;

  /**
   * Torpedo bombers. If the module is absent on the ship, field value is null.
   */
  torpedo_bomber: TorpedoBomber;

  /**
   * Torpedo tubes. If the module is absent on the ship, field value is null.
   */
  torpedoes: Torpedoes;

  /**
   * Armament effectiveness of basic configuration
   */
  weaponry: Weaponry;
}
