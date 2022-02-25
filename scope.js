// (let / const) global variable
// local scope
function add(one, two){
    let sum = one + two;
    console.log(sum);
    if( sum > 10){
        let mood = 'Happy';
        console.log(mood);
    }
    return sum;
}
const result = add(15, 15);
//