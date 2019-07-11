import {ShipType} from "../../domain/ShipType";
import { PaginatedParameters } from "../PaginatedParameters";

export interface PWarships extends PaginatedParameters {
  nation?: string | string[];
  ship_id?: number | number[];
  type?: ShipType | ShipType[];
}
