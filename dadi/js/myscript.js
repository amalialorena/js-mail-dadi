// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che “cosa” ci serve?


//numero generato dall'utente:

var userNum = Math.floor(Math.random() * 6);

console.log("user",userNum);

//numero generato dal computer

var pcNum = Math.floor(Math.random() * 6 + 1);

console.log("pc", pcNum);

if(userNum < pcNum) {
    console.log("hai perso");
} else {
    console.log("hai vinto");
}