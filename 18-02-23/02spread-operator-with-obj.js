var list = {
    fullName: "Sama Khan",
    age: 18
}

var list2 = list;
console.log(list, list2);
// =============make change in one list and then check both the list==============
list2.job = true;
console.log(list, list2);   // change is done in both of the list.

// ===thats why we will use here the spread operator========

var one  = {
    fullName: "Saif Khan",
    age: 23
}
var two = {...one};
// =====now make change in any of them it will not affect each other========
two.job = true;
console.log(one, two);