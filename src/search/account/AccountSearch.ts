import { PaginatedParameters } from "../PaginatedParameters";

export interface AccountSearch extends PaginatedParameters {
  search: string;
  type?: "startsWith" | "exact";
}
