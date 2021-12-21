//Exo
let defi = 'Pratiquer les algorithmes en JavaScript'

console.log(defi); 

console.log(defi.length);

function toUp(){
    return defi.toUpperCase();
}

console.log(toUp());

function toDown(){
    return defi.toLowerCase();
}

console.log(toDown());

function slice(){
    return defi.substring(10);
}

console.log(slice());

let ph = '10 jours en JavaScript';

function coupe(){
    return ph.replace('10 jours','Jours');
}

console.log(coupe());

function script(){
    return ph.includes();
}

console.log(script());

function split0(){
    return ph.split();
}

console.log(split0())

function split1(){
    return ph.split('');
}

console.log(split1());

let phrase = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

function split2(){
    return phrase.split(',');
}

console.log(split2());

function replace(){
    return ph.replace('JavaScript', 'PHP')
}

console.log(replace());

function char(){
    return ph.charAt(15)
}

console.log(char());

function char1(){
    return ph.charCodeAt(12)
}

console.log(char1());

function index0(){
    return ph.indexOf('a')
}

console.log(index0());

function index1(){
    return ph.lastIndexOf('a')
}

console.log(index1());

let phrase1 = "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction"

function index2(){
    return phrase1.indexOf('parceque')
}

console.log(index2());

function index3(){
    return phrase1.lastIndexOf('parceque')
}

console.log(index3());

function search(){
    return phrase1.search('parceque')
}

console.log(search());

function trim(){
    return ph.trim();
}

console.log(trim());

function start(){
    return ph.startsWith(1)
}

console.log(start());

function end(){
    return ph.endsWith('t')
}

console.log(end());

function match(){
    return ph.match(/a/gi)
}

console.log(match());

let ph1 = '10 Jours en '
let ph2 = 'Javascript'
let ph3 = ph1.concat(ph2);

console.log(ph3);

function test(){
    let ph1 = '10 Jours en ';
    let ph2 = 'Javascript';
    let ph3 = ph1.concat(ph2);
    return ph3;
}

console.log(test())

function test2(){
    let ph4 = "10 Jours en Javascript ";
    return ph4.repeat(2);
}

console.log(test2())