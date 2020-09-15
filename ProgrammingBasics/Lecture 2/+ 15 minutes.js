function silve (input){
let hours = Number(input.shift())
let minutes = Number(input.shift());

let totalMin = minutes + 15;

if (totalMin > 59) {

    hours += 1;
    totalMin = totalMin - 60;

}

if(hours > 23){

    hours-=24;
}


if(totalMin < 10){

    console.log(`${hours}:0${totalMin} часа`);
} else {
    console.log(`${hours}:${totalMin} часа`);
}




}

