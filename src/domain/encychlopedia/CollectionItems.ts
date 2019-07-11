export interface ItemImage {
  /**
   * URL to the large card icon
   */
  large: string;

  /**
   * URL to the medium card icon
   */
  medium: string;

  /**
   * URL to the small card icon
   */
  small: string;
}

export interface CollectionItems {
  /**
   * Item ID
   */
  card_id: number;

  /**
   * Collection ID
   */
  collection_id: number;

  /**
   * Item description
   */
  description: string;

  /**
   * Item name
   */
  name: string;

  /**
   * Item tag
   */
  tag: string;

  /**
   * Item card icons
   */
  images: ItemImage;
}
