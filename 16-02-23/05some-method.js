/*
    Array.prototype.some():-
        The some() method tests whether at least one element in the array passes the 
        test implemented by the provided function. It returns true if, in the array, 
        it finds an element for which the provided function returns true; otherwise 
        it returns false. It doesn't modify the array.

    Syntax;-
        // Arrow function
            some((element) => { ... })
            some((element, index) => { ... })
            some((element, index, array) => { ... })

        // Callback function
            some(callbackFn)
            some(callbackFn, thisArg)

        // Inline callback function
            some(function (element) { ... })
            some(function (element, index) { ...})
            some(function (element, index, array) { ... })
            some(function (element, index, array) { ... }, thisArg)

    Parameters:-
        callbackFn
            A function to execute for each element in the array. It should return a 
            truthy to indicate the element passes the test, and a falsy value 
            otherwise.

        The function is called with the following arguments:

        element
            The current element being processed in the array.

        index
            The index of the current element being processed in the array.

        array
            The array some() was called upon.

        thisArg Optional
            A value to use as this when executing callbackFn. See iterative methods.

    Return value:-
        true if the callback function returns a truthy value for at least one 
        element in the array. Otherwise, false.
*/

var list = [1, 2, 3, 4, 5];
var ans1 = list.some(function(value){return value===3});
var ans2 = list.some(value => value===3);
console.log(ans1);
console.log(ans2);