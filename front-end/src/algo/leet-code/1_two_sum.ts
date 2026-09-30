export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const findInt = target - nums[i];
    const foundIndex = seen.get(findInt);
    console.log(foundIndex, findInt);

    if (foundIndex !== undefined) {
      return [foundIndex, i];
    }
    seen.set(nums[i], i);
  }
  return [];
}

// console.log(twoSum([2, 7, 11, 15], 17));
