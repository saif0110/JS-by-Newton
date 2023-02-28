// example:-

function add(a, b, called){
    var ans =  a+b;
    called("addition", ans);
}
function sub(a, b, called){
    var ans =  a-b;
    called("subtraction", ans);

}
function display(key, value){
    console.log("we are performing "+key+" and the result is "+value);
}
// var ans  = add(5, 10);
// console.log(ans);

// =============use call display =============inside add and sub ========is called callBack ===
add(10, 5, display);
sub(10, 5, display);