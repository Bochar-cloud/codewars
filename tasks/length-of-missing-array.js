// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.

const getLengthOfMissingArray = (arrayOfArrays) => {
    if (!arrayOfArrays) {
        return 0;
    }

    const lengths = arrayOfArrays.map(arr => arr && arr.length).sort((a, b) => a - b);

    if (lengths.includes(0)) {
        return 0;
    }

    for (let i = 0; i < lengths.length; i++) {
        if (!lengths[i]) {
            return 0;
        }

        const current = lengths[i];
        const next = lengths[i + 1];

        if (next && !(current + 1 === next)) {
            return current + 1;
        }
    }

    return 0;
};
