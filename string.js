let school = "Eldohub Academy";
console.log(school.length);
console.log( school.toLowerCase());
console.log( school.toUpperCase());
//charAt method
console.log(school.charAt(0));
console.log(school.charAt(5));
console.log(school.charAt(10));

//indexof method
console.log(school.indexOf("l"));

//substring method
console.log(school.substring(0, school.indexOf(" ")));

//replace
let newName = school.replace("Eldohub","Eldo")
console.log(newName);

//.....other methods---concat, split(creates an array), startsWith, endsWith, trim(removes spaces), slice, splice
//string methods in js  

let arrOfNames = newName.split(" ")
console.log(arrOfNames);
const myName = "Kipchirchir"
console.log(myName.includes("kip"));

