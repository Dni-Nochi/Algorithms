export function thirdMax(nums: number[]): number {
  const seen = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    seen.add(nums[i]);
  }
  const array = [...seen];
  array.sort((a, b) => b - a);
  if (array.length < 3) {
    return array[0];
  } else {
    return array[2];
  }
}

// console.log(thirdMax([1, 2, 3, 4, 5]));
