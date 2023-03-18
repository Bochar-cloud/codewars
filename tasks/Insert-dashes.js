// https://www.codewars.com/kata/55960bbb182094bc4800007b

// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
// Note that the number will always be non-negative (>= 0).

const insertDash = (num) => {
    const nums = String(num).split('');

    const result = nums.reduce((res, num, numIdx) => {
        const currentNum = num;
        const nextNum = nums[numIdx + 1];

        if ((currentNum % 2 && nextNum % 2) !== 0 && nextNum) {
            return res + num + '-';
        }

        return res + num;

    }, '');

    return result;
}
