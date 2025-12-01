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
