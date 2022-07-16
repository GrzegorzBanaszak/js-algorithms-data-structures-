/*
    Big O Guide
    Calculation not dependent on input size - O(1)
    Linear - O(n) - 1 loop
    Quadratic - O(n^2) - 2 nested loops
    Input size reduced by half - 0(logn)

*/

//Big O - O(n)
const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

//Factorial of a number - O(n)
const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

//Prime number - O(sqrt(n))
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// Power of two - O(log(n))
const isPowerOfTwo = (n) => {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }

  return true;
};

// Power of two - O(1)
const isPowerOfTwoBitWise = (n) => {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
};

// O(n)
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

// O(logn)
const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleElement = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleElement] === target) return middleElement;

    if (target < arr[middleElement]) {
      rightIndex = middleElement - 1;
    } else {
      leftIndex = middleElement + 1;
    }
  }

  return -1;
};

const binarySearchRecursive = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

const search = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) return -1;

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (arr[middleIndex] === target) return middleIndex;

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
};

const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

module.exports = {
  fibonacci,
  factorial,
  isPrime,
  isPowerOfTwo,
  linearSearch,
  binarySearch,
  binarySearchRecursive,
  bubbleSort,
};
