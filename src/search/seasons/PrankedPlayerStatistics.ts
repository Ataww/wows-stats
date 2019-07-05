import { BaseParameters } from "../BaseParameters";

export interface PRankedPlayerStatistics extends BaseParameters {
  account_id: number;
  access_token?: string;
  season_id?: number | number[];
}
