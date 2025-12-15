console.log("\n- - - - - - Task 15.3_Marija Stonyte- - - - - -");

// 2. Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.
console.log("\n- - - - - - Task 2. - - - - - -\n");

function masyvoIsvedimas(masyvas){
    for(const elementas of masyvas){
        console.log(`skaicius - ${elementas}`);
        console.log(`${elementas} **2 - ${elementas**2}`);
        console.log(`${elementas} / 2 - ${elementas}`);
        console.log();
    }
    console.log();
};

const skaiciai1 = [2, 4, 7, 88];
const skaiciai2 = [78, 103, 5, 30];

masyvoIsvedimas(skaiciai1);
masyvoIsvedimas(skaiciai2);

// 4. Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat, susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus. Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti, masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.
console.log("\n- - - - - - Task 2. - - - - - -\n");

function didziausiasSkaicius(masyvas){
    let max = masyvas[0];

    for(const skaicius of masyvas){
        if(skaicius > max){
            max = skaicius;
        }
    }
    console.log(max);
};

function masyvoUzpildymas(masyvas, kiekis){
    for(let i = 0; i < kiekis; i++){
        masyvas.push(Math.floor(Math.random()*10));
    };
    return masyvas;
};

const masyvas1 = [];
const masyvas2 = [];
const masyvas3 = [];

masyvoUzpildymas(masyvas1, 8);
masyvoUzpildymas(masyvas2, 10);
masyvoUzpildymas(masyvas3, 11);

console.log(masyvas1, masyvas2, masyvas3, '\n');

didziausiasSkaicius(masyvas1);
didziausiasSkaicius(masyvas2);
didziausiasSkaicius(masyvas3);
