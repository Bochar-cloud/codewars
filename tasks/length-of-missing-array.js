// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.

const sortByArrLength = (a, b) => {
    if (!a || !b) {
        return;
    }

    return a.length - b.length
};

const getLengthOfMissingArray = (arrayOfArrays) => {
    let result = 0;

    if (!arrayOfArrays) {
        return result;
    }

    const sortedArr = arrayOfArrays.sort(sortByArrLength);

    for (let i = 0; i < sortedArr.length; i++) {
        if (!sortedArr[i]) {
            break;
        }

        if (!sortedArr[i].length) {
            break;
        }

        const currentArr = sortedArr[i];
        const nextArr = sortedArr[i + 1];
        const len = currentArr.length;

        if (nextArr && !(len + 1 === nextArr.length)) {
            result += len + 1;
            break;
        }
    }

    return result;
};
