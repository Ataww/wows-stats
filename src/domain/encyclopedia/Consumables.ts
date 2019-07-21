import { AssociativeArray } from "../../common/types";

export interface ConsumableProfile {
  /**
   * Characteristic description
   */
  description: string;

  /**
   * Characteristic value
   */
  value: number;
}

export interface Consumables {
  /**
   * Consumable ID
   */
  consumable_id: number;

  /**
   * Consumable description
   */
  description: string;

  /**
   * Link to consumable image
   */
  image: string;

  /**
   * Consumable name
   */
  name: string;

  /**
   * Cost in credits
   */
  price_credit: number;

  /**
   * Cost in doubloons
   */
  price_gold: number;

  /**
   * Consumable type
   */
  type: string;

  /**
   * Consumable characteristics
   */
  profile: AssociativeArray<ConsumableProfile>;
}
