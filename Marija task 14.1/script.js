console.log("- - - - - - Task 14.1_Marija Stonyte- - - - - -");

// Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa, atsiskaitytų kreditų skaičius, pažymiai, ūgis, kelintame kurse mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris skirtingas pasirinktas savybes.
console.log("\n- - - - - - 1. - - - - - -\n");

let cat = {
    vardas: 'Cody',
    pavarde: 'Cat',
    amzius: 11,
    kredituKiekis: 3,
    pazymiai: [8, 8, 8],
    ugis: 111,
    kursas: 3,
    mokykla: 'Self Discovery'
};

console.log(cat)
console.log(`pavarde: ${cat.pavarde}
pazymiai: ${cat.pazymiai}
mokykla: ${cat.mokykla}`)

// Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis - biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba panaudoti new Date(Date.now()).getFullYear() funkciją).
console.log("\n- - - - - - 2. - - - - - -\n");

let movie = {
    title: 'I heart Huckabees',
    producers: ['David O. Russell', 'Gregory Goodman', 'Scott Rudin'],
    budget: 20000000,
    earnings: 20034713,
    genre: 'Dark comedy',
    releaseYear: 2004,
    actors: ['Jason Schwartzman', 'Dustin Hoffman', 'Lily Tomlin', 'Mark Wahlberg', 'Jude Law', 'Isabelle Huppert', 'Naomi Watts', 'Angela Grillo', 'Ger Duany', 'Darlene Hunt', 'Kevin Dunn'],
    filmDuration: '1h 47m'
};

console.log(movie);
console.log('Movie profit: ' , movie.earnings - movie.budget);
console.log('Actors: ' , movie.actors.length);

const today = new Date();
let thisYear = today.getFullYear();
console.log('Year: ' , thisYear - movie.releaseYear , 'year old.');

// 3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius, žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais), išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų informaciją. 
console.log("\n- - - - - - 3. - - - - - -\n");

const knyga1 = {
  pavadinimas: "Altoriu sesely",
  autorius: "Vincas Mykolaitis-Putinas",
  zanras: "Romanas",
  kaina: 14.99,
  puslapiuKiekis: 520,
  skyriuSarasas: [
    "Kryzkeles",
    "Sventove",
    "Issivadavimas"
  ],
  isleidimoMetai: 1933,
  arYraKnygynuose: true
};

const knyga2 = {
  pavadinimas: "Mazasis princas",
  autorius: "Antoine de Saint-Exupery",
  zanras: "Pasaka / filosofine apysaka",
  kaina: 9.49,
  puslapiuKiekis: 112,
  skyriuSarasas: [
    "Avarija Sacharoje",
    "Lapes pamokos",
    "Kelione per planetas",
    "Sugrizimas"
  ],
  isleidimoMetai: 1943,
  arYraKnygynuose: true
};

// Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei kurioje knygoje yra daugiau skyrių. 
let puslapiai1 = knyga1.puslapiuKiekis;
let puslapiai2 = knyga2.puslapiuKiekis;

if(puslapiai1 < puslapiai2){
    console.log('Knyga' , knyga1.pavadinimas , 'yra plonesnė.')
} else if (puslapiai2 < puslapiai1){
    console.log('Knyga' , knyga2.pavadinimas , 'yra plonesnė.')
} else {
    console.log('Knygou storiai vienodi')
}

let skyriai1 = knyga1.skyriuSarasas.length;
let skyriai2 = knyga2.skyriuSarasas.length;

if(skyriai1 > skyriai2){
    console.log('Knygoje' , knyga1.pavadinimas , 'yra daugiau skyriu.')
} else if (skyriai2 > skyriai1){
    console.log('Knygoje' , knyga2.pavadinimas , 'yra daugiau skyriu.')
} else {
    console.log('Knygose skyriu vienodai.')
}

// Paskaičiuokite, jeigu pigesnės knygos kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?
let kaina1 = knyga1.kaina;
let kaina2 = knyga2.kaina;

