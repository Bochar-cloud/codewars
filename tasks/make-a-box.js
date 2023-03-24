// https://www.codewars.com/kata/58644e8ddf95f81a38001d8d/train/javascript

// Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.

const box = (num) => {
    const strings = Array.from({ length: num }, (val, idx) => {
        if (idx !== 0 && idx !== num - 1) {
            return `-${' '.repeat(num - 2)}-`;
        }

        return '-'.repeat(num);
    });

    return strings;
};
