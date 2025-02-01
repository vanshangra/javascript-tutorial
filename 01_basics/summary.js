//primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 568738387384790998767n


// Reference (Non primitive)
//Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj ={
    name: "vansh",
    age: 21,
}

const myFunction= function(){
    console.log("hello world");
}

console.log(typeof anotherId);