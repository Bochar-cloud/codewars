// https://www.codewars.com/kata/51689e27fe9a00b126000004

// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.

const formatWords = (words) => {
    if (!words) {
        return '';
    }

    const validWords = words.filter(word => word);

    if (!validWords.length) {
        return '';
    }

    const wordsStart = validWords.slice(0, -1);
    const lastWord = validWords[validWords.length - 1];

    if (validWords.length === 1) {
        return validWords.join('');
    }

    return wordsStart.join(', ') + ' and ' + lastWord;
}
