const name = "Priyanshu"
const repoCount = 50

console.log(name + repoCount + " Value");             // Not use this Syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);         // Use this Syntax

const gameName = new String ('Garima-nigam-kumari');

console.log(gameName[1]);                   // to find letter by number
console.log(gameName.__proto__);            // object
console.log(gameName.length);               // to find how many letters in the charector
console.log(gameName.toLowerCase());        //  all upper case or all lowercase
console.log(gameName.charAt(3));            // position of charector
console.log(gameName.indexOf('a'));         // to find position of charector in number

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-5,4);
// console.log(anotherString);

const newStringOne = "    Priyanshu    "        // as it is gap 
console.log(newStringOne);
console.log(newStringOne.trim());               // (Trim) can start only from object

const url = "https://priyanshu.com/priyanshu%20kumar"
console.log(url.replace('%20', '__'));                          // to replace the object
console.log(url.includes('priyanshu'));                         // to find the object we searching for is here or not



console.log(gameName.split('-'));

















