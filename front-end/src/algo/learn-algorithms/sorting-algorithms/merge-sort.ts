// const array = [4, 7, 1, 9, 2];

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

export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < mid; i++) {
    left[i] = arr[i];
  }

  for (let i = mid; i < arr.length; i++) {
    right[i - mid] = arr[i];
  }
  console.log(left, right);
  return merge(mergeSort(left), mergeSort(right));
}

// console.log(mergeSort(array));
