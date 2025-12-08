console.log('\n Task 9.3 Marija Stonytė\n')

// 1. Susikurkite skaičiaus kintamąjį. Patikrinkite ar jis yra lyginis, jei taip išveskite vieną informaciją, jei ne - kitą.
console.log('Task 1.');

let nr = 1098;

if(nr % 2 === 0){
    console.log('skaičius yra lyginis');
} else{
    console.log('skaičius yra nelyginis');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
// 2. Susikurkite skaičiaus kintamąjį. Patikrinkite ar šis skaičius dalinasi iš 7, jei taip išveskite vieną tekstą, jei ne - kitą.
console.log('Task 2.');

let nr1 = 1098;

if(nr % 7 === 0){
    console.log('skaičius dalinasi iš 7');
} else{
    console.log('skaičius nesidalina iš 7');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 3. Susikurkite kintamąjį, kuriame nurodytumėte kelią iki norimo failo. Patikrinkite ar šis failas yra .js tipo, jei taip išveskite vieną tekstą, jei ne - kitą.
console.log('Task 3.');

let path = 'script.js';

if(path.endsWith('.js')){
    console.log('Failas įkeliamas, prašome palaukti...');
} else{
    console.log('Netinkamas failo formatas -__-');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
