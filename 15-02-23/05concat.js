/*
    Definition:-
        The concat() method is used to merge two or more arrays. This method does 
        not change the existing arrays, but instead returns a new array.
    Syntax:-
        concat()
        concat(value0)
        concat(value0, value1)
        concat(value0, value1, … , valueN)
*/
var list=[45,55,11,12,44,31];
var listTwo=[23,42];
//it will not change the original array
//it will combine together in new array
var result = list.concat(listTwo);
console.log(result);