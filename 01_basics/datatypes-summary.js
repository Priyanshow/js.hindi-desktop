// Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

                                        ///////////DataType//////////
const score = 100                                // Number
const scoreValue = 100.3                         // Number

const isLoggedIn = false                         // Boolean
const outsideTemp = null                         // Object
let userEmail;                                   // Undefined
const id = Symbol('123')                         // Symbol
const anotherId =Symbol('123')                   // Symbol

console.log(id === anotherId);               // not same

const bigNumber = 53464256445n                   // BigInt




// Reference (Non primitive)

// Array, Objests, Functions

const heros = ["shaktiman", "naagraj", "doga"];  // Objects

let myObj = {                                    // Objests
    name : "Priyanshu", 
    age : 21, 
}

const myFunction = function(){                   // Functions      
    console.log("Hellow World");
}


console.log(typeof myFunction);