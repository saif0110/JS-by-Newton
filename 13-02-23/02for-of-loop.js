var list = ["saif", "aman", "kamal", "dhamal"];

// normal loop like java
for(var i=0; i<list.length; i++){
    console.log(i+" "+list[i]);
}

// for of loop generally used for array in java script.
for(var obj of list){
    console.log(obj);   // in var obj values itself will be there not indexing.
}