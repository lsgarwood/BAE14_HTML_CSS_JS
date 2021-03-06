'use strict';
// Objects

//Data types
//Number
//BigInt
//String
//Object
//Boolean
//Null
//Array
//NaN
//undefined

//JSON- Javascript Object Notation
//Link frontend to backend -- API - Aplication Programming Interface

//Object is essentially this JSON form

let toyotaCar = new Object(); // do it like this to see the object in the inspection console

let hyundaiCar = {};

console.log(hyundaiCar)

//key:value pairs

let chrisCar = {
    name:"Chris's supercar",
    make:"Alfa Romeo",
    model:"e123",
    year:1999,
    colour:"green",
    "weird one": "Hello"
}

console.log(chrisCar) // prints all info

//dot notation object.variable/function() - use it when you can
//bracket notation- for weird one use this

console.log(chrisCar.model) // this dotnotation prints each item
console.log(chrisCar.name)
console.log(chrisCar["weird one"])

//we can change the items inside obj.key=value or add new items
chrisCar["engine"] = "A Big Big engine"
chrisCar.year = 1980

console.log(chrisCar)

//Nested array
let laurenCar = {
    "Car": {
    name:"Lauren's supercar",
    make:"Audi",
    model:"A5",
    year:2001,
    colour:"yellow",
    "weird one": "Boo"
    }
}


console.log(laurenCar[0])

// const obj = {
//     key : "value"
// }
// // This is OK
// obj.key = "new value";
// obj.newKey = "another value";

// // NOT OK - this is reassignment.
// obj = {
//     newKey: "new Value"
// }
// ^ This results in a TypeError: Assignment to constant variable.

const example = {
    name : "Reassignable"
}

//a lot simpler and quicker to declare objects

let car = { make: "Audi", model: "A5", carReg: "W8M8" };

// literal notation to create complex arrays

let carPark = [
    { make: "Audi", model: "A5", carReg: "AB12CDE" },
    { make: "hyundai", model: "i30", carReg: "AB11CDE" }
]
console.log(carPark);

//Array object methods
// sort
//reverse
//join
let d =["apple","strawberries","banana", "grapes", "pear"];

console.log(d); // ["apple", "strawberries", "banana", "grapes", "pear"]
console.log(d.sort()); // ["apple", "banana", "grapes", "pear", "strawberries"]
console.log(d.reverse());//["strawberries", "pear", "grapes", "banana", "apple"]
console.log(d.join()); //strawberries,pear,grapes,banana,apple

let e = d.join("-");
console.log(e);// strawberries-pear-grapes-banana-apple

//push
//pop
console.log(d.push("lemon"));
console.log(d);//["strawberries", "pear", "grapes", "banana", "apple", "lemon"]
console.log(d.pop());
console.log(d);//["strawberries", "pear", "grapes", "banana", "apple"]

//unshift
//shift
console.log(d.unshift("kiwi"));
console.log(d); //["kiwi", "strawberries", "pear", "grapes", "banana", "apple"]
console.log(d.shift());
console.log(d); //["strawberries", "pear", "grapes", "banana", "apple"]

// Objects Ex
let darthVader = {
    allegiance : "empire",
    weapon : "lightsaber",
    sith : true,
};
console.log(darthVader);

console.log(darthVader.allegiance);
console.log(darthVader.weapon);
console.log(darthVader.sith);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

// Ex 3.1
let myArray = ["hello", "everyone"];
// Ex 3.2
console.log(myArray.length);
// Ex 3.3
console.log(myArray.push("Nice", "Day", "Today"));
// Ex 3.4
console.log(myArray.shift());
// Ex 3.5
for(let eachElement of myArray) {
    console.log(eachElement);
}

let daveCar = {
    "name" : "Daves Car",
    "make" : "Peugeot",
    "model" : "12345",
    "year" : 2018,
    "colour" : "vibrant red"
}

// make an array to store cars
let garage = [chrisCar,daveCar, {"make":"Mercedes","model":"S80"}];
console.log(garage);

