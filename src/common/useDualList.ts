import { useState } from "react";
import { concat, isEmpty, pipe, without } from "ramda";

/**
 *
 * @param initial The initial left list
 * @param moveRightCB Callback function when moving a value to the right list
 * @param moveLeftCB Callback function when moving a value to the left list
 */
export default <T>(
  initial: T[],
  moveRightCB?: (value: T) => void,
  moveLeftCB?: (value: T) => void
): [T[], T[], (value?: T) => T | undefined, (value?: T) => T | undefined] => {
  const [left, setLeft] = useState(initial);
  const [right, setRight] = useState<T[]>([]);

  // Remove value from the left list to put it in the right one
  function moveRight(value?: T) {
    if (isEmpty(left)) {
      return;
    }
    const entry: T = value ? value : left[0];
    pipe(
      without([entry]),
      setLeft
    )(left);
    pipe(
      concat([entry]),
      setRight
    )(right);
    // execute callback if defined
    moveRightCB && moveRightCB(entry);
    return entry;
  }

  // Remove value from the right list to put it in the left one
  function moveLeft(value?: T) {
    if (isEmpty(right)) {
      return;
    }
    const entry: T = value ? value : right[0];
    pipe(
      without([entry]),
      setRight
    )(right);
    pipe(
      concat([entry]),
      setLeft
    )(left);
    // execute callback if defined
    moveLeftCB && moveLeftCB(entry);
    return entry;
  }

  return [left, right, moveRight, moveLeft];
};
