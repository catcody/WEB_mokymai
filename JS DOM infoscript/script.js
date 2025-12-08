// Accessing elements in the DOM using different methods 
// and logging them to the console
// {Elemento su nurodytu id paėmimas}
let box =  document.getElementById('box');
console.log(box);
console.log(typeof box);

// Vieno elemento paėmimas pagal selektorių
let redbox = document.querySelector('.red');
console.log(redbox);

// Visų elementų paėmimas pagal selektorių

let bluebox = document.querySelectorAll('.blue');
let firstbox = box[0];
document.querySelector('#box');
console.log('first blue box'), firstbox;
console.log('second blue box'), bluebox[1];

// Elemento pasiėmimas
let container = document.querySelector('.container');
// Vėliau... kito ieškojimas jame
container.querySelector('.box');


// Ėjimas per medį (sekantis, ankstesnis, tėvinis el.)
// Elemento pasiėmimas
let box = document.querySelector(".box");

// Sekantis elementas
box.nextElementSibling;

// Ankstesnis elementas
box.previousElementSibling;

// Tėvinias elementas
box.parentElement;


// HTML turinio įrašymas į elementą
document.querySelector('.box').innerHTML = "<p>Text</p>";

// Teksto įrašymas į elementą
document.getElementById('box').innerText = 'Text';
document.querySelector('.box').textContent = 'Text';


// Teksto keitimas ir gavimas
// Atnaujinti elemento tekstą
document.querySelector(".button").textContent = "New text";

// Gauti dabartinį elemento tekstą
document.querySelector(".button").textContent; // Gausim "New text"


// Naujų elementų sukūrimas
document.createElement("div");
document.createElement("span");

// Elemento sukūrimas ir teksto keitimas
let element = document.createElement("div");
element.textContent = "Text";

// Elemento kūrimas ir pridėjimas į kitą elementą
// Sukurti elementą
let element = document.createElement("div");

// Pridėti sukurtą elementą į .container
document.querySelector(".container").appendChild(element);

// Reagavimas į veiksmus (paspaudimai ir pan.)
document.querySelector(".button").addEventListener("click", (e) => {
/* ... */
});

document.querySelector(".button").addEventListener("mouseenter", (e) => {
/* ... */
});

document.addEventListener("keyup", (e) => { /* ... */ });

// Funkcijos pritaikymas ant visų elementų
document.querySelectorAll(".box").forEach(function(box) {
    box.style.display = "none";
})

// Funkcijos pritaikymas ant visų elementų
document.querySelectorAll(".box").forEach(box => {
box.style.display = "none"
})


// Elemento kūrimas ir reagavimas į veiksmus su juo
// Elemento sukūrimas ir pridėjimas į DOM
let searchElement = document.createElement("div");
document.querySelector(".search-container").appendChild(searchElement);

// Prie šio elemento pridėti reagavimą į paspaudimą pelę
searchElement.addEventListener("click", handleClick);


// JavaScript vykdymas tik viskam užsikrovus (1)
window.addEventListener("load", function(){
    // Daryti dalykus, kai viskas bus pilnai užkrauta 
});


// JavaScript vykdymas tik viskam užsikrovus (2)
// Susikuriam patogią funkciją ir naudojam ją
let ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
  
ready(() => { 
    /* Daryti dalykus, kai viskas bus pilnai užkrauta */ 
});


// Elementų stiliavimas (1)
document.querySelector(".box").style.color = "#000";

let box = document.querySelector(".box");
box.style.color = "#000";
box.style.backgroundColor = "red";

// Uždėti visus stilius vienu metu (perrašant kas uždėta)
box.style.cssText = "color: #000; background-color: red";

// Elemento paslėpimas ir rodymas
// Elemento paslėpimas
document.querySelector(".box").style.display = "none";

// Elemento rodymas
document.querySelector(".box").style.display = "block";


// Darbas su klasėmis
let box = document.querySelector(".box");

// Pridėti klasę elementui
box.classList.add("focus");

// Pašalinti klasę nuo elemento
box.classList.remove("focus");

// Perjunginėti šio elemento klasę
box.classList.toggle("focus");

// Kelių klasių pridėjimas ar šalinimas
let box = document.querySelector(".box");

// Dviejų klasių pridėjimas
box.classList.add("focus", "highlighted");

// Dviejų klasių šalinimas
box.classList.remove("focus", "highlighted");

// Vienos klasės pakeitimas kita
// Pašalinti klasę "focus" ir pridėti klasę "blurred"
document.querySelector(".box").classList.replace("focus", "blurred");

// Patikrinti ar elementas turi klasę
if (box.classList.contains("focus")) {
    // Kažką daryti
}
