export function majorityElement(nums: number[]): number {
  const seen = new Map<number, number>();
  let moreMeet = 0;
  let key = 0;

  for (const num of nums) {
    const currentCount = (seen.get(num) || 0) + 1;
    seen.set(num, currentCount);
    if (currentCount > moreMeet) {
      moreMeet = currentCount;
      key = num;
    }
  }

  return key;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
