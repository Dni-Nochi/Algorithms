// const array = [-4, -1, 0, 3, 10];

export function sortedSquares(nums: number[]): number[] {
  const squaresArray: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    squaresArray.push(nums[i] * nums[i]);
  }
  console.log(squaresArray);
  for (let i = 1; i < squaresArray.length; i++) {
    const current = squaresArray[i];
    let j = i - 1;
    while (j >= 0 && squaresArray[j] > current) {
      squaresArray[j + 1] = squaresArray[j];
      j -= 1;
    }
    squaresArray[j + 1] = current;
  }
  return squaresArray;
}

// console.log(sortedSquares(array));
