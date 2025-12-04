

let calculateButton = document.getElementById('calculate');

// cia nurodoma kas nutiks paspaudus mygtuka "Skaičiuoti"
calculateButton.addEventListener('click', function() {

    // let employeesCount = parseInt(document.getElementById('employees-count').value);
    let employeesCount = document.getElementById('employees-count').valueAsNumber; //kitas budas gauti number reiksme
    let emplyeeMakesPerday = parseInt(document.getElementById('employee-makes-perday').value);
    let orderAmount = parseInt(document.getElementById('order-amount').value);

    let bakeryTotal = employeesCount * emplyeeMakesPerday;
    let isBakeryAbleToFulfillOrder = bakeryTotal >= orderAmount;

    console.log('Bakery can fulfill order:', isBakeryAbleToFulfillOrder);

    // let logInfo ={
    //     bakeryTotal,
    //     isBakeryAbleToFulfillOrder
    // };
    // console.log(logInfo);

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p><strong>Kepykla iškeps per dieną kepalų: </strong></p> ${bakeryTotal}`; //isvalome pries tai buvusi rezultata
    resultsDiv.innerHTML += `<p><strong>Užsakymo kiekis: </strong></p> ${orderAmount}`; //pridedame nauja rezultata

    resultsDiv.innerHTML += `<p><strong>Ar kepykla galės įvykdyti užsakymą? </strong></p> ${isBakeryAbleToFulfillOrder ? 'Taip' : 'Ne'}`; //pridedame nauja rezultata
});


// Validacija - darbuotojų skaicius negali buti neigiamas
document.getElementById('employees-count').addEventListener('input', function(event) {
    let inputValue = event.target.valueAsNumber;
    let errorSpan = document.querySelector('#employees-count + span.error');
 
    if (inputValue < 0) {
        event.target.classList.add('error');

        errorSpan.classList.add('show');
        // event.target.nextElementSibling.classList.add('show'); //kitas budas pasiekti error span
    } else {
        event.target.classList.remove('error');
        errorSpan.classList.remove('show');
    }
});

// Validacija - iskeptu kepalu per diena skaicius negali buti neigiamas
document.getElementById('employee-makes-perday').addEventListener('input', function(event) {
    let inputValue = event.target.valueAsNumber;
 
    if (inputValue < 0) {
        event.target.classList.add('error');

        event.target.nextElementSibling.classList.add('show'); //kitas budas pasiekti error span
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
});

// Validacija - uzsakymu skaicius negali buti neigiamas
document.getElementById('order-amount').addEventListener('input', function(event) {
    let inputValue = event.target.valueAsNumber;
 
    if (inputValue < 0) {
        event.target.classList.add('error');

        event.target.nextElementSibling.classList.add('show'); //kitas budas pasiekti error span
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
});



// Reset mygtuko funkcionalumas
document.getElementById('reset').addEventListener('click', function(){
    console.log('reset clicked');
    document.getElementById('employees-count').value = 0;
    document.getElementById('employee-makes-perday').value = 0;
    document.getElementById('order-amount').value = 0;
    document.getElementById('results').innerHTML = '<p>Kol kas skaičiavimai neatlikti.</p>';
});

// document.getElementById('reset').addEventListener('click', function() {
//     document.getElementById('employees-count').value = 0;
//     document.getElementById('employee-makes-perday').value = 0;
//     document.getElementById('order-amount').value = 0;

//     document.getElementById('results').innerHTML = '';

//     //pasalinti error jei yra
//     let employeesInput = document.getElementById('employees-count');
//     employeesInput.classList.remove('error');
//     let errorSpan = document.querySelector('#employees-count + span.error');
//     errorSpan.classList.remove('show');
// });





//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// kursorius uzvedimas and pavadinimo

// document.getElementById('title').addEventListener('mouseenter', function(event) {
//     event.target.classList.add('highlight');

// });

// document.getElementById('title').addEventListener('mouseleave', function(event) {
//     event.target.classList.remove('highlight');
// });


//     /// hover panda
// let panda = document.getElementById('panda');
// panda.addEventListener('mouseenter', (event) => {
//     console.log('hovered panda');
//     event.panda.classList.remove('.black');
//     event.panda.classList.add('.white');
//     }
// );

//     /// hover bakery
// let bakery = document.getElementById('bakery');
// bakery.addEventListener('mouseenter', () => {
//     panda.classList.add('.black');
//     panda.classList.remove('.white');
//     }
// );