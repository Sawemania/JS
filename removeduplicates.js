//Remove Duplicate Characters:
//Create a function that removes all duplicate characters from a string, leaving only the first occurrence of each character.
//You can create a function in JavaScript to remove all duplicate characters from a string while preserving the first occurrence of each character. Here's one way to do it:


function removeDuplicates(str) {
    let result = '';
    const seen = new Set();
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!seen.has(char)) {
        seen.add(char);
        result += char;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const inputString = "programming";
  const deduplicatedString = removeDuplicates(inputString);
  console.log(deduplicatedString); // Output: "progamin"
  
  
  //In this function, we use a `result` variable to build the new string with only the first occurrence of each character. We also use a `Set` called `seen` to keep track of the characters we've encountered. We iterate through the input string, and for each character, we check if it has already been seen. If it hasn't been seen before, we add it to the `result` and add it to the `seen` set. This way, only the first occurrence of each character is included in the `result` string, effectively removing duplicates.
  