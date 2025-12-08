console.log('Užduotis atliko: Marija Stonytė');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 1. Išveskite į konsolę pasirinktą skaičių, jo kvadratą, jį pakeltą trečiu laipsniu.
let number = 11;

console.log('1.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log('skaicius: ' + number)
console.log('kvadratu: ' + (number*number))
console.log('kubu: ' + (number**3))
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');


// 2. Susikurkite tris kintamuosius skaičiams saugoti. Išveskite šių skaičių sumą ir sandaugą.
let x = 11;
let y = 22;
let w = 33;

console.log('2.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log('skaiciai: ' + `${x} , ${y} , ${w}`)
console.log('suma: ' + (x+y+w))
console.log('sandauga: ' + (x*y*w))
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 3. Susikurkite du kintamuosius skaičiams saugoti. Išveskite šių skaičių sumą ir skirtumą. Išveskite sandaugą, gautą padauginus sumą ir skirtumą. Išveskite dalmenį, gautą padalinus sumą iš skirtumo.
let a = 11;
let b = 22;

console.log('3.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log('skaiciai: ' + `${a} , ${b}`)
console.log('suma: ' + (a+b))
console.log('skirtumas: ' + (a-b))
let mult = (a+b)*(a-b);
console.log('sandauga: ' + mult)
let div = (a+b)/(a-b);
console.log('dalmuo: ' + div)
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 4. Susikurkite keturis kintamuosius skaičiams saugoti. Išveskite šių skaičių vidurkį.
let sk1 = 11;
let sk2 = 22;
let sk3 = 33;
let sk4 = 44;

console.log('4.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log('numbers: ' + `${sk1} , ${sk2} , ${sk3} , ${sk4}`)
console.log('average: ' + ((sk1 + sk2 + sk3 + sk4)/4))
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 5. Išveskite į konsolę dviejų skaičių sumą, skirtumą, sandaugą ir dalmenį, kiekvieną kartą nurodant atliekamą veiksmą ir šių skaičių reikšmes. Pvz.:
// 4 + 5 = 9
// 4 - 5 = -1
// …
let nr1 = 1;
let nr2 = 2;
let sum = nr1 + nr2;
let skir = nr1 - nr2;
let san = nr1 * nr2;
let dal = nr1 / nr2;

console.log('5.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log('skaiciai: ' + `${nr1} , ${nr2}`)
console.log('suma: ' + `${nr1} + ${nr2} = ${sum}`)
console.log('skirtumas: ' + `${nr1} - ${nr2} = ${skir}`)
console.log('sandauga: ' + `${nr1} * ${nr2} = ${san}`)
console.log('dalmuo: ' + `${nr1} / ${nr2} = ${dal}`)
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 6. Išveskite į konsolę šių veiksmų atsakymus (turite gauti 23, 5, 12, 3.5):
// -1 + 4 * 6
// (35 + 5) % 7
// 14 + -4 * 6 / 12
// 2 + 15 / 6 * 1 - 7 % 2
let ats1 = -1 + 4 * 6;
let ats2 = (35 + 5) % 7;
let ats3 = 14 + -4 * 6 / 12;
let ats4 = 2 + 15 / 6 * 1 - 7 % 2;

console.log('6.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log('atsakymai: ' + `${ats1}, ${ats2}, ${ats3}, ${ats4}`)
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');

// 7. Išveskite norimo skaičiaus daugybos lentelę nuo 1 iki 10. Pavyzdžiui:
// 5 * 1 = 5
// 5 * 2 = 10
// …
// 5 * 10 = 50
let kin = 5;
let dau = 1;

console.log('7.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log(kin + '*' + dau + '=' + kin * dau);
dau++;
console.log(kin + '*' + dau + '=' + kin * dau);
dau++;
console.log(kin + '*' + dau + '=' + kin * dau);
dau++;
console.log(kin + '*' + dau + '=' + kin * dau);
dau++;
console.log(kin + '*' + dau + '=' + kin * dau);
dau++;
console.log(kin + '*' + dau + '=' + kin * dau);
dau++;
console.log(kin + '*' + dau + '=' + kin * dau);
dau++;
console.log(kin + '*' + dau + '=' + kin * dau);
dau++;
console.log(kin + '*' + dau + '=' + kin * dau);
dau++;
console.log(kin + '*' + dau + '=' + kin * dau);
dau++;
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');


// 8. (sunkesnė) Susikurkite dviženklį skaičių. Raskite jo skaitmenų sumą.
// Pavyzdžiui: 58 -> 5 + 8 = 13.
// Kad gauti pirmą skaitmenį galima dalinti iš 10 (ir panaudoti Math.floor(skaičius) arba Math.ceil(skaičius)).
// Kad gauti antrą skaitmenį galima dalinti su % iš 10.
let z = 94;
let pirmas = Math.floor(z/10);
let antras = z % 10;

console.log('8.');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');
console.log(z , '->' , pirmas , '+' , antras , '=' , pirmas + antras);
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - ');