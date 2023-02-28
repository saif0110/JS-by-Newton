var list = [
    {
        fullName: "Tauheed Khan",
        age: 23
    },
    {
        fullName: "Kamal Khan",
        age: 17
    },
    {
        fullName: "Bahadur Khan",
        age: 24
    }
];
var result = list.filter(function(value){
    return value.age >= 18;
});
console.log(result);