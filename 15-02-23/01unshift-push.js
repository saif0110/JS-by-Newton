/*
    Definition:-
        The unshift() method adds one or more elements to the beginning of an array 
        and returns the new length of the array.
    Syntax:-
        unshift(element0)
        unshift(element0, element1)
        unshift(element0, element1, … , elementN)
*/
var list=[45,55,55,12,44];
//create/add --> O(1) - push 
//create/add --> O(n) -unshift

console.log(list);
//will add in the end position
list.push(11);
console.log(list);
//unshift will add the value in front position
list.unshift(33);
console.log(list);