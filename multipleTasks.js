//Write a JavaScript program that analyzes a given paragraph and performs the following tasks:
//- Word Count: Count the total number of words in the paragraph. Ignore punctuation and consider hyphenated words as a single word.

//- Longest Word: Find and display the longest word in the paragraph. In case of multiple words with the same longest length, display the first one encountered.

//- Word Frequency: Determine the frequency of each word in the paragraph. Create an object where the keys are the unique words and the values are the corresponding frequencies.

//- Most Frequent Word: Identify the word(s) with the highest frequency in the paragraph. Display the word(s) and its frequency. If there are multiple words with the same highest frequency, display all of them.

///Your program should take the paragraph as input and output the results.

function analyzeParagraph(paragraph) {
  // Step 1: Word Count
  const words = paragraph.match(/\b\w+\b/g); // Use a regular expression to match words
  const wordCount = words ? words.length : 0;

  // Step 2: Longest Word
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  // Step 3: Word Frequency
  const wordFrequency = {};
  for (const word of words) {
    const cleanedWord = word.toLowerCase(); // Convert to lowercase to make it case-insensitive
    wordFrequency[cleanedWord] = (wordFrequency[cleanedWord] || 0) + 1;
  }

  // Step 4: Most Frequent Word(s)
  let mostFrequentWords = [];
  let highestFrequency = 0;
  for (const word in wordFrequency) {
    if (wordFrequency[word] > highestFrequency) {
      mostFrequentWords = [word];
      highestFrequency = wordFrequency[word];
    } else if (wordFrequency[word] === highestFrequency) {
      mostFrequentWords.push(word);
    }
  }

  // Return the results
  return {
    WordCount: wordCount,
    LongestWord: longestWord,
    WordFrequency: wordFrequency,
    MostFrequentWord: mostFrequentWords,
  };
}

// Example usage:
const inputParagraph = "This is a test. The test includes this word. This is just a simple test.";
const results = analyzeParagraph(inputParagraph);
console.log("Word Count:", results.WordCount);
console.log("Longest Word:", results.LongestWord);
console.log("Word Frequency:", results.WordFrequency);
console.log("Most Frequent Word:", results.MostFrequentWord);
