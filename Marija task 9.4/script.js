// 1. Susikurkite skaičiui saugoti skirtą kintamąjį. Tikrinkite (naudojant visas if sąlygos dalis):
// Ar skaičius yra lyginis?
// Ar dalinasi iš 5?
// Ar skaičius lygus 3?
// Jeigu nieko nepavyko rasti, išveskite klaidos pranešimą.
console.log('\n Task 9.4 Marija Stonytė\n')
console.log('- - - - - Task 1. - - - - -');
console.log();

let kin = 5005;

console.log('kin: ' , kin);
console.log();
console.log('kin % 2 === 0  : ' , kin % 2 === 0 );
console.log('kin % 5 === 0 :' , kin % 5 === 0);
console.log('kin === 3 :' , kin === 3);


if(kin % 2 === 0){
    console.log('')
    console.log('skaičius yra lyginis');
} else if(kin % 5 === 0){
    console.log('skaičius dalinasi iš 5');
} else if(kin === 3){
    console.log('skaičius skaičius lygus 3');
} else{
    console.log('nepavyko rasti uzduoties atitikmens');
}


// 2. Susikurkite tris skaičius. Tikrinkite (naudojant visas if sąlygos dalis):
// Ar pirmi du skaičiai lygūs?
// Ar pirmas ir trečias skaičiai lygūs?
// Ar trečias skaičius didesnis už pirmą?
// Ar antras skaičius lygus dvigubai trečio skaičiaus reikšmei?
// Ar pirmas skaičius dalinasi iš 3?
// Jei nieko nepavyko rasti, išveskite klaidos pranešimą.
console.log('\n - - - - - Task 2. - - - - - \n');

let kin1 = 567;
let kin2 = -5;
let kin3 = 22;

console.log(`kin1: ${kin1}
kin2: ${kin2}
kin3: ${kin3}`);
console.log();

console.log('kin1 === kin2  :' , kin1 === kin2);
console.log('kin1 === kin3  :' , kin1 === kin3);
console.log('kin3 > kin1  :' , kin3 > kin1);
console.log('kin2 === kin3 * 2  :' , kin2 === kin3 * 2);
console.log('kin1 % 3 === 0  :' , kin1 % 3 === 0);
console.log();

if(kin1 === kin2){
    console.log('skaičiai yra lygūs');
} else if(kin1 === kin3){
    console.log('pirmas ir trečias skaičiai lygūs');
} else if(kin3 > kin1){
    console.log('trečias skaičius didesnis už pirmą');
} else if(kin2 === kin3 * 2){
    console.log('antras skaičius lygus dvigubai trečio skaičiaus reikšmei');
} else if(kin1 % 3 === 0){
    console.log('pirmas skaičius dalinasi iš 3');
} else{
    console.log('nepavyko rasti salygu atitikmens');
}

console.log();
