function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
  
    // Check if the original string is the same as the reversed string
    return str === reversedStr;
  }
  
  // Example usage:
  const inputString = "A man, a plan, a canal, Panama";
  const result = isPalindrome(inputString);
  console.log(result); // true
  

  //In this function, we first remove non-alphanumeric characters and convert the string to lowercase to ensure a case-insensitive comparison. Then, we reverse the string using split(), reverse(), and join(), and finally, we compare the original string with the reversed string to determine if it's a palindrome.