import { PaginatedParameters } from "../PaginatedParameters";

export interface PClanPlayerData extends PaginatedParameters {
  account_id: number;
  extra?: "clan";
  search?: string;
}
