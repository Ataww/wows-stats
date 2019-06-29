import ShipType from "./ShipType";

/**
 *
 */
export default interface Warship {
  ship_id: number;
  type: ShipType;
  nation: keyof WarshipNations;
  name: string;
  [field: string]: any;
}

export interface WarshipNations {
  [nation: string]: string;
}
