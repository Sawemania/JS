//String Repeater:
//Build a function that accepts a string and a number, n, as parameters. The function should return a new string that repeats the original string n times, separated by hyphens. For instance, given the inputs "abc" and 3, the output should be "abc-abc-abc".

//You can create a function in JavaScript to repeat a string `n` times, separated by hyphens. Here's a function that does that:


function repeatStringWithHyphens(str, n) {
    if (n <= 0) {
      return "";
    }
  
    const repeatedString = str.repeat(n);
    const hyphenSeparatedString = repeatedString.split('').join('-');
  
    return hyphenSeparatedString;
  }
  
  // Example usage:
  const originalString = "abc";
  const repetitionCount = 3;
  const result = repeatStringWithHyphens(originalString, repetitionCount);
  console.log(result); // Output: "abc-abc-abc"
  
  
  //In this function, we first check if `n` is less than or equal to 0 and return an empty string in that case. If `n` is positive, we use the `repeat` method to repeat the input string `n` times. Then, we split the repeated string into an array of characters, and use the `join` method to join them back together with hyphens in between. The result is the string repeated `n` times, separated by hyphens.