// https://www.codewars.com/kata/544a54fd18b8e06d240005c0

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

const min = (arr, toReturn) => {
    const minValue = Math.min(...arr);

    if (toReturn === 'value') {
        return minValue;
    }

    if (toReturn === 'index') {
        const indexMinVal = arr.indexOf(minValue);

        return indexMinVal;
    }
}
