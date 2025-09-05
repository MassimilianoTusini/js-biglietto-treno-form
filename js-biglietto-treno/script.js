// Dichiarazione degli input
const button = document.getElementById ("genera");
const secondButton = document.getElementById ("annulla")
const myForm = document.getElementById ("form-ticket");
const userName = document.getElementById ("name");
// Dichiarazione output
const outName = document.querySelector (".user-name");
const outAge = document.querySelector (".user-age");
const outKm = document.querySelector (".user-km");
const prezzo = document.querySelector (".result");
const wagon = document.querySelector (".wagon");
const cpCode = document.querySelector(".cp-code");

// Blocco il refresh della pagina e prendo i valori degli input a click
myForm.addEventListener("submit", (event) => {event.preventDefault();
    
    // valori input
    const userKm = parseInt(document.getElementById ("km").value); 
    const userAge = parseInt(document.getElementById ("eta").value);
    // Controllo sia un numero
    if (isNaN(userKm) || isNaN(userAge)){
        alert("Inserisci dei valori numerici");
        return;
    }

    // Richiamo la funzione del prezzo scontato
    let prezzoFinale = finalPrice(userKm, userAge);
    
    // Generazione numeri causali
    const numWagon = Math.floor(Math.random() * 6) + 1;
    const numCpCode = Math.floor(Math.random() * 99999) + 10000;

    // Output dei valori
    outName.textContent = "Nome e Cognome del passeggero:" + " " + userName.value;
    outAge.textContent = "Età del passeggero:" + " " + userAge;
    outKm.textContent = "Distanza da percorrere:" + " " + userKm + " Km";
    if (userAge < 18){
        prezzo.textContent =`Il prezzo del biglietto è: ${prezzoFinale}€ (applicato sconto del 20%) `;
    } else if (userAge > 65){
        prezzo.textContent =`Il prezzo del biglietto è: ${prezzoFinale}€ (applicato sconto del 40%)`;
    } else {
        prezzo.textContent =`Il prezzo del biglietto è: ${prezzoFinale}€`;
    }
    wagon.textContent = `Carrozza: ${numWagon}`;
    cpCode.textContent = `Codice CP: ${numCpCode}`;
    

    // Pulsante per il reset
    secondButton.addEventListener("click", () => {
    myForm.reset()});

    // Console log dei valori finiti
    console.log("KM inseriti", userKm);
    console.log("Età inserita", userAge);
    console.log ("Prezzo finale", prezzoFinale, "€");
})

// Funzione prezzo del biglietto
function finalPrice(km, eta){
    // Prezzo normale del biglietto
    let price = (km * 0.21);
    // Prezzi scontati
    if (eta < 18) {
        price *= 0.80;
    } else if (eta > 65) {
        price *= 0.60;
    }
    return price.toFixed(2);
}