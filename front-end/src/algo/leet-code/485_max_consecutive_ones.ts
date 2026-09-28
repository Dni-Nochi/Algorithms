export function findMaxConsecutiveOnes(nums: number[]): number {
  let currentValue = 0;
  let biggerStrick = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      currentValue = 0;
    } else {
      currentValue = (currentValue || 0) + 1;
      if (currentValue > biggerStrick) {
        biggerStrick = currentValue;
      }
    }
  }

  return biggerStrick;
}

// console.log(
//   findMaxConsecutiveOnes([
//     0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
//   ]),
// );
