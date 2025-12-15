console.log("- - - - - - Task 13.3_Marija Stonyte- - - - - -");

// 1. Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, …
console.log("\n- - - - - - 1. - - - - - -\n");

let veiksmas = ['priezastis', 'tikslas', 'salyga', 'bandymas', 'atoveiksmis'];

veiksmas.forEach((kintamas, indexas) => {
    console.log(indexas, '-' , kintamas)
});


// 2. Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.
console.log("\n- - - - - - 2. - - - - - -\n");

const shoppingList = ['oranges', 'shitakee mushrooms', 'beans', 'garlic'];

console.log('Shopping list:')

for(const listed of shoppingList){
    console.log('-' , listed)
}


// 5. Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis. Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt arba .json tipo.
console.log("\n- - - - - - 5. - - - - - -\n");

let failai = ['index.html', 'styles.css', 'README.txt', 'index.js', 'script.js', 'son.json', 'raides.txt'];
let txt =[];
let json = [];

failai.forEach((kintamas, indexas) => {
    if(kintamas.endsWith(".txt") == true){
        txt.push(kintamas);
    }
    if(kintamas.endsWith(".json") == true){
        json.push(kintamas);
    }
});

console.log('TXT failai: ', txt)
console.log('JSON failai: ', json)

// 6. Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant kiek raidžių sudaro jo pavadinimą.
console.log("\n- - - - - - 6. - - - - - -\n");

const moto = ['Opel', 'Subaru', 'Audi', 'Toyota', 'Jaguar', 'Mercedes-Benz'];

console.log('Car models:');

for(model of moto){
    const countLetters = (model) => (model.match(/[a-zA-Z]/g) || []).length;  // counts only letters
    console.log(model , '- word of' , countLetters(model) , 'symbols.')
}