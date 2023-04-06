// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

const digitalRoot = (n) => {
    if (n < 10) {
        return n;
    }

    let count = n;
    const nums = String(count).split('');

    count = nums.reduce((res, num) => {
        return res + Number(num);
    }, 0);

    return digitalRoot(count);
};