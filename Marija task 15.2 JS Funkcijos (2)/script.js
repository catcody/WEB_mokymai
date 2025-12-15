console.log("\n- - - - - - Task 15.2_Marija Stonyte- - - - - -");


// 2. Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs - tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų, duodant skirtingus skaičius.
console.log("\n- - - - - - 2. - - - - - -\n");

function didesnisSkaicius(a, b){
    if(a > b){
        console.log('Skaicius', a, 'didesnis uz skaiciu', b)
    } else if(a < b){
        console.log('Skaicius', b, 'didesnis uz skaiciu', a)
    } else if(a === b){
        console.log('Skaicius', a, 'lygus skaiciui', a)
    }
};

let a = Math.floor(Math.random()*10);
let b = Math.floor(Math.random()*10);

console.log('Skaiciai: ', a, ',' ,b)
didesnisSkaicius(a,b);

// 3. Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė, modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant skirtingus duomenis jai.
console.log("\n- - - - - - 3. - - - - - -\n");

function bamboo(a, b, c, d){
    console.log(a, b, 'suvalge', c, 'bambuku ir tapo', d)
};

function info(x){
    console.log('Miske driftino', x)
};

let marke = 'Panda';
let modelis = 'Miskine';
let gamybosMetai = 'Pries mums gimstant';
let darbinisTuris = '11 l';

bamboo(gamybosMetai, marke, darbinisTuris, modelis);
info(marke);


// 4. Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas, perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą kartų.
console.log("\n- - - - - - 4. - - - - - -\n");

function suma(a, b){
    console.log(`${a} + ${b} = ${a + b}`);
};

function skirtumas(a, b){
    console.log(`${a} - ${b} = ${a - b}`);
};

function sandauga(a, b){
    console.log(`${a} x ${b} = ${a * b}`);
};

function dalmuo(a, b){
    console.log(`${a} / ${b} = ${a / b}`);
};

function isvedimas(){
    let sk1 = Math.floor(Math.random()*10);
    let sk2 = Math.floor(Math.random()*10);
    suma(a,b);
    skirtumas(a,b);
    sandauga(a,b);
    dalmuo(a,b);
    console.log();
};

isvedimas();
isvedimas();
