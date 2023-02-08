// from nmber string
var number = "3.14";
console.log(typeof number, number);
number = parseInt(number);
console.log(typeof number, number);

// number having some space before or end or in  somewhere inside it.
number  = "      3.133";
console.log(typeof number, number);
number = parseInt(number);
console.log(typeof number, number);

number  = "3.133     ";
console.log(typeof number, number);
number = parseInt(number);
console.log(typeof number, number);

number  = "3     133"; //output: 3
console.log(typeof number, number);
number = parseInt(number);
console.log(typeof number, number);


// from string NaN
number  = "tauheeed";
console.log(typeof number, number);
number = parseInt(number);
console.log(typeof number, number);

// output: 
// string tauheeed
// number NaN