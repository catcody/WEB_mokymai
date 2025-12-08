
console.log('\n - - - - Marija Stonyte_task 9.5 - - - - \n')


// 1. Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra didžiausias.
console.log();
console.log(' - - - - 1 - - - -');

let sk1 = 111;
let sk2 = 555;
let sk3 = -13;

console.log(`sk1: ${sk1}
sk2: ${sk2} 
sk3: ${sk3}`);

console.log();
console.log(`Kuris iš šių skaičių yra didžiausias:
${sk1} > ${sk2} && ${sk1} > ${sk3} : ` , (sk1 > sk2 && sk1 > sk3) );
console.log(`${sk2} > ${sk1} && ${sk2} > ${sk3} : ` , (sk2 > sk1 && sk2 > sk3) );
console.log(`${sk3} > ${sk1} && ${sk3} > ${sk2} : ` , (sk3 > sk1 && sk3 > sk2) );

if(sk1 > sk2 && sk1 > sk3){
    console.log('Pirmas skaicius surastas kaip didziausias')
} else if(sk2 > sk1 && sk2 > sk3){
    console.log('Antras skaicius surastas kaip didziausias')
} else if(sk3 > sk1 && sk3 > sk2){
    console.log('Trecias skaicius surastas kaip didziausias')
}


// 2. Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra mažiausias.
console.log();
console.log(' - - - - 2 - - - -');

console.log(`Skaiciai: ${sk1}, ${sk2}, ${sk3}`);

if(sk1 < sk2 && sk1 < sk3){
    console.log('Pirmas skaicius surastas kaip mažiausias')
} else if(sk2 < sk1 && sk2 < sk3){
    console.log('Antras skaicius surastas kaip mažiausias')
} else if(sk3 < sk1 && sk3 < sk2){
    console.log('Trecias skaicius surastas kaip mažiausias')
}

// 3. Susikurkite trijų egzaminų rezultatų kintamuosius. Suraskite pažymių vidurkį. Atlikite šiuos patikrinimus:
console.log();
console.log(' - - - - 3 - - - -');

let kin1 = 7;
let kin2 = 8;
let kin3 = 9;
let average = (kin1 + kin2 + kin3) / 3

console.log(`Egzaminu rezultatai: ${kin1}, ${kin2}, ${kin3}`);

if(average >= 8 && average <= 10){ // ar gautas vidurkis yra [8-10];
    console.log('gautas vidurkis yra [8-10]')
} else if(average >= 5 && average <= 8){ // ar gautas vidurkis yra [5-8);
    console.log('gautas vidurkis yra [5-8)')
} else if(average < 5){ // ar gautas vidurkis yra < 5.
    console.log('gautas vidurkis yra < 5')
}


// 4. Susikurkite du skaičius. Patikrinkite (naudojant 4 atskirus if’us):
console.log();
console.log(' - - - - 4 - - - -');

let num1 = 8;
let num2 = 9;

console.log(`Skaiciai: ${num1}, ${num2}`);

if(num1 > num2 || num1 === 0){ // ar pirmas skaičius yra didesnis už antrąjį arba yra lygus 0;
    console.log('pirmas skaičius yra didesnis už antrąjį arba yra lygus 0') 
} else if(num2 > num1 || num2 === 5){ // ar antras skaičius yra didesnis už pirmąjį arba yra lygus 5;
    console.log('antras skaičius yra didesnis už pirmąjį arba yra lygus 5')
} else if(num1 > num2 && num1 === 20){ // ar pirmas skaičius yra didesnis už antrąjį ir yra lygus 20;
    console.log('pirmas skaičius yra didesnis už antrąjį ir yra lygus 20')
} else if(num2 > num1 && num2 < 100){ // ar antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100;
    console.log('antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100')
}

console.log();