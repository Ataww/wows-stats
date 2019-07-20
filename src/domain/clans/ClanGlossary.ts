import { AssociativeArray } from "../../common/types";

export interface BuildingType {
  building_type_id: number;
  name: string;
}

export interface Building {
  /**
   * The type of the bonus that is provided to the clan members after building the installation.
   * Existing bonus types:
   *    exp_boost—rate of additional XP;
   *   members_count—number of clan members on which the clan size is increased;
   *   maintenance_discount—rate of reducing cost of servicing ships;
   *   purchase_discount—rate of reducing cost of researched ships;
   *   dummy—no bonuses.
   */
  bonus_type: string;

  /**
   *     The value of the bonus based on this bonus type.
   */
  bonus_value: number;

  /**
   *     Installation ID
   */
  building_id: number;

  /**
   *     Installation ID
   */
  building_type_id: number;

  /**
   *     Building cost in oil
   */
  cost: number;

  /**
   *     Installation name
   */
  name: string;

  /**
   *     The nation of ships that will get a bonus from this installation. If value = "empty string" or "null", the bonus will be received on ships of all nations.
   */
  ship_nation: string;

  /**
   *     Tier of ships that will get a bonus after building this installation. If value = "null", the bonus will be received on ships of all Tiers.
   */
  ship_tier: number;

  /**
   *     Type of ships that will get a bonus after building this installation. If value = "empty string" or "null", the bonus will be received on ships of all types.
   */
  ship_type: string;
}

export interface Settings {
  /**
   * Max number of clan members
   */
  max_member_count: number;
}

export interface ClanGlossary {
  clans_roles: AssociativeArray;
  building_types: AssociativeArray<BuildingType>;
  buildings: AssociativeArray<Building>;
  settings: Settings;
}
