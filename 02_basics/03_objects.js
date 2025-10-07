// singleton
// Object.create
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Priyanshu",
    "full name" : "Priyanshu Kumar",
    [mySym] : "mykey1",
    age : 21,
    location : "Gorakhpur",
    email : "Priyanshow@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.location);
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.location = "deoria"
// Object.freeze(JsUser);
JsUser.location = "taramandal"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.location}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






