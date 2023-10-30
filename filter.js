//Filter out Numbers:
// 3. Given an array that contains numbers and strings, filter out all the numbers and return an array containing only strings.
//You can filter out the numbers from an array that contains both numbers and strings by using the `Array.prototype.filter()` method in JavaScript. Here's a function that does this:


function filterStrings(arr) {
    return arr.filter(item => typeof item === 'string');
  }
  
  // Example usage:
  const mixedArray = [1, 'apple', 2, 'banana', 'cherry', 3];
  const stringArray = filterStrings(mixedArray);
  console.log(stringArray); // Output: ["apple", "banana", "cherry"]
  
  //n this function, `filterStrings`, we use the `filter` method to create a new array containing only the elements that satisfy the condition defined in the callback function. The condition checks whether the `typeof` each item is equal to `'string'`, effectively filtering out the numbers and retaining only the strings in the new array.
  
  