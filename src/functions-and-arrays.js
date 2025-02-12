// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arr) {
  let longestWord = "";

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let sum = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    let nums = arr[i];
    sum += nums;
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let sum = sumNumbers(arr);

  if (arr.length === 0) {
    return 0;
  }

  return sum / arr.length;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arr, targetWord) {

    if (arr.length === 0) {
        return null
    }

    if (arr.includes(targetWord)) {
        return true
    } else {
        return false
    }

}