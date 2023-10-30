let fruits = ["apple", "banana", "cherry"];

//accessing values in an array--we uses indexes

console.log(fruits[0]); // apple

fruits[2]="mango"; // replace cherry with mango
console.log(fruits);

//Adding items in the end of an array - push method
fruits.push("orange");
console.log(fruits);
//pop () - removes last items

fruits.pop();
fruits.pop();
console.log(fruits);

//shift(removes firsts item) and unshift (add to the start of an array)
// .length , indexOf
console.log(fruits.indexOf("banana"));
console.log(fruits.length); //2

// concate(), join()-- creates a string out of an array

console.log(fruits.join("-"));  // a string
// includes
console.log(fruits.includes("mangoes"));

//iterating over an array:-- forEach()
fruits.forEach((f)=>{
    console.log(f + "s  are so sweet.");
})

// sort, reverse, map
let upperCaseFruits = fruits.map((fruit) => fruit. toUpperCase()); //converts every fruit to upper case.

console.log(upperCaseFruits);