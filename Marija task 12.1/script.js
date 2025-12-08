console.log("Marija_Stonyte_Task 12.1");


// 1. Parašyti for, kuris išvestų kiekvieną skaičių pradedant nuo 0 ir baigiant 10. 
console.log("\n- - - - 1. skaiciai nuo 0 iki 10 ");

for(let i = 0; i <= 10; i++){
    console.log(i);
}

// 2. Parašyti for, kuris išvestų kas antrą skaičių pradedant 0 ir baigiant 15.
console.log("\n- - - - 2. kas antras skaicius nuo 0 iki 15");

for(let x = 0; x <= 15; x++){
    if(x % 2 == 0){
        continue;
    }
    console.log(x);
}

// 3. Parašyti for, kuris išvestų kas trečią skaičių, pradedant 1 ir baigiant 20. Kiekvieną skaičių apskliausti laužtiniais skliaustais. Pvz.: [1][4][7]...
console.log("\n- - - - 3. kas trecias skaicius [1-20]");

for(let kin = 1; kin <= 20; kin+= 3){
    console.log(`[${kin}]`);
}


// 4. Parašyti for, kuris eitų pro kiekvieną skaičių nuo 1 iki 20. Jame apsirašyti if sąlygą, kuri patikrintų ar dabartinis skaičius dalinasi iš 4, jei taip tai šį skaičių išvesti.
console.log("\n- - - - 4. skaiciai dalinasi is 4 [1-20]");

for(let sk = 1; sk<= 20; sk++){
    if(sk % 4 == 0){
        console.log(sk);
    }
};

// 5. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet vykdyti for, kuris atskirose eilutėse išvestų kiekvieną skaičių iš tų rėžių, bei atskiriant tarpu - tų skaičių kvadratus.
console.log("\n- - - - 5. skaiciu seka ir kvadratai");

let start = 3;
let end = 8;

for(start = 1; start < end; start++){
    console.log(`${start} ${start**2}`);
}

// 6. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet vykdyti for, kuris iš duotų skaičių išvestų visus nelyginius skaičius arba tuos, kurie dalinasi iš 8.
console.log("\n- - - - 6. nelyginiai skaiciai arba kurie dalinasi is 8");

let pradzia = 1;
let pabaiga = 20;

for(pradzia = 1; pradzia <= pabaiga; pradzia++){
    if(pradzia % 2 != 0 || pradzia % 8 == 0){
        console.log(pradzia);
    }
}


// 7. (papildomai, sunkiau) Be daugybos veiksmo programoje, sudauginti du skaičius.
console.log("\n- - - - 7. be daugybos veiksmo programoje, sudauginti du skaicius");

// let ats = 0;
// let daugiklis = 8;

// for(let kin = 2; kin <= daugiklis; kin++){
//     ats += daugiklis;
// }
// console.log(ats);

function multiply(skaicius, daugiklis) {
  let ats = 0;
  let positiveNr = Math.abs(daugiklis);

  for (let ciklas = 0; ciklas < positiveNr; ciklas++) {
    ats += skaicius;
  }

  return daugiklis < 0 ? -ats : ats;
}

console.log(multiply(11, -10));