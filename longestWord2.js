function findLongestWord(str) {
  // Split the string into words
  const words = str.split(" ");

  // Initialize variables to keep track of the longest word and its length
  let longestWord = "";
  let longestLength = 0;

  // Iterate through the words
  for (const word of words) {
    const wordLength = word.length;

    // If the current word is longer than the longest word found so far, update the variables
    if (wordLength > longestLength) {
      longestWord = word;
      longestLength = wordLength;
    }
  }

  return longestWord;
}

// Example usage:
const inputString = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(inputString);
console.log(longestWord); // "quick"

//In this function, we first split the input string into an array of words by using the space character as the delimiter. Then, we iterate through the words, keeping track of the longest word and its length. After the loop, we return the longest word found.
