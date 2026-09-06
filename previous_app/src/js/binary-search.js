// 1. Базовая (закрепление паттерна)
// Дан отсортированный массив чисел и target. Верни индекс target, или -1.
const sortedArray = [1, 3, 6, 7, 9, 10, 14, 14, 14, 17, 19, 22];
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// console.log(binarySearch(sortedArray, 14));

// 2. Первое вхождение
// Дан отсортированный массив с дубликатами и target. Верни индекс первого вхождения target (не любого попавшегося).

function findFirstBinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  console.log(right);

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

// console.log(findFirstBinarySearch(sortedArray, 14));

// Задача с NeetCode по бинарному поиску

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// console.log(search([-1, 0, 2, 4, 6, 8], 4));

//Вторая задача с NeetCode Search a 2D Matrix
const firstMatrix = [
  [1, 2, 4, 8],
  [10, 11, 12, 13],
  [14, 20, 30, 40],
];
function searchMatrix(matrix, target) {
  let left = 0;
  let right = 0;
  let testArray = [];

  for (let i = 0; i < matrix.length; i++) {
    right = right + matrix[i].length;
    for (let j = 0; j < matrix[i].length; j++) {
      const mid = Math.floor((left + right) / 2);
      testArray.push(matrix[i][j]);
    }
  }
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (testArray[mid] === target) {
      return true;
    } else if (testArray[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

console.log(searchMatrix(firstMatrix, 13));
