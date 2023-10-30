function reverseString(str) {
  // Split the string into an array of characters, reverse it, and join it back into a string
  return str.split("").reverse().join("");
}

// Example usage:
const inputString = "Hello, World!";
const reversedString = reverseString(inputString);
console.log(reversedString); // "!dlroW ,olleH"

//In this function, we split the input string into an array of individual characters, reverse the order of the characters, and then join them back into a string. This effectively reverses the original string.
