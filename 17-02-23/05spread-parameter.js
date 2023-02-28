var one = [23, 18, 30];
var two = one;
console.log("one", one);
console.log("two", two);

// =================
var one = [23, 18, 30];
var two = one;
two.push(12);
console.log("one", one);
console.log("two", two);
// ====lookk at spread paramter what is actually does
var one = [23, 18, 30];
var two = [...one];
two.push(12);
console.log("one", one);
console.log("two", two);