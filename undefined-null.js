/* 
1. variable value not assingned
2. function but didn't return anything
3. শুধু রিটান লেখা দিলে কিন্তু রিটান করার মতো কিছু দিলে না তাহলে undefined দেখাবে।
4. পেরামিটার দুইটার যাইগা একটা দিলে undefined দিবে।
5. কোনো object বা array এর মধ্যে যদি প্রোপাটি না থাকে এবং সেটা যদি খুজতে যাও তাহলে undefined দিবে।
*/

let first;
// console.log(first)
function add(x, y){
    let sum = x + y;
    // return sum;
}
const result = add(10, 15);
console.log(result);
//
function add(x, y){
    let sum = x + y;
    if( x < y){
        return;
    }
    const fun = x * y;
    return sum;
}
//
function add(x, y){
    let sum = x + y;
    console.log(y);
    return sum;
}
add(10);
//