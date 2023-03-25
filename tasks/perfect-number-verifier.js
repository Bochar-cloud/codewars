// https://www.codewars.com/kata/56a28c30d7eb6acef700004d

// A perfect number is a number in which the sum of its divisors (excluding itself) are equal to itself.

// Write a function that can verify if the given integer n is a perfect number, and return True if it is, or return False if not.

const isPerfect = (n) => {
    let sum = 1;

    for (let i = 2; i <= n ** .5; i++) {
        if (n % i === 0) {
            sum += i + n / i;
        }

    }

    return sum === n && n > 1;
};

console.log(isPerfect(23459879034));
