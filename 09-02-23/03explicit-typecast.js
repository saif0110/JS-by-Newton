var result = 34;
 result = String(result);
 console.log(typeof result, result);    // expected string "34" [correct];
 
 var resultOne = "33";
 resultOne = Number(resultOne);
 console.log(typeof resultOne, resultOne)  // expected Number 33 [correct];
 
  var resultTwo = 0;
  //any number is considered as true
  //o is considered as false
 resultTwo = Boolean(resultTwo);    
 console.log(typeof resultTwo, resultTwo); // expected Boolean false [correct];
