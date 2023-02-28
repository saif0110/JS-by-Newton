var list=[
    {
        fullName:"akash",
        age:23,
        location:"delhi"
    },
    {
        fullName:"suresh",
        age:17,
        location:"bangalore"
    },
    {
        fullName:"akash",
        age:33,
        location:"chennai"
    },
    {
        fullName:"akash",
        age:56,
        location:"kochi"
    }
];
var result = list.filter((value) => 
{return value.age >= 18}).map((value) => 
{return value.age}).reduce((a, b) => {return a+b});

console.log(result);