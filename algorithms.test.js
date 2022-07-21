const {
  fibonacci,
  factorial,
  isPrime,
  isPowerOfTwo,
  linearSearch,
  binarySearch,
  binarySearchRecursive,
  bubbleSort,
  insertionSort,
} = require("./algorithms");

describe("fibonacci", () => {
  test("2 should return [0,1]", () => {
    expect(fibonacci(2)).toEqual([0, 1]);
  });
  test("3 should return [0,1,1]", () => {
    expect(fibonacci(3)).toEqual([0, 1, 1]);
  });
  test("7 should return [0,1,1,2,3,5,8]", () => {
    expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
});

describe("factorial", () => {
  test("0 should return 1", () => {
    expect(factorial(0)).toBe(1);
  });
  test("1 should return 1", () => {
    expect(factorial(1)).toBe(1);
  });
  test("5 should return 120", () => {
    expect(factorial(5)).toBe(120);
  });
});

describe("is prime", () => {
  test("1 should return false", () => {
    expect(isPrime(1)).toBe(false);
  });
  test("2 should return true", () => {
    expect(isPrime(2)).toBe(true);
  });
  test("4 should return false", () => {
    expect(isPrime(4)).toBe(false);
  });
  test("5 should return true", () => {
    expect(isPrime(5)).toBe(true);
  });
});

describe("is power of 2", () => {
  test("1 should return true", () => {
    expect(isPowerOfTwo(1)).toBe(true);
  });
  test("2 should return true", () => {
    expect(isPowerOfTwo(2)).toBe(true);
  });
  test("5 should return false", () => {
    expect(isPowerOfTwo(5)).toBe(false);
  });
});

describe("Linear search", () => {
  test("[-5,2,10,4,6] return 2", () => {
    expect(linearSearch([-5, 2, 10, 4, 6], 10)).toBe(2);
  });
  test("[-5,2,10,4,6] return 4", () => {
    expect(linearSearch([-5, 2, 10, 4, 6], 6)).toBe(4);
  });
  test("[-5,2,10,4,6] return -1", () => {
    expect(linearSearch([-5, 2, 10, 4, 6], 20)).toBe(-1);
  });
});

describe("Binary search", () => {
  test("[-5, 2, 4, 6, 10] return 4", () => {
    expect(binarySearch([-5, 2, 4, 6, 10], 10)).toBe(4);
  });
  test("[-5, 2, 4, 6, 10] return 3", () => {
    expect(binarySearch([-5, 2, 4, 6, 10], 6)).toBe(3);
  });
  test("[-5, 2, 4, 6, 10] return -1", () => {
    expect(binarySearch([-5, 2, 4, 6, 10], 20)).toBe(-1);
  });
});

describe("Binary search", () => {
  test("[-5, 2, 4, 6, 10] return 4", () => {
    expect(binarySearchRecursive([-5, 2, 4, 6, 10], 10)).toBe(4);
  });
  test("[-5, 2, 4, 6, 10] return 3", () => {
    expect(binarySearchRecursive([-5, 2, 4, 6, 10], 6)).toBe(3);
  });
  test("[-5, 2, 4, 6, 10] return -1", () => {
    expect(binarySearchRecursive([-5, 2, 4, 6, 10], 20)).toBe(-1);
  });
});

describe("Bubble sort ", () => {
  test("[8,20,-2,4,-6] return [-6,-2,4,8,20]", () => {
    expect(bubbleSort([8, 20, -2, 4, -6])).toEqual([-6, -2, 4, 8, 20]);
  });
});

describe("Bubble sort ", () => {
  test("[8,20,-2,4,-6] return [-6,-2,4,8,20]", () => {
    expect(bubbleSort([8, 20, -2, 4, -6])).toEqual([-6, -2, 4, 8, 20]);
  });
});

describe("Insertion Sort ", () => {
  test("[8,20,-2,4,-6] after sort [-6,-2,4,8,20]", () => {
    const toSort = [8, 20, -2, 4, -6];
    insertionSort(toSort);
    expect(toSort).toEqual([-6, -2, 4, 8, 20]);
  });
});
