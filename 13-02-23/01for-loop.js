var list = ["saif", "aman", "kamal", "dhamal"];

// normal loop like java
for(var i=0; i<list.length; i++){
    console.log(i+" "+list[i]);
}

// for of loop generally used for array in java script.
for(var obj of list){
    console.log(obj);   // in var obj values itself will be there not indexing.
}

// for in generally used for objects but we can use it for list/array as well.
for(var i in list){
    console.log(i+ " "+ list[i]);   // in variable i indexing/key will be transformed not the value itself.
}