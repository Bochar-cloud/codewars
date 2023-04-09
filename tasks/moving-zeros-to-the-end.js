// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = (arr) => {
    const zeros = [];

    const res = arr.filter((item) => {
        if (item === 0) {
            zeros.push(item);
        }

        return item !== 0;
    });

    return res.concat(zeros);
}
