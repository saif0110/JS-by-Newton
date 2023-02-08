/*
    CRUD operations:
        1. create
        2. read
        3. update
        4. delete
*/

//creating an array
var list = ["umar", 23, true, "khali peeli"];

//reading an array.
console.log(list);

//updating an array
list[3] = "hamari shaadi me";
console.log(list);

//deleting an element from array.
list.pop(); // works like stack
console.log(list);

//pushing an element
list.push("hamara kya fakeer hai ham", "jhola uthake chal denge", "can push more");
//we can push single or multiple values together.
console.log(list);

//checking out of bound element
console.log(list[10]);  //undefined
