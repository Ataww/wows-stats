import {ShipType} from "./ShipType";

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
  commonwealth: string;
  italy: string;
  usa: string;
  pan_asia: string;
  france: string;
  ussr: string;
  germany: string;
  uk: string;
  japan: string;
  poland: string;
  pan_america: string;
}
