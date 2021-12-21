// Écrivez trois déclarations JavaScript qui fournissent une valeur de vérité (True).
// Écrivez trois instructions JavaScript qui fournissent une valeur erronée (False).

var num = 0;
var obj = new String("0");
var str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false

// Déterminez d'abord le résultat de l'expression de comparaison suivante sans utiliser console.log(). Après avoir décidé le résultat, confirmez-le en utilisant console.log()
function test(a,b){

if(a > b){
    return true;
} else {
    return false;
}
}
console.log(test(4,3));

function test1(a,b){

    if(a >= b){
        return true;
    } else {
        return false;
    }
    }
    console.log(test1(4,3));

    function test2(a,b){

        if(a < b){
            return true;
        } else {
            return false;
        }
        }
        console.log(test2(4,3));

        function test3(a,b){

            if(a <= b){
                return true;
            } else {
                return false;
            }
            }
            console.log(test3(4,3));

            function test4(a,b){

                if(a == b){
                    return true;
                } else {
                    return false;
                }
                }
                console.log(test4(4,4));

                function test5(a,b){

                    if(a === b){
                        return true;
                    } else {
                        return false;
                    }
                    }
                    console.log(test5(4,4));

                    function test6(a,b){

                        if(a != b){
                            return true;
                        } else {
                            return false;
                        }
                        }
                        console.log(test6(4,4));

                        function test7(a,b){

                            if(a !== b){
                                return true;
                            } else {
                                return false;
                            }
                            }
                            console.log(test7(4,4));

                            function test8(a,b){

                                if(a != b){
                                    return true;
                                } else {
                                    return false;
                                }
                                }
                                console.log(test8(4,'4'));

                                function test9(a,b){

                                    if(a == b){
                                        return true;
                                    } else {
                                        return false;
                                    }
                                    }
                                    console.log(test9(4,'4'));

                                    function test10(a,b){

                                        if(a === b){
                                            return true;
                                        } else {
                                            return false;
                                        }
                                        }
                                        console.log(test10(4,'4'));

                                        function test11(a,b){

                                            if(a.length !== b.length){
                                                return true;
                                            } else {
                                                return false;
                                            }
                                            }
                                            console.log(test11('python','jargon'));
                                            
// Utilisez l'objet Date pour effectuer les activités suivantes
function date1(){
    d= new Date();
    console.log(d.getFullYear())
}

date1();

function date2(){
    d= new Date();
    console.log(d.getMonth())
}

date2();

function date3(){
    d= new Date();
    console.log(d.toDateString())
}

date3();


function date4(){
    d= new Date();
    console.log(d.getDate())
}

date4();

function date5(){
    d= new Date();
    console.log(d.getHours())
}

date5();

function date6(){
    d= new Date();
    console.log(d.getTime())
}

date6();