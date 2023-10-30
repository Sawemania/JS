console.log("Hello World!!");
console.log("Hello World!!");
//variables--data stores -- in js we can define variables in 3 ways, using let , const and var

let UserName = "Albert";
let age = 40;
var email= "albert@eldohub.co.ke";//the only way before 2015 (ES6)
const gender="male"//HOLD CONSTANT VARIABLES cannot be changed in the program

console.log(email);
email="kip@hotmail.com";
console.log(email);
//gender = "female";//TypeError - we cannot reassign a avalue to a constant variable



if (age > 18) {
  console.log(UserName + " is an adult");
  document.querySelector("h1").textContent = UserName + " is an adult"
} else {
  console.log(UserName + "is young");
}
