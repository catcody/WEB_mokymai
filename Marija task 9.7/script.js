"use strict";

console.log('\n - - - - - _Marija Stonyte_task 9.7 - - - - - ');
console.log();

// 1. Susikurkite kintamąjį pasirinkimui saugoti, į jį įrašykite norimą reikšmę. Tikrinkite:
// 1.1 Ar pasirinkimas lygus 1? Jei taip, išveskite, kad vartotojas laimėjo vandens.
// 1.2 Ar pasirinkimas lygus 2? Jei taip, išveskite, kad vartotojas laimėjo limonadą.
// 1.3 Ar pasirinkimas lygus 3? Jei taip, išveskite, kad vartotojas laimėjo arbatą.
// 1.4 Ar pasirinkimas lygus 4? Jei taip, išveskite, kad vartotojas laimėjo kavą.
// 1.5 Jei pasirinkimas neegzistuoja, išveskite klaidos pranešimą.
console.log(' - - - - - 1. - - - - - ');
console.log();

let kin = 4;

console.log('kin: ' , kin);

switch(kin){
    case 1:
        console.log('Skaicius lygus 1. Vartotojas laimėjo vandens');
        break;
    case 2:
        console.log('Skaicius lygus 2. Vartotojas laimėjo limonadą');
        break;
    case 3:
        console.log('Skaicius lygus 3. Vartotojas laimėjo arbatą');
        break;
     case 4:
        console.log('Skaicius lygus 4. Vartotojas laimėjo kavą');
        break;
        default:
            console.log('klaida')
}



// 2. Susikurkite kintamuosius trims skaičiams saugoti ir priskirkite jiems reiškmes. Tikrinkite pirmą skaičių:
// 2.1 Ar pirmas skaičius lygus 1? Jei taip, išvesti visų trijų skaičių sumą.
// 2.2 Ar pirmas skaičius lygus 2? Jei taip, išvesti antro ir trečio skaičių sandaugą.
// 2.3 Ar pirmas skaičius lygus 3? Jei taip, išvesti pirmo skaičiaus kvadratą.
// 2.4 Jei nei vienas variantas netinka, išveskite klaidos pranešimą.
console.log('\n - - - - - 2. - - - - - ');
console.log();

let num1 = 3;
let num2 = 5;
let num3 = 8;

console.log(`Skaiciai:
num1: ${num1}
num2: ${num2}
num3: ${num3}`);

switch(num1){
    case 1:
        console.log('pirmas skaičius lygus 1. Visų trijų skaičių suma: ' , num1 + num2 + num3);
        break;
     case 2:
        console.log('pirmas skaičius lygus 2. Antro ir trečio skaičių sandauga: ' , num2 * num3);
        break;
    case 3:
        console.log('pirmas skaičius lygus 3. Pirmo skaičiaus kvadratas: ' , num1 * num1);
        break; 
    default:
            console.log('pirmas skaicius nelygus 1, 2 ar 3');   
}

console.log();

// 3. Susikurkite kintamąjį klaidos kodui saugoti, jam priskirkite kokį nors klaidos kodą. Tikrinkite koks tai klaidos kodas (bent 3 skirtingus variantus), ties kiekvienu jų išveskite skirtingą tekstą, nurodantį, kad bus atliekami skirtingi veiksmai.
console.log(' - - - - - 3. - - - - - ');
console.log();



console.log();

// nauja eilute


// epic eilute

// legendary eilute