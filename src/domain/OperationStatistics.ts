import {AssociativeArray} from "../common/types";
import {BaseStatistics} from "./BaseStatistics";

export interface OperationStatistics extends BaseStatistics {

    wins_by_task: AssociativeArray<number>;
}