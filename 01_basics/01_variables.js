const accountID  = 123456
let accountEmail = "Priyanshow123@google.com"
var accountPassword = "654321"
accountCity = "Gorakhour"
let accountState;

// accountID = 2 // not allow

accountEmail = "pk@gmail.com"
accountPassword = "526456"
accountCity = "Jaipur"

console.log(accountID);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])


