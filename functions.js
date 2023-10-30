//reusable block of code
function printAge(age, name) {
  console.log(`Hello, I ${name},${age} years old.`);
  console.log("This means i was born in" + (2024 - age));
  console.log("**************");
}
//invoke / call the function
printAge(28, "Albert");
printAge(18, "Victor");
printAge(32, "Emmanuel");
//console.log(age);


//travesy
//web dev simplified



//scope -- diff between let(block scoped) and var(function scopes) --scope wise- execution context
// return keyword in js
// arrow functions






//Fibonacci sequence
//write a javascript function that generates the fibonacci sequence up to a given number of terms using a for loop.
function generateFibonacciSequence(number) {
  let arrayOfNumbers = [0,1]
  for(let count = arrayOfNumbers.length; count<=number;count++){
    let nextNumber = arrayOfNumbers[count - 1] + arrayOfNumbers[count - 2]
    arrayOfNumbers.push(nextNumber)
  }
  return arrayOfNumbers
}
let fiveTermFibSequence = generateFibonacciSequence(5)
let fiftyTermFibSequence = generateFibonacciSequence(50)

//a function that does not have a return keyword stores undefined

console.log(fiftyTermFibSequence);


//aarays are zero indexed
let colors = ["red", "green", "blue", "yellow"]
// to acccess elements of the array, we used their indexes which start at 0
console.log(colors[0]); // red
console.log(colors[3]); //yellow 
console.log(colors[9]);//undefined
console.log(colors.length - 1);
