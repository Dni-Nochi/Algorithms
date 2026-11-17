// const numsArray = [5, 2, 3, 1, 4];

function merge(left: number[], right: number[]) {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let resultIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result[resultIndex] = left[leftIndex];
      leftIndex++;
    } else {
      result[resultIndex] = right[rightIndex];
      rightIndex++;
    }
    resultIndex++;
  }

  while (leftIndex < left.length) {
    result[resultIndex] = left[leftIndex];
    leftIndex++;
    resultIndex++;
  }

  while (rightIndex < right.length) {
    result[resultIndex] = right[rightIndex];
    rightIndex++;
    resultIndex++;
  }

  return result;
}

export function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const divideArray = Math.floor(nums.length / 2);
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < divideArray; i++) {
    left[i] = nums[i];
  }

  for (let i = divideArray; i < nums.length; i++) {
    right[i - divideArray] = nums[i];
  }

  return merge(sortArray(left), sortArray(right));
}

// console.log(sortArray(numsArray));
