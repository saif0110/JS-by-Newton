var list = [1, 2, 3, 4, 5];
list.forEach(function(value){   //single parameter forEach
    console.log(value);
});


list.forEach(function(value, index){    //double parameter forEach
    console.log(index, value);
});