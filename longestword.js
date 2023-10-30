//Find Longest Word:
// 2. Write a function that takes a sentence and returns the longest word in it. If there are multiple words of the same maximum length, return the first one encountered.
//You can achieve this by splitting the sentence into words and then iterating through the words to find the longest one. Here's a JavaScript function to do that:


function findLongestWord(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
  
    if (words.length === 0) {
      // Handle the case of an empty sentence
      return null;
    }
  
    let longestWord = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }
  
  //It splits the input sentence into an array of words using the space character as the separator, creating an array called words.
  //It checks if the words array is empty. If the input sentence is empty or contains only spaces, it returns null to handle this special case.
  //It initializes a variable called longestWord with the first word in the words array.
  //It then loops through the words array, starting from the second word (index 1) and compares the length of each word with the length of the longestWord.
  //If the current word's length is greater than the length of the current longestWord, it updates the longestWord to be the current word.
  //Finally, the function returns the longestWord found in the sentence.
  
  // Example usage:
  const sentence = "The quick brown fox jumped over the lazy dog";
  const longestWord = findLongestWord(sentence);
  console.log(longestWord); // Output: "jumped"
  
  
  //In this function, we split the input sentence into an array of words using `split(' ')`, and then we initialize the `longestWord` variable with the first word. We iterate through the remaining words, comparing their lengths with the length of the `longestWord` and updating it if a longer word is found. Finally, we return the `longestWord` at the end.
  
  
  
  