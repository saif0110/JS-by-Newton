
var result = true;
result = !result;
console.log(result);    // expected: false [correct];

    var result = 0;
result = !result;
console.log(result);    // expected: true [correct];

result = '';
result = !result;
console.log(result);    // expected: true [correct];

result = undefined 
result = !result;
console.log(result);    // expected: true [correct];

result = false;
result = !result;
console.log(result);    // expected: true [correct];

result = null;
result = !result;
console.log(result);    // expected: true [correct];

result = 2 * "details";
console.log(result);    // expected: NaN [correct];
result = !result;
console.log(result);    // expected: true [correct];