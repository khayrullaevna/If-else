let airportTicket = 500;
let hotelPayment = 250;
let entertainment = 120;
let $1 = 11000.34;
let _1Yevro = 12354.03;

let money = prompt("Your Money: ");

airportTicket *= $1;
hotelPayment *= $1;
entertainment *= _1Yevro;

let allCharges = airportTicket + hotelPayment + entertainment;


if (money >= allCharges){
    console.log("Have a good holiday!")
}

else{
    console.log("Have some paetience, please")
}