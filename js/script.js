// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const km= parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"))
const età= parseInt(prompt("Adesso inserisci l'età del passeggero:"))
// console.log(km, età);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let prezzoIniziale= km * 0.21;
let sconto= 0;

// va applicato uno sconto del 20% per i minorenni
if (età < 18){
    sconto = 0.20;
} 
// va applicato uno sconto del 40% per gli over 65.
else if (età > 65) {
    sconto = 0.40;
} 
let prezzoFinale = prezzoIniziale * (1 - sconto);
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Output partite da semplice log, e poi se volete stampate in pagina come sapete fare.

// TIP:
// per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

// 100km, 10 anni => prezzo corretto:  €16.80
// 100km, 70 anni => prezzo corretto: €12.60





// gioco pari o dispari
// l'utente scegli un numero (1-5) e se secondo il risultato sarà pari/dispari
//  il PC lancia il suo numero (1-5)
//  se il totale è pari vince chi ha scelto pari, altrimenti il contrario

// SETUP 
let segnoSomma = "dispari", messaggio;

// INPUT
// chiedo a User numero (1-5)
const numUser = parseInt(prompt("Scegli un numero da 1 a 5"));
// chiedo a User la sua puntata (pari/dispari)
const puntataUser = prompt("Scrivi una puntata (pari/dispari)");

// check su input utente (pari/dispari)

// check se valore e diverso da pari o dispari
// se valore corretto (continua il gioco)
if (puntataUser === "pari" || puntataUser === "dispari") {

    // faccio generare da PC il suo numero (1-5)
    const numPC = Math.floor(Math.random() * 5) + 1;
    console.log(numUser, puntataUser, numPC);

    // ELABORAZIONE
    // sommiamo i numeri di User e PC
    const sommaNumber = numUser + numPC;
    console.log(sommaNumber);

    // verifichiamo se somma è pari/dispari
    if (sommaNumber % 2 === 0) {
        segnoSomma = "pari";
    }
    // else {
    //     segnoSomma = "dispari";
    // }
    console.log(segnoSomma);


    // confrontiamo segnoSomma con puntata User (se puntata corrisponde a segnoSomma vince utente)
    if (segnoSomma === puntataUser) {
        // ha vinto user
        messaggio = "Hai vinto!!!!";
    } else {
        // ha vinto PC
        messaggio = "Hai perso!!!";
    }

    // OUTPUT
    console.log(messaggio);

} else {
    // altrimenti alert con errore
    alert("devi scegliere tra pari o dispari");

} 
