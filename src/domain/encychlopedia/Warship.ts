import { AssociativeArray } from "../../common/types";
import { AntiAircraft } from "./modules/AntiAircraft";
import { Artillery } from "./modules/Artillery";
import { Engine } from "./modules/Engine";
import { FireControl } from "./modules/FireControl";
import { FlightControl } from "./modules/FlightControl";
import { DiveBomber, Fighters, TorpedoBomber } from "./modules/Planes";
import { Atbas } from "./modules/SecondaryArtillery";
import {
  Armour,
  Concealment,
  Hull,
  Mobility,
  Weaponry
} from "./modules/ShipStats";
import { Torpedoes } from "./modules/Torpedoes";

export interface DefaultProfile {
  /**
   * Maximum battle tier for a random battle
   */
  battle_level_range_max: number;

  /**
   * Minimum battle tier for a random battle
   */
  battle_level_range_min: number;

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

export interface Images {
  /**
   * URL to 186 x 48 px outline image of ship
   */
  contour: string;

  /**
   * URL to 870 x 512 px image of ship
   */
  large: string;

  /**
   * URL to 435 x 256 px image of ship
   */
  medium: string;

  /**
   * URL to 214 x 126 px image of ship
   */
  small: string;
}

export interface WarshipModules {
  /**
   * Main battery. If the module is absent on the ship, field value is null.
   */
  artillery: number[];

  /**
   * Dive bombers. If the module is absent on the ship, field value is null.
   */
  dive_bomber: number[];

  /**
   * Engines
   */
  engine: number[];

  /**
   *  If the module is absent on the ship, field value is null.
   */
  fighter: number[];

  /**
   * Gun Fire Control System. If the module is absent on the ship, field value is null.
   */
  fire_control: number[];

  /**
   * Flight Control. If the module is absent on the ship, field value is null.
   */
  flight_control: number[];

  /**
   * Hull
   */
  hull: number[];

  /**
   * Torpedo bombers. If the module is absent on the ship, field value is null.
   */
  torpedo_bomber: number[];

  /**
   * Torpedo tubes. If the module is absent on the ship, field value is null.
   */
  torpedoes: number[];
}

export interface ModuleTree {
  /**
   * Indicates if the module is basic
   */
  is_default: boolean;

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
   * List of module IDs available after research of the module
   */
  next_modules: number[];

  /**
   * List of vehicle IDs available after research of the module
   */
  next_ships: number[];

  /**
   * Cost in credits
   */
  price_credit: number;

  /**
   * Research cost
   */
  price_xp: number;

  /**
   * Module type
   */
  type: string;
}

export interface Warship {
  /**
   * Ship description
   */
  description: string;

  /**
   * Indicates that ship characteristics are used for illustration, and may be changed.
   */
  has_demo_profile: boolean;

  /**
   * Indicates if the ship is Premium ship
   */
  is_premium: boolean;

  /**
   * Indicates if the ship is on a special offer
   */
  is_special: boolean;

  /**
   * Number of slots for upgrades
   */
  mod_slots: number;

  /**
   * Ship name
   */
  name: string;

  /**
   * Nation
   */
  nation: string;

  /**
   * List of ships available for research in form of pairs
   */
  next_ships: AssociativeArray<number>;

  /**
   * Cost in credits
   */
  price_credit: number;

  /**
   * Cost in gold
   */
  price_gold: number;

  /**
   * Ship ID
   */
  ship_id: number;

  /**
   * Ship string ID
   */
  ship_id_str: string;

  /**
   * Tier
   */
  tier: number;

  /**
   * Type of ship
   */
  type: string;

  /**
   * List of compatible Modifications
   */
  upgrades: number[];

  /**
   * Parameters of basic configuration
   */
  default_profile: DefaultProfile;

  /**
   * Image of a ship
   */
  images: Images;

  /**
   * List of compatible modules
   */
  modules: WarshipModules;

  /**
   * Module research information
   */
  modules_tree: ModuleTree;
}
