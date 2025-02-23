
function sayMyNAme(){
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}

// sayMyNAme()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);  
// }
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(3,5)

// console.log("Result: ",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a user name");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vansh"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,600,700))


const user = {
    username: "vansh",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

// handleObject(user)

handleObject({
    username:"ansh",
    price: 399
})

const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,900,500,600]));
