// https://www.codewars.com/kata/is-every-value-in-the-array-an-array

// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

const arrCheck = (value) => value.every((val) => Array.isArray(val));
