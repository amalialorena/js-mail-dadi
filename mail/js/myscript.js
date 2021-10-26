// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), 
//stampa un messaggio appropriato sull’esito del controllo.
// Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina.


// Chiedi all’utente la sua email,
let userMail = prompt("what's your email adress?");

const emailArr = ["pinco@pallino.com", "pallino@pinco.com", "myname@email.com"];

let answer = document.getElementById("answer");

// controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), 
for(let i = 0; i < emailArr.length; i++) {
    if(userMail === emailArr[i]){
       var right = "L'indirizzo mail è corretto";
       answer.append(right)
    }
}



//Se l'utente non è nella mia lista, stampa "Spiacenti, l'indirizzo mail non corrisponde a nessun utente") nella pagina


// console.log("Spiacenti, l'indirizzo mail non corrisponde a nessun utente");

//stampa un messaggio appropriato sull’esito del controllo.

