const accountId = 144232
let acountEmail = "vansh@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountstate;

//accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPass = "123123"
accountCity = "Bengaluru"

console.log(accountId);
/*
prefer not to use  var because of issue
in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPass, accountCity,accountstate])
