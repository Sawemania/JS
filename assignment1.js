//1. Discuss Variable naming rules in js.
//2. What is the difference btwn null, undefined and not defined in js.(use code examples)
//3. What is the difference between call by reference and call by value
//4. Discuss variable naming conventions in web development



//1. Discuss variable naming rules in js.

"must start with a letter underscore or dollar sign";
"cannot contain spaces ";
"variable names cannot be the same as resevered key words such as if or const";
"by convention, js variables are written in camelcase";
"variable names should be given descriptive nnames that indicate their content and usage";
"as js variables do not have set types ";

//2. What is the difference btw null, undefined and not defined in js usw code examples

//null
"special value that represnts the intentional absence of any object value e.g,";
let variable = null;
console.log(variable); //output:null

//undefined
("is a primitive valueautomatically assigned to variables that have been declared but have not been asigned a value,, it is also the default return value of functions that do not explicity return a value ,,e.g. ");
let variable;
console.log(variable); //Output: undefined

//not defined
("when you try to access a variable that has not been declared or is not in a scope eg");
console.log(nonExistentvariable); //Output: ReferenceError: nonExistent variable is not defined

//3. What is the difference between call by reference and call by value

//call by reference
("a reference to the actual variable is passed to the function ");
("cahnges made to the parameter inside the function directly affects the original value outside the function ");
("objects and arrays (non-primitive types)nare often passed by reference in many programming languages eg");
function changeArray(arr) {
  arr.push(4);
}
let myArray = [1, 2, 3];
changeArray(myArray);
console.log(myArray); //Output:[1,2,3] (original array is not changed)

//call by value
("a copy of the actual value is copied to the function ");
function changeArray(num) {
  num = 10;
}
let num = 5;
changevalue(num);
console.log(num); //Output:5 (original value is not changed)

//4. Discus variable naming conventions in web development
('Use descriptive Names---- choose variable names that clearly indicate their purpose or content....eg username instead of "u"');
('CamelCase for variables ------starts with a lowercase letter then capitalizes the first letter of each new concatenated word ......eg "firstName, totalAmoun"');
("use uppercase for conddtants ");
("Avoid abbreviations -----to make them readable unless they are well known");
("be consistent-----choose a naming convection and stick with it ");
("Use meaningfull preffixes/suffixes------eg isLoaded, arrNumbers, strNumbers");
("Avoid sinkgle letters Names---except in loop counters where their scope is very limmited");
("Use plural for arrays and collections---eg users , items , products");

