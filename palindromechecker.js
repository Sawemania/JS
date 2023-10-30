//Palindrome Checker:
//Implement a function that checks if a string is a palindrome (reads the same backward as forward).
//You can create a function in JavaScript to check if a string is a palindrome by comparing the characters from the start and end of the string. Here's one way to do it:


function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the string is a palindrome
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) {
        return false;
      }
    }
    
    return true;
  }
  
  // Example usage:
  console.log(isPalindrome("racecar")); // Output: true
  console.log(isPalindrome("hello"));   // Output: false
  
  
  //In this function, we first remove non-alphanumeric characters and convert the string to lowercase to ensure that the palindrome check is case-insensitive and only considers letters and numbers. Then, we use a loop to compare the characters from the start and end of the string. If any pair of characters does not match, we return `false`. If the loop completes without finding any non-matching characters, we return `true`, indicating that the string is a palindrome.
  
  
  
  
  
  
  
  
  
  
  