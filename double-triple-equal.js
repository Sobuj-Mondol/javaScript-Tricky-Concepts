/* 
1. (==) এটা শুধু মান দুটো সমান আছে কিনা সেটা চেক করে।
2. (===) এটা মান চেক এবং ভ্যালু দুটো কোন টাইপের উভয় চেক করে।
*/
let first = 'Sobuj';
let second = 'Sobuj';
if(first == second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
};
//
let first = 'Sobuj';
let second = 10;
if(first === second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
};