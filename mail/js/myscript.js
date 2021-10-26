// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), 
//stampa un messaggio appropriato sull’esito del controllo.
// Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina.


// Chiedi all’utente la sua email,
let userMail = prompt("what's your email adress?");
const emailArr = ["pinco@pallino.com", "pallino@pinco.com", "myname@email.com"];
let answer = document.getElementById("answer");

//Stampa un messaggio appropriato sull’esito del controllo.
//Se l'utente non è nella mia lista, stampa "Spiacenti, l'indirizzo email non corrisponde a nessun utente" nella pagina
// answer.innerHTML = "Spiacenti, l'indirizzo email non corrisponde a nessun utente";

// // controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), 

// for(let i = 0; i < emailArr.length; i++) {
//     if(userMail === emailArr[i]){
//         //Se l'utente è nella mia lista stampa "L'indirizzo email è corretto"
//        var right = "L'indirizzo email è corretto";
//        answer.innerHTML = right;
//     }
// }

// Oppure:

let result = false;

for(let i = 0; i < emailArr.length; i++) {
        if(userMail === emailArr[i]){
            result = true;
        }
    }

if(result == true) {
    console.log( "L'indirizzo email è corretto");
}else{
    console.log( "Spiacenti, l'indirizzo email non corrisponde a nessun utente");
}



