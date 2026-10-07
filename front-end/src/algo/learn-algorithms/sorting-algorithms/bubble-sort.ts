// const array = [4, 1, 2, 6, 3, 5, 7, 9, 10, 8];

export function BubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// console.log(BubbleSort(array));
