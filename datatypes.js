//Data Types specify the different kinds of values that can be used and manipulated within a program.

// in js datatypes can be categorised as primitive(basic) or reference (complex) datatypes

//Primitive Datatypes include number, string, boolean, undefined, null
let height = 90//number
let age = "30";
const unit = "meters" //string
let isAdmin = false // boolean- True or False
let UserName = null
let lastname        //undefined -- intializing a variable without assigning it a value makes it undefined
//Reference datatypes include Object, Array, Functions
//object- an imitation of a real world object
const car = {
    color: "white",
    is4WD: true,
    start: function (){
        console.log("this car is starting");
    },

};
console.log(car);

//an array is a list of items (elements)
let color = ["red", "yellow" , "green"]
const items= ["juice", { user: "fred", age:60 },'jug',true,89];



//WE CAN USE typeof OPERATOR TO CHECK THE DATATYPE OF ANY VALUE OR VARIABLE
console.log(typeof height); //number
console.log(typeof age); //string
console.log(typeof true);//
console.log(typeof lastname);
console.log(typeof car)
console.log(typeof color)

