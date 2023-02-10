var result = true + "hello";
console.log(typeof result, result); // expected "truehello" [correct];
//It will convert into string when we use +

var result = 23 * "hello";
console.log(result);    // expected NaN [correct];
//datatype will be number we cannot covert * into string.


const string = ""
const number = 40
const boolean = true
console.log(!boolean)   // expected false [correct];
//always it will return boolean value.

var result = 40 + true;
console.log(result);    // expected 41 [correct];
//number + boolean --> number

result = false + ""
console.log(typeof result, result);    // expected string "false" [correct];
//boolean + string --->string

result = 40 + ""
console.log(typeof result, result);    // expected string "40" [correct];
//number + string --->string