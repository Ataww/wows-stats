import {Statistics} from "../Statistics";
import {OperationStatsType, PVXStatsType} from "../StatisticsType";
import {OperationStatistics} from "../OperationStatistics";

export interface PlayerWarshipStats
    extends Partial<Record<PVXStatsType, Statistics>>,
        Partial<Record<OperationStatsType, OperationStatistics>> {
    /**
     * User ID
     */
    account_id: number;

    /**
     * Battles fought
     */
    battles: number;

    /**
     * Miles travelled
     */
    distance: number;

    /**
     * Last battle time
     */
    last_battle_time: number;

    /**
     * Ship ID
     */
    ship_id: number;

    /**
     * Date when details on ships were updated
     */
    updated_at: number;
}
