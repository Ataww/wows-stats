import {AssociativeArray} from "../../common/types";

export interface SeasonImage {
    /**
     *     Background image
     */
    background: string;

    /**
     *     Insignia image
     */
    insignia: string;
}

export interface RankedSeason {
    /**
     *     Minimum Service Record Level to join a season
     */
    account_tier: number;

    /**
     *     Season closing time
     */
    close_at: number;

    /**
     *     Season finishing time
     */
    finish_at: number;

    /**
     *     Maximum ship Tier in a season
     */
    max_ship_tier: number;

    /**
     *     Minimum ship Tier in a season
     */
    min_ship_tier: number;

    /**
     *     Parent season ID
     */
    parent_season_id: number;

    /**
     *     Season ID
     */
    season_id: number;

    /**
     *     Season name
     */
    season_name: string;

    /**
     *     Season opening time
     */
    start_at: number;

    /**
     *     Season start rank
     */
    start_rank: number;

    images: AssociativeArray<SeasonImage>;


}