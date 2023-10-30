//Reverse an Array:
// 1. Write a function that accepts an array and returns it reversed without using the built-in .reverse() method.
//You can reverse an array without using the built-in `.reverse()` method by creating a new array and iterating through the original array in reverse order. Here's a JavaScript function that does this:


function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
let students = ["Albert", "Victor", "Sawe"];
let studentReversed = reverseArray(students);
console.log(studentReversed);


//It initializes an empty array reversedArr to store the reversed elements.
//It starts a for loop with an index i initialized to the last index of the input array, arr.length - 1.
//It iterates through the elements of the input array from the last element to the first element.
//Inside the loop, it pushes each element at index i from the original array into the reversedArr.
//Finally, it returns the reversedArr, which contains the elements of the input array in reverse order.
//The function you provided should work correctly for reversing an array.
