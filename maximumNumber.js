//Given an array of numbers, write a function that finds the maximum number in the array.
function findMaxNumber(numbers) {
    if (numbers.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    let max = numbers[0]; // Assume the first element is the maximum
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]; // Update max if a larger number is found
      }
    }
  
    return max;
  }
  
  // Example usage:
  const numberArray = [3, 7, 11, 5, 2];
  let max
  