import {
  AssociativeArray,
  ConstrainedAssociativeArray
} from "../../common/types";
import { Languages } from "../../search";
import { ShipType } from "../ShipType";
import { WarshipNations } from "../Ship";

export interface ShipTypeImage {
  image: string;
  image_elite: string;
  image_premium: string;
}

export interface EncychlopediaInformations {
  game_version: string;
  languages: ConstrainedAssociativeArray<Languages, Languages>;
  ship_modifications: AssociativeArray;
  ship_modules: AssociativeArray;
  ship_nations: ConstrainedAssociativeArray<WarshipNations>;
  ship_types: ConstrainedAssociativeArray<ShipType, ShipType>;
  ships_updated_at: number;
  ship_type_images: ConstrainedAssociativeArray<ShipType, ShipTypeImage>;
}
