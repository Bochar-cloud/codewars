// https://www.codewars.com/kata/5783ef69202c0ee4cb000265

// JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript. Many other languages have similar quirks.

// However, sometimes it is useful to search for an Array. Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return -1.

// You will be required to validate the inputs on the following criteria:

// each element of the array to be searched should be an array;
// each sub-array in the two-dimensional array should be of length two; and
// query should be an array of length two.
// If the inputs are not valid you should throw an Error.

const searchArray = (arrayToSearch, query) => {
    if (query.length !== 2) {
        throw new Error('Error');
    }

    const index = arrayToSearch.findIndex((item, idx) => {
        if (item.length !== 2) {
            throw new Error('Error');
        }

        return String(item) === String(query);
    });

    return index;
};
