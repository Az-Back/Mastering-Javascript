console.log('There is no exercise better for the heart than reaching down and lifting people up.' 
+' ' + 'by John Holmes teaches us to help one another.'
);


console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// Vérifiez si typeof '10' est exactement égal à 10. Sinon, rendez-le exactement égal.
function test(){
    if(typeof '10' === 10){
        return true;
    } else {
        return 10;
    }
}    
console.log(test());


if('10' === 10) 
{
    console.log("C'est égal");
}
else
{
    console.log("C'est pas égal");
}

if(parseInt('10') === 10) 
{
    console.log("C'est égal");
}
else
{
    console.log("C'est pas égal");
}

//Vérifiez si parseFloat('9.8') est exactement égal à 10 if not make it exactly equal with 10.

function test2(){
    if(parseFloat('9.8')=== 10){
        return true;
    } else {
        return parseFloat(10);
    }
}

console.log(test2());
//Vérifiez si 'on' is found in both python and jargon


let phrase = "python and jargon";
function ph(){
    if(phrase.match("on")){
        return true;
    } else {
        return false;
    }
}

console.log(ph());

// I hope this course is not full of jargon. Vérifiez si jargon est dans la chaine.

let phrase2 = "I hope this course is not full of jargon."
function ph1(){
    if(phrase2.includes('jargon')){
        return true;
    } else {
        return false;
    }
}

console.log(ph1());

// Générer un nombre aléatoire entre 0 et 100 inclusivement.

let numb = Math.floor(Math.random() * 100);

console.log(numb)

// Générer un nombre aléatoire entre 50 et 100 inclusivement.

const numb2 = (max,min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(numb2(100,50))

// Générez un nombre aléatoire compris entre 0 et 255 inclusivement.

const numb3 = (max,min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(numb3(255,0))

// Utilisez substr pour slicer la phrase because because because de la phrase suivante: 'You cannot end a sentence with because because because is a conjunction'

let phrase5 = "You cannot end a sentence with because because because is a conjunction"
console.log(phrase5.substring(30, 55));