if(kaina1 < kaina2 && kaina1*2 > kaina2){
    console.log('Padvigubinta knygos' , knyga1.pavadinimas , 'kaina brangesne uz kita knyga.');
} else if(kaina2 < kaina1 && kaina2**2 > kaina1){
    console.log('Padvigubinta knygos' , knyga2.pavadinimas , 'kaina brangesne uz kita knyga.');
} else if(kaina1 === kaina2){
    console.log('Kainos lygios.');
}

// 4. Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas, turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). 
console.log("\n- - - - - - 4. - - - - - -\n");

const preke1 = {
  pavadinimas: "Bluetooth koloneles",
  kaina: 49.99,
  savikaina: 28.50,
  kodas: "BK-102",
  turimasKiekis: 120,
  deze: {
    x: 25,
    y: 18,
    z: 15
  }
};

const preke2 = {
  pavadinimas: "Beviele pele",
  kaina: 19.99,
  savikaina: 9.20,
  kodas: "MP-450",
  turimasKiekis: 300,
  deze: {
    x: 12,
    y: 8,
    z: 6
  }
};

const preke3 = {
  pavadinimas: "Nešiojama baterija 20000mAh",
  kaina: 34.90,
  savikaina: 18.00,
  kodas: "PB-200",
  turimasKiekis: 85,
  deze: {
    x: 16,
    y: 9,
    z: 3
  }
};

// Išveskite visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje (pirma prekė kainuoja - …, antra prekė kainuoja - …, ir t.t.). 
console.log('Pirma preke kainuoja -' , preke1.kaina , 'antra preke kainuoja -' , preke2.kaina , 'trecia preke kainuoja -' , preke3.kaina);

// Raskite ir išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą rastos prekės informaciją). 

let kain1 = preke1.kaina;
let kain2 = preke2.kaina;
let kain3 = preke3.kaina;

if(kain1 > kain2 && kain1 > kain3){
    console.log('Brangiausia preke: ' , preke1.pavadinimas  , '. Kaina: ' , kain1)
} else if(kain2 > kain1 && kain2 > kain3){
    console.log('Brangiausia preke: ' , preke2.pavadinimas  , '. Kaina: ' , kain2)
} else if(kain3 > kain1 && kain3 > kain2){
    console.log('Brangiausia preke: ' , preke3.pavadinimas  , '. Kaina: ' , kain3)
} else {
    console.log('Prekiu kaina vienoda')
}

//Raskite ir išveskite atskirose eilutėse kiekvienos prekės dėžės tūrį. 
let turis1 = preke1.deze.x * preke1.deze.y * preke1.deze.z;
let turis2 = preke2.deze.x * preke2.deze.y * preke2.deze.z;
let turis3 = preke3.deze.x * preke3.deze.y * preke3.deze.z;

console.log('preke1 dezes turis: ' , turis1);
console.log('preke2 dezes turis: ' , turis2);
console.log('preke3 dezes turis: ' , turis3);

// Raskite ir išveskite atskirose eilutėse kiekvienos prekės pelningumą ((kaina - savikaina) * kiekis sandėlyje).
let pelningumas1 = (preke1.kaina - preke1.savikaina) * preke1.turimasKiekis;
let pelningumas2 = (preke2.kaina - preke2.savikaina) * preke2.turimasKiekis;
let pelningumas3 = (preke3.kaina - preke3.savikaina) * preke3.turimasKiekis;

console.log('preke1 pelningumas: ' , pelningumas1);
console.log('preke2 pelningumas: ' , pelningumas2);
console.log('preke3 pelningumas: ' , pelningumas3);

// 5. Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys). Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai, spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis įrašykite dabartinius metus arba panaudokite new Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300 kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).
console.log("\n- - - - - - 5. - - - - - -\n");

let car = {};

car.marke = 'Subaru';
car.modelis = 'Forester';
car.rida = 156000;
car.gamybosMetai = 2010;
car.spalva = 'dark green'
car.darbinisTuris = 1.8;
car.arDauzta = false;
car.arParduodama = true;

console.log('car: ' , car);

let kiekMetu = new Date(Date.now()).getFullYear() - car.gamybosMetai
console.log('Car is ' , kiekMetu , 'y.o.');

let nuvaziuotaPerMetus = car.rida / kiekMetu;
console.log('km/year: ' , nuvaziuotaPerMetus);

console.log();