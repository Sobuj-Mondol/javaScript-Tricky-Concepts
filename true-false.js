/*
false: only false(0, "", undefined, null, NaN).
-----------------
true: any number true(positive or negative, "0", " ", [], {}).
 */

let x = false;
if(x){
    console.log('variable is truthy');
}
else{
    console.log('variable is falsy');
}