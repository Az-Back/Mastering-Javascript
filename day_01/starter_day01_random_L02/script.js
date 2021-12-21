let myAge = 250;
let yourAge = 25;

console.log("J'ai "+ (myAge-yourAge)+ 'ans de plus que toi');

// let date = prompt("Quel est votre date de naissance ?");

// if (2021 - date >= 18) {
//   console.log("Vous avez " + (2021-date)+ "ans. "+ "Vous pouvez conduire");
// } else {
//     console.log("Vous avez " + (2021-date)+ "ans. " + "Vous ne pouvez pas conduire pour l'instant")
// }

// let age = prompt("Quel est votre age?");
// if(age <= 100){
//     console.log('Vous avez vecu '+ (age * (31536000))+ ' secondes');
// } else {
//     console.log("Trop agé")
// }
let date = new Date();
let date2 = new Date();
let date3 = new Date();
document.getElementById("test").innerHTML = date;
document.getElementById("test1").innerHTML = date2.toLocaleDateString("fr");
document.getElementById("test2").innerHTML = date3.toUTCString();