console.log("/n");

//Enhanced for loop
//Initialisation, condition, after effect
//for (objects in array)

for (let car in garage) {
    console.log(garage[car].make)
}

//nested array
let massiveArray = {
    "smallArray" : {
        "students" : [{
            "name" : "Dan",
            "DOB" : "15.16.27",
            "location" : "Barcelona"
        },{
            "name" : "cansu",
            "DOB" : "11.09.87",
            "location" : "Peru"
        }]
    }
}

console.log(massiveArray);

// to access items use JSON.stringify (object object)
let convertMassive = JSON.stringify(massiveArray)
console.log(convertMassive)

//accessing specifics
let getCansu = JSON.stringify(massiveArray.smallArray.students[0].name)
console.log(getCansu);

console.log(typeof getCansu);

//JSON.parse
let cookey = `{"name":"chris"}`
//this is in string form
//local storage -- storage of strings
//session storage -- worth looking into! 
//realtional- mySQL/nonrelational database-mongodb

let convertData = JSON.parse(cookey);

console.log(convertData);
console.log(typeof convertData);

//Truthy Falsey
// All values are TRUTHY unless they are defined as FALSEY.

// These variables are always FALSEY:
// false
// 0 (zero)
// '' or "" (empty string)
// undefined
// null
// NaN

// Everything else is TRUTHY:
// '0' - (String containing single digit 0 )
// 'false' - (String containing text - 'false')
// [] - (An empty array)
// {} - (An empty object)
// function(){} - (An 'empty' function)

//Equality
1 == "1"; // returns true

1 == [1]; // returns true

"1" == [1]; // returns true

1 === "1"; // returns false

1 === [1]; // returns false

"1" === [1]; // returns false

// Trurthy Falsey Exercises
//1
let strictA = true;
let strictB = 1;

console.log(strictA == strictB); // true 
console.log(strictA === strictB); //false

//2
console.log(strictA != strictB); //false
console.log(strictA !== strictB);//true

//3
let age = 10;

if (age >= 18 && age <= 65) {
    console.log("Youre age is within range!")
} else if (age < 18) {
    console.log("You are too young!")
} else {
    console.log("You are too wise!")
}

//4

let age1 = 25;

let isAge = age1 >= 50 ? "50 or over :(":"Under 50 PHEW!";
console.log(isAge);

//Functions
//both will run here

multiply(18,3);
function multiply(a,b) {
    console.log(a*b);
}
multiply(2,6);

//hoisting -- is good but not ideal in every circumstance - try and avoid by using const

//anonymous functions default to const
//declared like const
//but both of these wont run
//divide (12,6) <--- placed above bad syntax cannot access when const unlike above

const divide = function(a,b) { //function keyword not neccessary
    console.log(a/b)
}

divide(10,2)

const subtract = function(a,b) {
    console.log(a-b)
}

subtract(12,8)

//arrow functions -- for smaller functions, quick, often declared within other functions

const newFunc = () => console.log("Hello Friend");
newFunc();

const addition = (a,b) => console.log(a+b);
const sub = (a,b) => console.log(a-b);

// The main consideration is function declarations (functions with a name) vs function expressions (no name/anonymous).
// //declaration
// function myFunction() {}
// //expression
// const myFunction = function() {}
// //ES6 friendly expression
// const myFunction = () => {}
// Function declarations are hoisted, function expressions are not. Basically, it boils down to the idea of polluting (over using) what we call the 'Global scope' which is where things get hoisted to, to be accessed from anywhere.
// You shouldn't need hoisting to help your program function if you write in a structured, well designed way.
// So in most cases function expressions are preferred now.

//Function and arrow functions 
//Ex 1
const welcome = (name,age,gender) => console.log(`My name is ${name}, I am ${age} years old and of gender ${gender}`);

welcome("sally",22,"female");

//Ex2 
const powerUp = (n1,n2) => Math.pow(n1,n2);
console.log(powerUp(3,3));
