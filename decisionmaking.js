//conditional statements(if..else., switch case) and looping/iteration(for loop, while, do while)

//grading system A 79+, A- 74, B+ 70, B 65, Below 65 fail

let mark = 608;
if (mark > 100 || mark < 0) {
  console.log("The mark is invalid");
} else if (mark > 79) {
  console.log("Grade A");
} else if (mark > 74) {
  console.log("Grade A-");
} else if (mark > 70) {
  console.log("Grade B+");
} else if (mark > 65) {
  console.log("Grade B");
} else {
  console.log("Grade Fail");
}
//convert this statement to switch
//
mark = 80; // Assuming this is the student's mark

if (mark > 100 || mark < 0) {
  console.log("The mark is invalid");
} else {
  switch (mark) {
    case mark > 79:
      console.log("Grade A");
      break;
    case mark > 74:
      console.log("Grade A-");
      break;
    case mark > 70:
      console.log("Grade B+");
      break;
    case mark > 65:
      console.log("Grade B");
      break;
    default:
      console.log("Grade Fail");
      break;
  }
}
//
let count = 3;
let maxCount = 90;
while (count < maxCount) {
  console.log("We continue counting" + count);
  count = count + 1;
}
//avoid infinite loop
let num = 5;
let multiplier = 1;
while (multiplier <= 10) {
  console.log(`${num} x ${multiplier} = ${num * multiplier}`);
  console.log(num + "x" + multiplier + "=" + num * multiplier);
  multiplier = multiplier + 1;
}

multiplier = 0;
for (multiplier; multiplier <= 10; multiplier = multiplier + 1) {
  console.log(`${num} x ${multiplier} = ${num * multiplier}`);
}

//write a javascript program that generates the fibonacci sequence up to a given number of terms using a for loop.

//function generateFibonacci(n) {
if (n <= 0) {
  return [];
} else if (n === 1) {
  return [0];
} else {
  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    let nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}

const numTerms = 10; // Change this to the number of terms you want
const fibonacciSequence = generateFibonacci(numTerms);
console.log(fibonacciSequence);

function generateFibonacci(n) {
  if (n <= 0) {
    return []; // If n is zero or negative, return an empty array.
  } else if (n === 1) {
    return [0]; // If n is 1, return an array with the first Fibonacci number (0).
  } else {
    let sequence = [0, 1]; // Initialize the sequence with the first two Fibonacci numbers.

    for (let i = 2; i < n; i++) {
      let nextNumber = sequence[i - 1] + sequence[i - 2]; // Calculate the next Fibonacci number.
      sequence.push(nextNumber); // Add the next number to the sequence array.
    }

    return sequence; // Return the generated Fibonacci sequence as an array.
  }
}
