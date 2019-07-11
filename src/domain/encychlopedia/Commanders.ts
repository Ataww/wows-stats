import { AssociativeArray } from "../../common/types";

export interface Commanders {
  /**
   * Basic training cost
   */
  base_training_hire_price: number;

  /**
   * Basic training level
   */
  base_training_level: number;

  /**
   * Commanders' first names
   */
  first_names: string[];

  /**
   * Retraining cost in doubloons
   */
  gold_retraining_price: number;

  /**
   * Training cost in gold
   */
  gold_training_hire_price: number;

  /**
   * Commander training level purchased for doubloons
   */
  gold_training_level: number;

  /**
   * The list of the Commander images:
   * 1—URL to the image of the Commander with 1–7 skill points;
   * 8—URL to the image of the Commander with 8–13 skill points;
   * 14—URL to the image of the Commander with 14–20 skill points;.
   * If only the value for the key 1 is specified, the Commander has not earned skill points yet.
   */
  icons: AssociativeArray[];

  /**
   * Indicates if the skill is preserved after retraining
   */
  is_retrainable: boolean;

  /**
   * Commanders' last names
   */
  last_names: string[];

  /**
   * Retraining cost in credits
   */
  money_retraining_price: number;

  /**
   * Training cost in credits
   */
  money_training_hire_price: number;

  /**
   * Commander training level purchased for credits
   */
  money_training_level: number;

  /**
   * Nation
   */
  nation: string;
}
