import { BaseParameters } from "../BaseParameters";
import { WarshipNations } from "../../domain/Ship";

export interface PCommanderRank extends BaseParameters {
  nation?: WarshipNations;
}
