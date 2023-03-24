// https://www.codewars.com/kata/562d8d4c434582007300004e/train/javascript

// Many people choose to obfuscate their email address when displaying it on the Web. One common way of doing this is by substituting the @ and . characters for their literal equivalents in brackets.

const obfuscate = (email) => {
    const symbols = email.split('');

    const obfuscateEmail = symbols.map((symbol) => {
        if (symbol === '@') {
            return ' [at] ';
        }

        if (symbol === '.') {
            return ' [dot] ';
        }

        return symbol;
    });

    return obfuscateEmail.join('');
};

const obfuscate2 = (email) => {
    const atReg = /@/g;
    const dotReg = /\./g;

    return email.replace(atReg, ' [at] ').replace(dotReg, ' [dot] ');
};
