// map function is array method
// it will return new array
// it will help to manipulate or do changes in your code.
var list = [
    {
        fullName: "Tauheed Khan",
        age: 23
    },
    {
        fullName: "Kamal Khan",
        age: 23
    },
    {
        fullName: "Bahadur Khan",
        age: 23
    }
];
var result = list.map(function(value){ return value;});
console.log(result);

var result = list.map(function(value){ return value.fullName;});
console.log(result);

// ======we can change the key by using map function=====
var result = list.map(function(value){
    return {Name:value.fullName, Age:value.age};
});
console.log(result);