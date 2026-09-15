const arrayN: number[] = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7, 8, 9, 10, 11];

function searchLine(arr: number[], target: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(searchLine(arrayN, 11));

function searchBinary(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

console.log(searchBinary(arrayN, 6));

const arrayN2: number[] = [1, 10, 6, 2, 5, 4, 7, 3, 9, 8];

function bubbleSort(arr: number[]) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arrayN2));
