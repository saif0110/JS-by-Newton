//creating an object
var detail = {
    fullName: "saif khan",
    age: 23,
    married: false,
    address: undefined
};

//reading an object
console.log(detail);
console.log(detail.address) //reading properties of an object suing (.dot) operator

//updating property of an object
detail.address = "gonda";
console.log(detail);

//deleting a property of an object using delete keyword
delete detail.address;
console.log(detail);