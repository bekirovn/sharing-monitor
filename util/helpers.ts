export function hasIntersection<T>(
  arrA: Array<T>,
  arrB: Array<T>,
  eq = (a: T, b: T) => a === b
): boolean {
  const result = arrA.some((a) => arrB.find((b) => eq(a, b)));
  return result;
}
