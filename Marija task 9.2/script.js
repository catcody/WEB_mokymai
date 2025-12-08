console.log('\n Task 9.2 Marija Stonytė\n')


// Susikurkite tris skaičių kintamuosius. Patikrinkite šias sąlygas (naudojant else if dalis):
// Ar pirmas skaičius didesnis už antrą?
// Ar antras skaičius didesnis už trečią?
// Ar trečias skaičius didesnis už pirmą?
// Ar pirmi du skaičiai yra lygūs?
// Ar paskutiniai du skaičiai yra lygūs?
// Ar pirmas skaičius yra lygus 0?
// Ar antras skaičius neigiamas?
// Ar trečias skaičius teigiamas?
let kin1 = -32;
let kin2 = 67;
let kin3 = -13;

if(kin1 > kin2){
    console.log('pirmas skaičius didesnis už antrą')
} else if(kin2 > kin3){
    console.log('antras skaičius didesnis už trečią')
} else if(kin3 > kin1){
    console.log('trečias skaičius didesnis už pirmą')
} else if(kin1 == kin2){
    console.log('pirmi du skaičiai yra lygūs')
} else if(kin2 == kin3){
    console.log('paskutiniai du skaičiai yra lygūs')
} else if(kin1 == 0){
    console.log('pirmas skaičius yra lygus 0')
} else if(kin2 < 0){
    console.log('antras skaičius neigiamas')
} else if(kin3 > 0){
    console.log('trečias skaičius teigiamas')
}

// Susikurkite kintamąjį egzamino pažymiui saugoti [0-10]. Naudojant else if dalis patikrinkite šias sąlygas ir išveskite atitinkamą tekstą:
// Jei pažymys yra lygus 10 išvesti “puiku”.
// Jei pažymys yra lygus arba didesnis nei 9 išvesti “labai gerai”.
// Jei pažymys yra lygus arba didesnis nei 7 išvesti “gerai”.
// Jei pažymys yra lygus arba didesnis nei 5 išvesti “patenkinamai”.
// Jei pažymys mažesnis nei 5 išvesti “egzaminas neišlaikytas”.

let score = 7.9;

if(score === 10){
    console.log('puiku');
} else if(score >= 9){
    console.log('labai gerai');
} else if(score >= 7){
    console.log('gerai');
} else if(score >= 5){
    console.log('patenkinamai');
} else if(score < 5){
    console.log('egzaminas neišlaikytas');
}


console.log('\n');