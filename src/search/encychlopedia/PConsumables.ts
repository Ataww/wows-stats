import { PaginatedParameters } from "../PaginatedParameters";
import { ConsumableType } from "../../domain/ConsumableType";

export interface PConsumables extends PaginatedParameters {
  consumable_id?: number | number[];
  type?: ConsumableType;
}
