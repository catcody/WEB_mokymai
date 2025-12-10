console.log("- - - - - - Task 13.4_Marija Stonyte- - - - - -");


// 1. Susikurkite masyvą, kuriame būtų pateikti mėgstamiausi valgiai. Pamėginkite masyvą papildyti informacija įvairiais būdais (pridėti naują valgį priekyje, gale, per vidurį, pasirinktoje vietoje). Pamėginkite ištrinti kažkuriuos 3 valgius (iš pasirinktų pozicijų, pvz priekio, galo ir vidurio).
console.log("\n- - - - - - 1. - - - - - -\n");

let yummy = ['pizza', 'orange', 'mango'];

// Pridėjimas gale
yummy.push('spring water', 'apple');

// Pridėjimas priekyje
yummy.unshift('avocado', 'cheese');

// Pridėjimas viduryje
yummy.splice(2, 0, 'shitakee mushrooms')

// Šalinimas iš galo
yummy.pop();

// Šalinimas iš priekio
yummy.shift();

// Šalinimas iš vidurio
yummy.splice(0, 0);

console.log(yummy);

// let sujungtas = pirmas.concat(antras); // masyvu apjungimas

// 2. Susikurkite skaičių masyvą. Naudojant includes, patikrinkite ar masyve yra kuris nors pasirinktas skaičius (pvz 8).
console.log("\n- - - - - - 2. - - - - - -\n");

let skaiciai = [1, 4, 8, 9];

let arYra = skaiciai.includes(8);
console.log('Ar yra skaicius 8 :' , arYra);


// 3. Susikurkite masyvą, kuriame būtų surašyti bet kokie žodžiai. Panaudokite join metodą, kad masyvą paverstumėte į teksto eilutę. Paeksperimentuokite su skirtingais skirtukais jungiant tekstą (pvz vieną kartą panaudokite tarpą, kitą kablelius ir t.t.).
console.log("\n- - - - - - 3. - - - - - -\n");

let zodziai = ['zodis', 'ne', 'zvirblis'];

let sujungtaTarpu = zodziai.join(' ');
console.log(sujungtaTarpu);

let sujungtaBruksniu = zodziai.join('-');
console.log(sujungtaBruksniu);

// 4. Susikurkite kintamąjį kuriame būtų saugomas sakinys iš kelių žodžių (string tipo kintamasis). Išskaidykite šį tekstą į masyvą naudojant split metodą. Raskite kiek žodžių buvo sakinyje.
console.log("\n- - - - - - 4. - - - - - -\n");

let kintamasis = "string tipo kintamasis";
let masyvas = kintamasis.split(' ');
console.log(masyvas);
console.log('Zodziu sakinyje: ' ,  masyvas.length);


// 14. Susikurkite du bet kokius masyvus. Raskite kurie elementai egzistuoja tiek viename tiek kitame masyve. Pvz jeigu pirmasis yra [1, 2, 3], o antrasis yra [2, 3, 4], tai atsakymas [2, 3].
console.log("\n- - - - - - 14. - - - - - -\n");

let uno = [22, 44, 55, 77];
let dos = [33, 77, 55, 88, 22, 99, 44];
let ats =[];
// Raskite kurie elementai egzistuoja tiek viename tiek kitame masyve
for(let i = 0; i < dos.length; i++){

    let check = dos[i];
    let match = uno.includes(check);

    if(match == true){
        ats.push(check)
    }
}

console.log(ats);

