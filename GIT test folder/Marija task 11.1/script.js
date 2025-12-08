

let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function() {

    // let employeesCount = parseInt(document.getElementById('employees-count').value);
    let employeesCount = document.getElementById('employees-count').valueAsNumber; //kitas budas gauti number reiksme
    let employeeMakesPerday = parseInt(document.getElementById('employee-makes-perday').value);
    let orderAmount = parseInt(document.getElementById('order-amount').value);


    let bakeryTotal = employeesCount * employeeMakesPerday;
    let isBakeryAbleToFulfillOrder = bakeryTotal >= orderAmount;   

    // extra calculations
    let daysNeeded = orderAmount / bakeryTotal;
    let daysNeededRounded = Math.round(daysNeeded);
    let requiredWorkers = Math.ceil(orderAmount / employeeMakesPerday);

    let hoursPerDay = 8;
    // Production per worker per hour
    let perHourProduction = employeeMakesPerday / hoursPerDay;

    // Total bakery production per hour
    let totalHourlyProduction = employeesCount * perHourProduction;
    let requiredHours = Math.ceil(orderAmount / totalHourlyProduction);

    // let logInfo ={
    //     bakeryTotal,
    //     isBakeryAbleToFulfillOrder
    // };
    // console.log(logInfo);

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p><strong>Kepykla iškeps per dieną kepalų: </strong></p> ${bakeryTotal}`;

    resultsDiv.innerHTML += `<p><strong>Užsakymo dydis: </strong></p> ${orderAmount}`;

    resultsDiv.innerHTML += `<p><strong>Ar kepykla galės įvykdyti užsakymą? </strong></p> ${isBakeryAbleToFulfillOrder ? 'Taip' : 'Ne'}`;
// extra
    resultsDiv.innerHTML += `<p><strong>Kiek dienų reikės užsakymui iškepti: </strong></p> ${daysNeededRounded}`;

    resultsDiv.innerHTML += `<p><strong>Reikalingas pandų skaičius užsakymui įvykdyti per dieną: </strong></p> ${requiredWorkers}`;

    resultsDiv.innerHTML += `<p><strong>Reikalingas valandų kiekis užsakymui įvykdyti per dieną su turimomis pandomis: </strong></p> ${requiredHours}`;
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

        event.target.nextElementSibling.classList.add('show');
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
