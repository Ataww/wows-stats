import { useEffect, useState } from "react";
import { concat, isEmpty, pipe, without, uniq } from "ramda";

/**
 *
 * @param initial The initial left list
 * @param moveRightCB Callback function when moving a value to the right list
 * @param moveLeftCB Callback function when moving a value to the left list
 */
export default function<T extends any = any>(
  initial: T[],
  moveRightCB?: (value: T) => void,
  moveLeftCB?: (value: T) => void
): [
  T[],
  T[],
  (value?: T) => T | undefined,
  (value?: T) => T | undefined,
  (leftVal: T, rightVal: T) => T[] | undefined
] {
  const [left, setLeft] = useState<T[]>([]);
  const [right, setRight] = useState<T[]>([]);

  useEffect(() => {
    setLeft(initial);
    setRight([]);
  }, [initial]);

  // Remove value from the left list to put it in the right one
  function moveRight(value?: T) {
    if (isEmpty(left)) {
      return;
    }
    const entry: T = value ? value : left[0];
    const removeLeft = pipe(
      without([entry]),
      setLeft
    );
    removeLeft(left);
    const addRight = pipe(
      concat([entry]),
      setRight
    );
    addRight(right);
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
    const removeRight = pipe(
      without([entry]),
      setRight
    );
    removeRight(right);
    const addLeft = pipe(
      concat([entry]),
      setLeft
    );
    addLeft(left);
    // execute callback if defined
    moveLeftCB && moveLeftCB(entry);
    return entry;
  }

  function swap(leftVal: T, rightVal: T) {
    if (isEmpty(left) || isEmpty(right)) {
      return;
    }
    pipe(
      without([rightVal]),
      concat([leftVal]),
      uniq,
      setRight
    )(right);
    pipe(
      without([leftVal]),
      concat([rightVal]),
      uniq,
      setLeft
    )(left);
    return [rightVal, leftVal];
  }

  return [left, right, moveRight, moveLeft, swap];
}
