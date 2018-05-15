// Create an array from a range of numbers (first number must be smaller than last.
// i.e: start < end)

const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (x, i) => i + start);

range(1, 6); // Array [1, 2, 3, 4, 5, 6]

let arrayFail = range(8, 2);
arrayFail; // Array [ ]
arrayFail.length; // 0
