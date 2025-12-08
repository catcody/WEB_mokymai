for(let i=0; i<=10;i++){
    console.log('i: ', i);
}

for(let i=0; i<=10;i+=5){
    console.log('i: ', i);
}

console.log('po ciklo vyksta toliau');

for(let i=2; i<=10;i++){
    if(i % 2 === 0){
    console.log('skaicius: ', i , ' yra lyginis.');
    }
}

// kintamasis - kintantis
let kiek = 5;
for(let i=0; i< kiek; i+=5){
    console.log('i: ', i);
}

// ciklas cikle
for(i=1; i<=3; i++){
    console.log('pirmo ciklo pradzia: ', i);
    for(j=1; j<=5; j++){   
        console.log('   antras ciklas. j: ', j);
    }
    console.log('pirmo ciklo pabaiga: ', i);
}


// masyvas ir ciklas
let prekes = ['obuolys', 'bananas', 'slyva', 'kriause', 'vysnia'];

for(let i=0; i<prekes.length; i++){
    console.log('preke: ', prekes[i]);
}
// uzduotis: isvesti i console prekiu sarasa su numeracija
for(let i=0; i<prekes.length; i++){
    console.log( (i+1) + '. ' + prekes[i]);
}

// uzduotis: isvesti i console prekiu sarasa su numeracija, bet naudojant template string
for(let i=0; i<prekes.length; i++){
    console.log( `${i+1}. ${prekes[i]}` );
}       
// uzduotis: isvesti i console prekiu sarasa su numeracija, bet naudojant template string ir HTML tagus
for(let i=0; i<prekes.length; i++){
    console.log( `<p>${i+1}. ${prekes[i]}</p>` );
}

// uzduotis: sukurti HTML sarasa naudojant cikla
let prekiuSarasasDiv = document.getElementById('prekiu-sarasas');

for(let i=0; i<prekes.length; i++){
    prekiuSarasasDiv.innerHTML += `<p>${i+1}. ${prekes[i]}</p>`;
}
// uzduotis: sukurti HTML sarasa naudojant cikla ir ne <p> tagus, o <li> tagus, kurie bus ideti i <ul>
let prekiuSarasasUl = document.getElementById('prekiu-sarasas-ul');

for(let i=0; i<prekes.length; i++){
    prekiuSarasasUl.innerHTML += `<li>${i+1}. ${prekes[i]}</li>`;
}
// uzduotis: sukurti HTML sarasa naudojant cikla ir ne <p> tagus, o <li> tagus, kurie bus ideti i <ul>, bet numeracija bus naudojant CSS counter
let prekiuSarasasUlCss = document.getElementById('prekiu-sarasas-ul-css');

for(let i=0; i<prekes.length; i++){
    prekiuSarasasUlCss.innerHTML += `<li>${prekes[i]}</li>`;
}   