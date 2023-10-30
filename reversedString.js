//Reverse string: Write a function that takes a string as an argument and returns the string reversed. You can use string methods such as split(), reverse(), and join() to accomplish this task.
function reverseString(str) {
    // Split the string into an array of characters, reverse it, and join it back into a string
    return str.split('').reverse().join('');
  }
  
  // Example usage:
  const inputString = "Hello, World!";
  const reversedString = reverseString(inputString);
  console.log(reversedString); // "!dlroW ,olleH"
  