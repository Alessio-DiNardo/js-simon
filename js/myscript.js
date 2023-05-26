//Traccia
//Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
//Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
//Consigli
//Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
//Da quante ore è composto un giorno?
//Da quanti minuti è composta un'ora?
//Da quanti secondi è composto un minuto?
//Da quanti millisecondi è composto un secondo?
//Quanti millisecondi mi separano da domani alle 9:30?
//Esiste un oggetto JS in grado di gestire le date?
//Esistono dei metodi per trasformare una data in millisecondi?//




//Schema, aggiungere GIORNO, ORA , MINUTI , SECONDI            Fino a domani ci sarebbero 64800000 millisecondi   
// domande da fare a riccardo:
// cosa significa window con setTimeout, valore di this 



// function countdown(){
//     console.log("è iniziata la lezione, svegliaaaa");
// }

// let timer = setTimeout(countdown, 60000);

// let interval = setInterval(() => {
//     console.log("Prova");
// }, 1000)



// con l'oggetto new date() creo la data attuale e quella che mi serve per vedere quanti millisecondi ho 
// oppure usare math.floor per ogni varriabile per calcolare il valore che mi serve





function counter(){

    //? INSERISCO LA DATA CHE MI SERVE

    let countDown = new Date("may 26, 2023, 09:30:00").getTime();

    //? INSERISCO LA DATA ATTUALE CHE POI MODIFICHERò FINITO IL CODICE

    let now = new Date().getTime();

    //? Imposto la distanza tra le due date 

    let distance = countDown - now;

    const seconds = 1000;
    const minute = seconds * 60;
    const hours = minute * 60;
    const day = hours * 24;

    const missingDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    updateDigits("p#countdown", missingDays);

    const missingHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    updateDigits("p#countdown", missingHours);

    const missingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    updateDigits("p#countdown", missingMinutes);

    const missingSeconds = Math.floor((distance % (1000 * 60)) / 1000);
    updateDigits("p#countdown", missingSeconds);
}

function updateDigits(querySelectorString, htmlContent){
    const element = document.querySelector(querySelectorString);
    element.innerHTML = htmlContent;
}


