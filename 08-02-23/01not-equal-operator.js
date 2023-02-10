
var a = 4;
var b = 4;
var result = a != b;    // expected: false [correct];
console.log(result);

var a = "cat";
var b = "dog";
var result = a != b;
console.log(result);    // expected: true [correct];

var a = true;
var b = true;
var result = a != b;
console.log(result);    // expected: false [correct];

    var a = undefined;
var b = undefined;
var result = a != b;
console.log(result);    // expected: false [correct];