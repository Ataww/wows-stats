import { AssociativeArray } from "../../common/types";

export interface ClanMember {
  /**
   *     User ID
   */
  account_id: number;

  /**
   *     Player name
   */
  account_name: string;

  /**
   *     Date when player joined clan
   */
  joined_at: number;

  /**
   *     Technical position name
   */
  role: string;
}

export interface ClanDetails {
  /**
   *     Clan ID
   */
  clan_id: number;

  /**
   *     Clan creation date
   */
  created_at: number;

  /**
   *     Clan creator ID
   */
  creator_id: number;

  /**
   *     Clan creator's name
   */
  creator_name: string;

  /**
   *     Clan description
   */
  description: string;

  /**
   *     Clan has been deleted. The deleted clan data contains valid values for the following fields only: clan_id, is_clan_disbanded, updated_at.
   */
  is_clan_disbanded: boolean;

  /**
   *     Commander ID
   */
  leader_id: number;

  /**
   *     Commander's name
   */
  leader_name: string;

  /**
   *     Number of clan members
   */
  count: number;

  /**
   *     List of clan players' IDs
   */
  ids: number[];

  /**
   *     Clan name
   */
  name: string;

  /**
   *     Old clan name
   */
  old_name: string;

  /**
   *     Old clan tag
   */
  old_tag: string;

  /**
   *     Time (UTC) when clan name was changed
   */
  renamed_at: number;

  /**
   *     Clan tag
   */
  tag: string;

  /**
   *     Time when clan details were updated
   */
  updated_at: number;

  members: AssociativeArray<ClanMember>;
}
