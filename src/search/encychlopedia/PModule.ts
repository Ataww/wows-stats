import { PaginatedParameters } from "../PaginatedParameters";
import { ModuleType } from "../../domain/ModuleType";

export interface PModule extends PaginatedParameters {
  module_id?: number | number[];
  type: ModuleType;
}
