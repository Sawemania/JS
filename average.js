//Given an array of numbers, write a function that calculates the average of the numbers.

function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; // Avoid division by zero for an empty array
    }
  
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
  
    return average;
  }
  
  // Example usage:
  const numberArray = [3, 7, 11, 5, 2];
  const average = calculateAverage(numberArray);
  console.log("Average:", average);
  