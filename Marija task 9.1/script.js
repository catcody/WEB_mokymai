console.log();
console.log('Marija Stonytė task 9.1');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
//// 1. Susikurkite tris kintamuosius skaičiams saugoti. Parašykite šias atskiras if sąlygas:
let a = 88;
let b = 53;
let c = 53;

// 1.1 Ar pirmas ir antras skaičiai yra lygūs?
console.log('1.1');

if(a==b){
    console.log('pirmas ir antras skaičiai yra lygūs');
} else{
    console.log('pirmas ir antras skaičiai yra nelygūs');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 1.2 Ar antras ir trečias skaičiai yra lygūs?
console.log('1.2');

if(b==c){
    console.log('antras ir trečias skaičiai yra lygūs');
} else{
    console.log('antras ir trečias skaičiai yra nelygūs');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 1.3 Ar pirmas skaičius yra didesnis už antrąjį?
console.log('1.3');

if(a>b){
    console.log('pirmas skaičius yra didesnis už antrąjį');
} else{
    console.log('pirmas skaičius nėra didesnis už antrąjį');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 1.4 Ar antras skaičius yra didesnis už dvigubą trečiojo skaičiaus reikšmę (trečias skaičius padaugintas iš 2)?
console.log('1.4');

if(b>(c*2)){
    console.log('antras skaičius yra didesnis už dvigubą trečiojo skaičiaus reikšmę');
} else{
    console.log('antras skaičius nėra didesnis už dvigubą trečiojo skaičiaus reikšmę');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 1.5 Ar pirmas skaičius yra lyginis (ar dalinasi iš 2)?
console.log('1.5');

if(a % 2 === 0){
    console.log('pirmas skaičius yra lyginis');
} else{
    console.log('pirmas skaičius yra nelyginis');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 1.6 Ar antras skaičius yra nelyginis (ar nesidalina iš 2)?
console.log('1.6');

if(b % 2 !== 0){
    console.log('antras skaičius yra nelyginis');
} else{
    console.log('antras skaičius yra lyginis');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 1.7 Ar trečias skaičius yra teigiamas (didesnis už 0)?
console.log('1.7');

if(c>0){
    console.log('trečias skaičius yra teigiamas');
} else{
    console.log('trečias skaičius yra neigiamas');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 1.8 Ar pirmas skaičius yra neigiamas (mažesnis už 0)?
console.log('1.8');

if(a<0){
    console.log('pirmas skaičius yra neigiamas');
} else{
    console.log('pirmas skaičius yra teigiamas');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 1.9 Ar antras skaičius dalinasi iš 4?
console.log('1.9');

if(b % 4 === 0){
    console.log('antras skaičius dalinasi iš 4');
} else{
    console.log('antras skaičius nesidalina iš 4');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 1.10 Ar trečias skaičius dalinasi iš 8?
console.log('1.10');

if(c % 8 === 0){
    console.log('trečias skaičius dalinasi iš 8');
} else{
    console.log('trečias skaičius nesidalina iš 8');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');


// 2. Susikurkite kintamąjį vartotojo amžiui saugoti. Patikrinkite ar amžius yra didesnis arba lygus 18-ai, jei taip - išveskite “jūs galite balsuoti”.
console.log('2.');

let age = 34;

if(age >= 18){
    console.log('jūs galite balsuoti');
} else{
    console.log('jūs negalite balsuoti');
}

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');


// 3. Susikurkite kelis kintamuosius saugoti pažymiams. Raskite šių pažymių vidurkį. Patikrinkite ar vidurkis teigiamas (daugiau arba lygu 5-iems), jei taip - išveskite “vidurkis teigiamas”.
console.log('3.');

let m = 8;
let n = 10;
let average = (m+n)/2 >= 5 ? 'vidurkis teigiamas' : 'vidurkis neigiamas';
console.log(average);

console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');



// 4. Susikurkite skaičiaus kintamąjį. Atlikite šiuos patikrinimus ir veiksmus:
let nr = 50;

// 4.1 Jei skaičius dalinasi iš 5, tuomet išveskite šio skaičiaus daugybos lentelę nuo 1 iki 5.
console.log('4.1');

if(nr % 5 === 0){
        let i = 1;
        while (i <= 5) {
        console.log(`${n} x ${i} = ${n * i}`);
        i++;
    } 
} else{
        console.log('skaicius nesidalina is 5');
    }
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');


// 4.2 Jei skaičius lyginis, tuomet išveskite šį skaičių, jo kvadratą ir jį padalintą iš 2.
console.log('4.2');

if(nr % 2 === 0){
    console.log('skaicius: ' + nr);
    console.log('kvadratu: ' + nr*nr);
    console.log('padalintas is 2: ' + nr/2);
} else{
    console.log('skaicius nelyginis');
}
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');


// 4.3 Jei skaičius nesidalina iš 7, tuomet susikurkite antrąjį kintamąjį, išveskite šių dviejų skaičių sumą, skirtumą, sandaugą, dalmenį.
console.log('4.3');

if(nr % 7 !== 0){
    let kin = 49;
    console.log('suma: ' + (nr + kin));
    console.log('skirtumas: ' + (nr - kin));
    console.log('sandauga: ' + (nr * kin));
    console.log('dalmuo: ' + (nr / kin));
}
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

 