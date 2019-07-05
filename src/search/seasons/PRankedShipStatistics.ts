import { BaseParameters } from "../BaseParameters";

export interface PRankedShipStatistics extends BaseParameters {
  account_id: number;
  access_token?: string;
  season_id?: number | number[];
  ship_id?: number | number[];
}
