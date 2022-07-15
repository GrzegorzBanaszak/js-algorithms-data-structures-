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

module.exports = { fibonacci, factorial, isPrime, isPowerOfTwo, linearSearch };
