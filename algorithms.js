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

//Prime number - O(n)
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

module.exports = { fibonacci, factorial, isPrime };
