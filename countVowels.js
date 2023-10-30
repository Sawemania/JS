//Write a function that counts and returns the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
        
        
    }
    return count;
}

// Example usage:
const result = countVowels("Albert Kipchirchir");
const result2 = countVowels("Emmanuel Sawe");

console.log(result);
console.log(result2);