console.log("- - - - - - Task 13.2_Marija Stonyte- - - - - -");

// 1. Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.
console.log("\n- - - - - - 1. - - - - - -\n");

let studies = [];
studies.push('WEB programavimas', 'Grafinis dizainas', 'Cyber safety');
for(let i = 0; i < studies.length; i++){
    console.log(studies[i]);
}

// 2. Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis. Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada nurodant šalį iš masyvo.
console.log("\n- - - - - - 2. - - - - - -\n");

let countries = [];
countries.push('Lietuva', 'Latvija', 'Estija');
for(let i = 0; i < countries.length; i++){
    console.log('šalis: ' , countries[i]);
}

// 3. Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).
console.log("\n- - - - - - 3. - - - - - -\n");

let projectsDone = ['Panda bakery', 'Icecream shop'];
for(let i = 0; i < projectsDone.length; i++){
    console.log(`Projektas ${i+1}: ${projectsDone[i]}`);
}

// 4. Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.
console.log("\n- - - - - - 4. - - - - - -\n");

let skaiciai = [];
console.log("Skaiciai didesni uz 5");

for(let i = 0; i < 10; i++){
    let skaitmuo = Math.floor(Math.random()* 10) + 1;
    skaiciai.push(skaitmuo);
    if(skaitmuo > 5){
        console.log(skaitmuo);
    }
}

console.log();
console.log(skaiciai);

// 5. Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite visų skaičių, kurie dalinasi iš 4 sumą.
console.log("\n- - - - - - 5. - - - - - -\n");

let skaiciukai = [];
let sum = 0;

console.log("Skaiciu, kurie dalinasi is 4, suma:");

for(let i = 0; i < 100; i++){
    let skaitmuo = Math.floor(Math.random()* 10) + 1;
    skaiciukai.push(skaitmuo);

    if(skaitmuo % 4 == 0){
        sum += skaitmuo;
    }
}

console.log(sum);


// 6. Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.
console.log("\n- - - - - - 6. - - - - - -\n");

let pazymiai = [];
let suma = 0;

for(let i = 0; i < 10; i++){
    let paz = Math.floor(Math.random()* 10) + 1;
    pazymiai.push(paz);
    suma += pazymiai[i];
}

let vidurkis = suma/pazymiai.length;

console.log('Atsitiktiniai pazymiai: ' , pazymiai)
console.log('Vidurkis: ' , vidurkis)


// 7. Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.
console.log("\n- - - - - - 7. - - - - - -\n");

let atsitiktiniaiPazymiai = [];
let pazymiuSuma = 0;

for(let i = 0; i <11; i++){
    let paz = Math.floor(Math.random()* 10) + 3;
    atsitiktiniaiPazymiai.push(paz);
    pazymiuSuma += atsitiktiniaiPazymiai[i];
}

console.log('Pazymiai: ' , atsitiktiniaiPazymiai);

let pazymiuVidurkis = pazymiuSuma / atsitiktiniaiPazymiai.length;
console.log('Pazymiu Vidurkis: ' , pazymiuVidurkis);

console.log('Pazymiai, kurie yra didesni nei vidurkis: ');

for(let i =0; i < atsitiktiniaiPazymiai.length; i++){
    if(atsitiktiniaiPazymiai[i] > pazymiuVidurkis){
        console.log(atsitiktiniaiPazymiai[i]);
    }
}

// 8. Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo kvadratą.
console.log("\n- - - - - - 8. - - - - - -\n");

let numbers = [9, 8, 7, 6, 5, 4,  3, 2, 1];

console.log("Skaiciai ir lyginiu skaiciu kvadratai:");

for(let i = 0; i < numbers.length; i++){
    let kvadratu = '';
    if(numbers[i] %2 == 0){
        kvadratu = numbers[i]**2;
    }
    console.log(numbers[i] , kvadratu);
}


// 9. Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis (atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.
console.log("\n- - - - - - 9. - - - - - -\n");

let numberitos = [10, 8, 5, 4, 3, 6, 2, 1, 9];

for(let i = 0; i < numberitos.length; i++){
    let koks = '';
    let truko = 5 - numberitos[i];

    if(numberitos[i] >= 5){
        koks = 'teigiamas.';
    } 
    else {
        koks = 'neigiamas. ' + truko + ' balo(-u) truko iki teigiamo.' ;
    }

    console.log(`Pazimys ${numberitos[i]} yra ${koks}`);
}
