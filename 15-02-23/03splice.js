/*
    Definition:-
        The splice() method changes the contents of an array by removing or replacing 
        existing elements and/or adding new elements in place. To access part of an
        array without modifying it, see slice().
    Syntax:-
        splice(start)
        splice(start, deleteCount)
        splice(start, deleteCount, item1)
        splice(start, deleteCount, item1, item2, itemN)
*/
var list = [45, 55, 11, 12, 44, 31];
//splice will remove the element at any position
//it will change the original array
//we have two argument
//first one is index start from zero
//second is number of elements
console.log(list);
list.splice(2, 2);
console.log(list);

// Mozilla example:-

var month = ["jan", "march", "april", "june"];
// task is to insert/add feb between jan and march using slpice.

month.splice(1,0,"feb");
console.log(month);

// task is to delete june and insert/add may at their location.
month.splice(4, 1, "may");
console.log(month);