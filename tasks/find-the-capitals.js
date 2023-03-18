// https://www.codewars.com/kata/539ee3b6757843632d00026b

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

const capitals = (word) => {
    const result = [];

    for (let i = 0; i < word.length; i++) {
        const currentLetter = word[i];

        if (currentLetter === currentLetter.toUpperCase()) {
            result.push(i);
        }
    }

    return result;
};
