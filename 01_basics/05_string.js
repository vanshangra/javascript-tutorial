const name = "vansh"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Vansh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)

console.log(newString);

const anotherString = gameName.slice(-7,7)

console.log(anotherString);

const newStringOne = "    VanshAngra    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aura.com/vansh%20angra"

console.log(url.replace('%20','-'));
console.log(url.includes('vansh'));

console.log(gameName.split('-'));