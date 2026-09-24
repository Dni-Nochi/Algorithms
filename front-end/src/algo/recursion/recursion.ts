// function sumArray(arr: number[]): number {
//   const len = arr.length;

//   if (len === 0) {
//     return 0;
//   }

//   return arr[0] + sumArray(arr.slice(1));
// }

// console.log(sumArray([1, 2, 3, 4]));

// function findMax(arr: number[]): number {
//   let max = arr[0];
//   if (arr.length === 1) {
//     return arr[0];
//   }
//   const restMax = findMax(arr.slice(1));
//   if (max < restMax) {
//     max = restMax;
//     return max;
//   } else {
//     return max;
//   }
// }

// console.log(findMax([101, 10, 120, 1, 2, 100, 3, 4, 5, 12, 102]));

// function power(base: number, exp: number): number {
//   if (exp === 0) {
//     return 1;
//   }

//   if (exp < 0) {
//     return 1 / power(base, -exp);
//   }

//   return base * power(base, exp - 1);
// }

// console.log(power(2, -2));

const array = [0];
array[1] = 1;
array[2] = 2;
array[3] = 3;
array[4] = 4;
array.push(5);
array.push(6);
console.log(array, array[0]);
