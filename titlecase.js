//Title Case Sentence:
//Create a function that takes a sentence (a string) and converts the first letter of each word to uppercase and the rest to lowercase.
//You can create a function in JavaScript to capitalize the first letter of each word in a sentence and convert the rest of the letters to lowercase. Here's a function that does that:


function titleCase(sentence) {
    const words = sentence.split(' '); // Split the sentence into words
    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase(); // Uppercase the first letter
      const restOfWord = word.slice(1).toLowerCase(); // Lowercase the rest of the word
      return firstLetter + restOfWord;
    });
    return capitalizedWords.join(' '); // Join the words back into a sentence
  }
  
  // Example usage:
  const sentence = "hello WoRLD";
  const result = titleCase(sentence);
  console.log(result); // Output: "Hello World"
  
  
  //In this function, we first split the input sentence into an array of words using `split(' ')`. Then, we use the `map` method to iterate through each word and capitalize the first letter using `toUpperCase()`, and convert the rest of the word to lowercase using `toLowerCase()`. Finally, we use `join(' ')` to reassemble the words into a sentence.
  