
var string = ""
var number = 40
var boolean = true  

var result = 40 + true;
console.log(result);    //expected: 41 [correct];
//number + boolean --> number

result = false + ""
console.log(result);    //expected: "false" [correct];
//boolean + string --->string

result = 40 + ""
console.log(typeof result, result);    //expected: string "40" [correct];
//number + string --->string