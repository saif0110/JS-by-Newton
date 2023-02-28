/*
    Object.prototype.toString()
        The toString() method returns a string representing the object. 
        This method is meant to be overridden by derived objects for custom 
        type conversion logic.
    Syntax:-
        toString()
    Parameters:-
        By default toString() takes no parameters. However, objects that inherit from
        Object may override it with their own implementations that do take parameters. For example, the Number.prototype.toString() and BigInt.prototype.toString() methods take an optional radix parameter.

    Return value:-
        A string representing the object.
*/
var list = [12, 15, 17, 18, 19];
var result = list.toString();
console.log(typeof result, result);