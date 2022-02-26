// Call Back Function
function welcomeMessage(name,greetHendler) {
    greetHendler(name);
}
//
function greetMorning(name){
    console.log('Good morning',name);
}
welcomeMessage('tom hanks',greetMorning);
welcomeMessage('sobuj hanks',greetMorning);
welcomeMessage('akash hanks',greetMorning);