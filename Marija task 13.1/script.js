console.log("- - - - - - Task 13.1_Marija Stonyte- - - - - -");
console.log();
// 1. Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame masyve yra narių.
console.log("\n- - - - - - 1. - - - - - -\n");

let masyvas = ['duomuo1', 'duomuo2', 'duomuo3', 'duomuo4', 'duomuo5', 'duomuo6', 'duomuo7', 'duomuopaskutinis'];

console.log('masyvo pirmas ir paskutinis narys: ' , masyvas[0] , masyvas[masyvas.length -1]);
console.log('du pasirinkti nariai is masyvo vidurio: ', masyvas[masyvas.length / 2], masyvas[(masyvas.length / 2) + 1]);
console.log('masyvo duomenu kiekis: ', masyvas.length);

// 2. Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite pakeisto masyvo informaciją.
console.log("\n- - - - - - 2. - - - - - -\n");

let animalSquad = ['lion', 'racoon', 'opossum', 'turtle'];
console.log('masyvas: ' , animalSquad);

animalSquad[0] = 'eagle';
animalSquad[1] = 'red panda';
animalSquad[3] = 'meerkat';
console.log('pakesitas masyvas: ' , animalSquad);

// 3. Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.
console.log("\n- - - - - - 3. - - - - - -\n");

let matrixa = [];
matrixa.push(0, 1, 0, 0 , 1, 1, 0, 1);
console.log('uzpildytas masyvas: ' , matrixa);

// 4. Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais skaičiais. Išveskite šio masyvo informaciją.
console.log("\n- - - - - - 4. - - - - - -\n");

let randomBucket = [];

for (let i = 0; i < 5; i++) {
  randomBucket.push(Math.floor(Math.random() * 10));
}

console.log('masyvas su atsitiktinai sugeneruotais skaiciais: ' , randomBucket);

// let randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log('randomNumber: ' , randomNumber);

// let random = Math.random();
// let padaugintas = random *10;
// let sveikas = Math.floor(padaugintas);
// let nuoVienoIkiDesimt = sveikas +1;

// console.log('Math.random() - random:' , random);
// console.log('random *10 - padaugintas: ' , padaugintas);
// console.log('Math.floor(padaugintas) - sveikas: ' , sveikas);
// console.log('sveikas +1 : ' , nuoVienoIkiDesimt);


// 5. Sukurkite du masyvus dviejų studentų pažymiams saugoti.   
console.log("\n- - - - - - 5. - - - - - -\n");

let scores1 = [];
let scores2 = [];

// Įveskite po 3-5 pažymius kiekvienam studentui (iškart kuriant masyvus arba per push funkciją).
scores1.push(7, 8, 9);
scores2.push(10, 7, 9);

// Suskaičiuokite ir išveskite jų vidurkius.

let sum = 0;
for (let i = 0; i < scores1.length; i++) {
    sum += scores1[i];   // add each element to sum
}
console.log('vidurkis 1: ' , sum / scores1.length)

let sum2 = 0;
for (let i = 0; i < scores2.length; i++) {
  sum2 += scores2[i];   // add each element to sum
}
console.log('vidurkis 2: ' , (sum2 / scores2.length).toFixed(2))


// Išsiaiškinkite kurio studento vidurkis didesnis ir išveskite atsakymą.
if(sum / scores1.length > sum2 / scores1.length){
    console.log('didesnis vidurkis: ' , (sum / scores1.length).toFixed(2))
} else{
    console.log('didesnis vidurkis: ' , (sum2 / scores2.length).toFixed(2))
}