import { BaseParameters } from "../BaseParameters";
import { StatisticsType } from "../../domain/StatisticsType";

export interface PShipStatistics extends BaseParameters {
  account_id: number;
  access_token?: string;
  extra?: StatisticsType | StatisticsType[];
  in_garage?: "0" | "1";
  ship_id: number | number[];
}
