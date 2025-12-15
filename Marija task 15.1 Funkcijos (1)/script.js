console.log("- - - - - - Task 15.1_Marija Stonyte- - - - - -");

// ; 1. Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote programavimą. Iškvieskite šią funkciją tris kartus.
console.log("\n- - - - - - 1. - - - - - -\n");

function interviu(){
    console.log('INTERVIU');
    console.log('Apklaustasis:  Marija');
    console.log();
    console.log('Klausimas:  Kodel pasirinkote programavima?');
    console.log('Atsakymas:  Iki programavimo kursu atvede keli dalykai - galimybe dirbti "remotely", ieskojimas kur panaudoti analitikiska mastyma, noras mokintis, turimas supratimas apie WEB ir noras gilintis, noras suprasti kaip veikia matrixa.');
    console.log();
    console.log('Aciu uz atsakyma.');
    console.log('Aciu uz klausima.');
}

interviu();

// ; 2. Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5 kartus.
console.log("\n- - - - - - 2. - - - - - -\n");

function eilerastis(){
    console.log(`Rududu Rududu,
Ale batai buvo du,
Abu pasislepe po lapu,
Sako: "Lyja, niekur neisiu"
Ale atskrido sketis ir nusisypsojo abu`);
};

eilerastis();
eilerastis();
eilerastis();
eilerastis();
eilerastis();


// ; 4. Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutėje, kitoje kita. Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią trečiąją funkciją už visų funkcijų ribų.
console.log("\n- - - - - - 4. - - - - - -\n");

trecia();

function trecia(){
    pirma();
    antra();
};

function pirma(){
    console.log('Iskviesta funkcija, kuri parasyta po iskvietimo, o iskvietimas virs iskvietimo funkcijos O_O');
};

function antra(){
    console.log('O cia kita, iskviesta kaip ir pirma eilute -__-');
};

// 6. Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma informacija apie policininką (vardas, pavardė, amžius, alga, etatas, specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite į sakinį, ar išveskite sąrašu ar pan.)
console.log("\n- - - - - - 6. - - - - - -\n");

function policeOfficer(){
    let name = 'Chuck';
    let surname = 'McFluff';
    let age = '44';
    let salary = '111111/year';
    let specialiazation = 'Officer';
    console.log(specialiazation, name, surname, 'went to McDonalds to eat his favorite McFlurry icecream.');
};

policeOfficer();


// 8. Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių.
console.log("\n- - - - - - 8. - - - - - -\n");

for(let i = 0; i <= 10; i++){
    random();
};

function random(){
    let randomInteger = Math.floor(Math.random() * 10);
    console.log(randomInteger);
};