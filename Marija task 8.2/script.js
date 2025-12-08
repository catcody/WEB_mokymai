// 1. Aprašykite ir išveskite (atskirose eilutėse) kintamuosius, saugančius šią informaciją apie studentą:
// Vardas;
// Pavardė;
// Amžius;
// Ūgis;
// Svoris;
// Aukštoji mokykla;
// Akademinės grupės kodas;
// Kursas;
// Studijų programos pavadinimas;
// Atsiskaitytų kreditų skaičius;
let name = 'Cosmic';
let surname = 'Radio';
let age = 111;
let height = 1.8;
let weight = undefined;
let school = 'Vilnius Coding School';
let code = 10100101;
let course = 1;
let title = 'WEB programming'
let credit = 8;

console.log('1.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log('Vardas: ' + name);
console.log('Pavardė: ' + surname);
console.log('Amžius: ' + age);
console.log('Ūgis: ' + height);
console.log('Svoris: ' + weight);
console.log('Aukštoji mokykla: ' + school);
console.log('Akademinės grupės kodas: ' + code);
console.log('Kursas: ' + course);
console.log('Studijų programos pavadinimas: ' + title);
console.log('Atsiskaitytų kreditų skaičius: ' + credit);
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');


// 2. Aprašykite ir išveskite (atskirose eilutėse) kintamuosius, saugančius šią informaciją apie miestą:
// Pavadinimas;
// Valstybė;
// Apskritis;
// Įkūrimo data;
// Meras;
// Plotas kv. km.;
// Gyventojų skaičius;
let city = 'Telšiai';
let country = 'Lithuania';
let county = 'Žemaitija';
let startyear = 1398;
let mayor = 'Tomas Katkus';
let area = '4,349 km²';
let population = '130,918';

console.log('2.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log('Pavadinimas: ' + city);
console.log('Valstybė: ' + country);
console.log('Apskritis: ' + county);
console.log('Įkūrimo data: ' + startyear);
console.log('Meras: ' + mayor);
console.log('Plotas kv. km.: ' + area);
console.log('Gyventojų skaičius: ' + population);
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');


// 3. Susikurkite kintamąjį savo vardui saugoti. Išveskite į konsolę tekstą "mano vardas yra " ir turimo kintamojo reikšmę.
let myName = 'Marija';

console.log('3.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log('My name is ' + myName)
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');


// 4. Susikurkite kintamuosius studento akademinei grupei ir vidurkiui saugoti. Išveskite į konsolę, atskirose eilutėse pagalbinius tekstus, po kurių sektų dvitaškis ir atitinkamas kintamasis. Pavyzdžiui:
// akademinė grupė: ifzm-6
// vidurkis: 8
let academyGroup = 'Coding maniacs';
let score = 11;

console.log('4.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log('Akademinė grupė: ' + academyGroup)
console.log('Vidurkis: ' + score)
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');


// 5. Susikurkite kintamąjį, kuris saugotų bet kokį žodį. Išveskite šį žodį naudojant vieną console.log(). Žodis turi būti išvestas 5 kartus toje pačioje eilutėje, neatskiriant jokiu tarpu.
let word = 'žodis';

console.log('5.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log(word , word, word, word, word)
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');


// 6. Susikurkite šiuos kintamuosius, saugančius informaciją apie gyvūną: pavadinimas, amžius, kailio spalva, svoris. Išveskite šiuos duomenis gražiai suformatuotus vienoje eilutėje, sakinio forma. Pavyzdžiui:
// Gyvūnas - šuo (2 m.) turi rudą kailio spalvą ir sveria 1.4 kg.
let animalName = "Panda";
let animalAge = "11";
let animalFurColor = 'black and white';
let animalWeight = '111 kg';

console.log('6.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
// pavadinimas, amžius, kailio spalva, svoris
console.log(animalName + ' is ' + animalAge + ' year animal with ' + animalFurColor + ' fur. ' + 'With all fluffs and what is in tummy ' + animalName + ' weights: ' + animalWeight + '.')
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');



// 7. Susikurkite skaičiaus kintamąjį, kurį išveskite penkis kartus toje pačioje eilutėje be tarpų tarp šių skaičių. Pavyzdžiui:
// skaičius - 25, išvedimas - 2525252525
let number = 101;

console.log('7.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log(`${number}${number}${number}${number}${number}`)
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');



// 8. Susikurkite skaičiaus kintamąjį, kurį išveskite penkis kartus toje pačioje eilutėje su tarpais tarp šių skaičių. Pavyzdžiui:
// skaičius - 25, rezultatas - 25 25 25 25 25
let numberX = 101;

console.log('8.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log(numberX,numberX,numberX,numberX,numberX)
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');