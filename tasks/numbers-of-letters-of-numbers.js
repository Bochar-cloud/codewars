// https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript

// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

const hashWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const replaceDigitToWord = (number) => {
    const word = String(number);
    let result = '';

    for (let i = 0; i < word.length; i++) {
        result += hashWords[word[i]];
    }

    return {
        word: result,
        wordLength: result.length
    };
};

const numbersOfLetters = (integer) => {
    let currentWord = '';
    const result = [];

    currentWord = replaceDigitToWord(integer);
    result.push(currentWord.word);

    while (currentWord.word !== hashWords[currentWord.wordLength]) {
        currentWord = replaceDigitToWord(currentWord.wordLength);
        result.push(currentWord.word);
    }

    return result;
}
