//Given an array of strings, write a function that removes duplicates and returns a new array containing only the unique strings.

function removeDuplicates(strings) {
    const uniqueStrings = [...new Set(strings)];
    return uniqueStrings;
  }
  
  // Example usage:
  const stringArray = ["apple", "banana", "apple", "cherry", "banana"];
  const uniqueStrings = removeDuplicates(stringArray);
  console.log("Unique Strings:", uniqueStrings);
  