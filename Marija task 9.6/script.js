console.log('\n - - - - - _Marija Stonyte_task 9.6 - - - - - ');

// Suskaičiuoti kiek duonos kepalų kepykla sugebės iškepti per dieną, 
// ar spės įgyvendinti visus dienos užsakymus ir suskaičiuoti kiek iš jų uždirbs pelno.

// --- PASTOVŪS DUOMENYS ---
let darbo_valandos = 8; // Darbo valandų per dieną - 8 val.

// --- ĮVESTI DUOMENYS ---
let darbuotoju_kiekis = 5;      // Kiek darbuotojų turi kepykla
let kepalai_pervalanda = 10;    // Kiek darbuotojas iškepa kepalų per valandą
let kepalo_savikaina = 0.8;     // Vieno kepalo savikaina.
let kepalo_kaina = 1;           // Vieno kepalo pardavimo kaina.
let dienos_uzsakymas = 500;     // Kiek kepykla turi tą dieną iškepti kepalų (užsakymai).


// Suskaičiuoti kiek kepykla per vieną darbo dieną spės iškepti duonos kepalų.
let kepalai_perdiena = darbo_valandos * kepalai_pervalanda * darbuotoju_kiekis;
console.log('\n Kepykla per vieną darbo dieną spės iškepti duonos kepalų: ' + kepalai_perdiena);


// Apskaičiuoti visų kepalų savikainą, gautas pajamas pardavus ir iš to gauto pelno dalį.
let dienos_savikaina = kepalai_perdiena * kepalo_savikaina;
console.log('\n Visų kepalų savikainą: ' + dienos_savikaina);


// (Papildomai) Įvertinkite tai, kad pajamas ir pelną galite gauti tik iš parduotų kepalų.
let parduoti_kepalai = Math.min(kepalai_perdiena, dienos_uzsakymas);

let pajamos = parduoti_kepalai * kepalo_kaina;   // pajamos (tik nuo parduotų kepalų)
console.log('\n Gautos pajamos pardavus: ' + pajamos);

let pelnas = pajamos - dienos_savikaina;        // pelnas (pajamos – pagamintos produkcijos savikaina)
console.log('\n Gautas pelnas: ' + pelnas);


// Patikrinti ar kepykla spės iškepti visus tos dienos užsakymus. Jei ne, suskaičiuoti kiek kepalų nespės iškepti.
if(kepalai_perdiena >= dienos_uzsakymas){
    console.log('\n kepykla spės iškepti visus tos dienos užsakymus')
} else if(kepalu_truksta = dienos_uzsakymas - kepalai_perdiena){
    console.log('\n Kepalų nespės iškepti: ' + kepalu_truksta);
}

console.log();


