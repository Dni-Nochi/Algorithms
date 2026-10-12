const array = [5, 3, 5, 1];

export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const randomIndex = Math.floor(Math.random() * arr.length);

  const pivot = arr[randomIndex];
  const less = arr.filter((el, index) => index !== randomIndex && el < pivot);
  const greater = arr.filter(
    (el, index) => index !== randomIndex && el >= pivot,
  );

  console.log(array, less, pivot, randomIndex, greater);
  return quickSort(less).concat(pivot, quickSort(greater));
}

console.log(quickSort(array));
