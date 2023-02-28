/*
    Definition:-
        The slice() method returns a shallow copy of a portion of an array into a new 
        array object selected from start to end (end not included) where start and 
        end represent the index of items in that array. The original array will not 
        be modified.
    Syntax:-
        slice()
        slice(start)
        slice(start, end)
*/
var list=[45,55,11,12,44,31];
//slice will return the element or list of element at any position
//it will not change the original array
//we have two argument
//first one is index of exact elemtent (0-indexing).
//second is also index but how far element you want from starting a[0], (1 indexing).
console.log(list);
var result = list.slice(1,2);
console.log(result);
console.log(list);

