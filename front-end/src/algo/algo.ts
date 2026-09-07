const arr = [2, 5, 7, 7, 7, 10, 15];

function lowerBound(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
  }

  return result;
}

console.log(lowerBound(arr, 8));
