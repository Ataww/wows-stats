import { ClanSummary } from "./ClanSummary";

export interface ClanPlayerData {
  /**
   *     User ID
   */
  account_id: number;

  /**
   *     Player name
   */
  account_name: string;

  /**
   *     Clan ID
   */
  clan_id: number;

  /**
   *     Date when player joined clan
   */
  joined_at: number;

  /**
   *     Technical position name
   */
  role: string;

  clan?: ClanSummary;
}
