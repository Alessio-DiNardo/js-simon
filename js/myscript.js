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

86400000

// con l'oggetto new date() creo la data attuale e quella che mi serve per vedere quanti millisecondi ho 
// oppure usare math.floor per ogni varriabile per calcolare il valore che mi serve


//? Imposto la distanza tra le due date 

let distance = countDown - now;


//? imposto alle variabili il calcolo dei giorni, ore, minuti e secondi


let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//? INSERISCO LA DATA CHE MI SERVE

let countDown = newDate("may 26, 2023, 09:30:00").getTime();

//? INSERISCO I SECONDI CHE SCORRONO ALL'INDIETRO


let interval = setInterval(function(){

},1000)


//? INSERISCO LA DATA ATTUALE CHE POI MODIFICHERò FINITO IL CODICE

let now = newDate("may 25, 2023, 16:53:00").getTime();