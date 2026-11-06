// const array = [205, 249, 16, 126, 3, 2, 1, 5, 3, 11, 0, 117];

export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const less = [];
  const greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

// console.log(quickSort(array));

// export function quickSort(arr: number[]): number[] {
//   return quickSortHelper(arr, 0, arr.length - 1);
// }

// function quickSortHelper(arr: number[], left: number, right: number): number[] {
//   if (arr.length < 2) {
//     return arr;
//   }
// }
