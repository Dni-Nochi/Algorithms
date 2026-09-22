function sumArray(arr: number[]): number {
  const len = arr.length;

  if (len === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4]));
