
// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

// Nota:
// Se non vi sentite particolarmente creativi, questa (allegato) potrebbe essere un’implementazione da seguire per il terzo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra. 🎨 

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
    
    // Output dei valori
    outName.innerHTML = "Nome e Cognome del passeggero:" + " " + userName.value;
    outAge.innerHTML = "Età del passeggero:" + " " + userAge;
    outKm.innerHTML = "Distanza da percorrere:" + " " + userKm + " Km";
    prezzo.innerHTML ="Il prezzo del biglietto è: " + prezzoFinale + "€";

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