// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

const generateShape = (integer) => {
    const separator = '\n';
    const symbol = '+';
    let columns = '';
    let rows = '';

    for (let i = 0; i < integer; i++) {
        columns += symbol;
    }

    for (let i = 0; i < integer; i++) {
        rows += i !== integer - 1 ? (columns + separator) : columns;
    }

    return rows;
}
