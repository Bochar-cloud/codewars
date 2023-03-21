// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

const expandedForm = (num) => {
    const str = String(num);
    let result = [];
    let count = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        const expandesNum = Number(str[i]) * Math.pow(10, count);
        count++;

        if (expandesNum) {
            result.push(expandesNum);
        }
    }

    return result.reverse().join(' + ');
}
