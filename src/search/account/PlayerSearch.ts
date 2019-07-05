import { BaseParameters } from "../BaseParameters";

export type PlayerExtraFields =
  | "private.grouped_contacts"
  | "private.port"
  | "statistics.club"
  | "statistics.oper_div"
  | "statistics.oper_div_hard"
  | "statistics.oper_solo"
  | "statistics.pve"
  | "statistics.pve_div2"
  | "statistics.pve_div3"
  | "statistics.pve_solo"
  | "statistics.pvp_div2"
  | "statistics.pvp_div3"
  | "statistics.pvp_solo"
  | "statistics.rank_div2"
  | "statistics.rank_div3"
  | "statistics.rank_solo";

export interface PlayerSearch extends BaseParameters {
  account_id: number | number[];
  access_token?: string;
  extra?: PlayerExtraFields;
}
