/*
    Definition:-
        The shift() method removes the first element from an array and returns that
        removed element. This method changes the length of the array.
    Syntax:-
        shift()
    Return value:-
        The removed element from the array; undefined if the array is empty.
*/
var list=[45,55,55,12,44];
//remove-O(1) - pop
//remove-O(n) - shift

//removing value at the end position
list.pop();
console.log(list);
//removing value at the first position
list.shift();
console.log(list);