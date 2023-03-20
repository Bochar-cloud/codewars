// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

const rowWeights = (array) => {
    const weights = array.reduce((acc, weight, weightIdx) => {
        acc[weightIdx % 2] += weight;
        return acc;
    }, [0, 0]);

    return weights;
};
