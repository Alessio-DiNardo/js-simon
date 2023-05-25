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


//? Teorie in testa. Creare 4 array per ogni tipo, un array per il giorno che arriva fino ad 01, un array per l'ora che arriva a 24,  minuti e secondi a 60, e questi numeri grazie al setInterval devono decrescere e "resettarsi" ogni volta.

let days = [0,1];
let hours = [00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
let minuts = [00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
let seconds = [00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];