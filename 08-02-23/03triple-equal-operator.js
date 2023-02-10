
var result = 4 == " 4 ";
console.log(result);     // expected: true [correct];
result = 4 === "4";
console.log(result);    // expected: flase [correct];
result = 4 === 4;
console.log(result);    // expected: true [correct];
result = "4" === "4";
console.log(result);    // expected: true [correct];