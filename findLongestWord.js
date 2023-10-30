function findLongestWord(sentence) {
  const words = sentence.split(" ");
  if (words.length === 0) {
    return null;
  }
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
      console.log(longestWord);
    }
  }
  return longestWord;
}
let sentence = "write a javascript program that generatetts the fibonacciii sequence up to a giviiiiiiiiiiien number of terms using a for loop"

let longestWord = findLongestWord(sentence)
console.log(longestWord);
