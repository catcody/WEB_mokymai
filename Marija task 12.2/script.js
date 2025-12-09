console.log("- - - - - - Task 12.2_Marija Stonyte- - - - - -");
console.log();

// 1. Raskite visų skaičių nuo 1 iki 100 sumą.
console.log("- - - - - - 1. - - - - - -\n");

let suma = 0;
for (i = 0; i <= 100; i++){
    suma+= i;
}
console.log("Suma nuo 1 iki 100 yra: " + suma);


// 2. Raskite visų lyginių skaičių nuo 20 iki 50 sumą.
console.log("\n- - - - - - 2. - - - - - -\n");

let sum = 0;

for(let i = 20; i <=50; i++){
    if(i % 2 == 0){
        sum += i;
    }
}

console.log("Lyginių skaičių nuo 20 iki 50 suma yra: " + sum);


// 3. Raskite visų nelyginių skaičių nuo 30 iki 60 sumą.
console.log("\n- - - - - - 3. - - - - - -\n");

let sumaNelyginiu = 0;

for(let i = 30; i <=60; i++){
    if(i % 2 != 0){
        sumaNelyginiu += i;
    }
}

console.log("Nelyginių skaičių nuo 30 iki 60 suma yra: " + sumaNelyginiu);


// 4. Rasti visų skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5, sumą. Pavyzdys:
// 	Visi skaičiai mažesni už 10 ir kurie dalinasi iš 3 arba 5 yra: 3, 5, 6, 9.
// 	Šių skaičių suma yra 23.
// Turite gauti 233168 atsakymą.
console.log("\n- - - - - - 4. - - - - - -\n");

let total = 0;

for(let i =0; i < 1000; i++){
    if(i % 3 ==0 || i % 5 == 0){
        total += i;
    }
};
console.log('Skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5, suma: ' + total);


// 5. The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:
// "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."
console.log("\n- - - - - - 5. - - - - - -\n");

for(let i = 0; i <= 100; i++){
   if(i % 3 == 0){
    console.log('Fizz');
   }
   if(i % 5 == 0){
    console.log('Buzz');
   }
   if(i % 3 == 0 && i % 5 == 0){
    console.log('FizzBuzz');
   }
    console.log(i);
};


// 6. (sunkesnė) Parašyti for ciklą, kuris išvestų norimą kiekį fibonačiaus skaičių į ekraną. Fibonačiaus sekoje kiekvienas skaičius yra lygus prieš jį ėjusių dviejų skaičių sumai: 1, 1, 2, 3, 5, 8, 13, 21…
// 6.1. Susikurkite tris sveikųjų skaičių kintamuosius, kurie jums padės tai pasiekti.
// 6.1.1. Pirmi du kintamieji saugos paskutinius du skaičius.
// 6.1.2.Trečiasis bus šių pirmų dviejų skaičių suma.
// 6.2. Pirmus du skaičius išveskite ne cikle, o prieš jį ir ciklą pradėkite vykdyti nuo 2, o ne nuo 0.
// 6.3. Kiekvieno ciklo metu turite perskaičiuot trečiąjį skaičių (pirmų dviejų skaičių sudėtis), tuomet pirmasis skaičius yra lygus antram, o antrasis lygus trečiam, išvesti į ekraną trečią skaičių.
console.log("\n- - - - - - 6. - - - - - -\n");

let pirmas = 1;
let antras = 1;

console.log(pirmas);
console.log(antras);

for(i = 2; i < 10; i++){
    let trecias = pirmas + antras;
    console.log(trecias);
    pirmas = antras;
    antras = trecias;
}


