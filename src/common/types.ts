export type AssociativeArray<V = string> = { [key: string]: V };
export type ConstrainedAssociativeArray<K = {}, V = string> = {
  [key in keyof K]: V
};

export interface MinMax {
  /**
   * Maximum value
   */
  max: number;

  /**
   * Minimum value
   */
  min: number;
}
