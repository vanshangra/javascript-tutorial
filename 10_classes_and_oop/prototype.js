// let myName = "Vansh     "
// let myChannel = "Chai         "

// console.log(myName.trim().trueLength);


let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.vansh = function(){
    console.log(`Vansh is present is all objects`);
    
}

Array.prototype.heyVansh = function(){
    console.log(`Vansh says hello`);
}

// heroPower.vansh()
// myHeroes.vansh()
// myHeroes.heyVansh()
// heroPower.heyVansh()

// Inheritance

const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaIAurCode        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()

"Vansh".trueLength()
"IceTea".trueLength()