//singleton
//Object.create()

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Vansh",
    "full name": "Vansh Angra",
    [mySym]: "mykey1",
    age: 19,
    location: "Vasundhara",
    email: "vanshgmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);
//3:53:17

Jsuser.email = "vansh@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email = "vansh@gpt.com"
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello JS user"); 
}
Jsuser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`); 
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());


