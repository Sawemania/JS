//Given an array of numbers, write a function that filters out the even numbers and returns a new array containing only the odd numbers //filter

function filterOddNumbers(numbers) {
    const oddNumbers = numbers.filter(number => number % 2 !== 0);
    return oddNumbers;
  }
  
  // Example usage:
  const numberArray = [3, 7, 11, 5, 2, 8, 6, 1, 4];
  const oddNumbers = filterOddNumbers(numberArray);
  console.log("Odd Numbers:", oddNumbers);
  