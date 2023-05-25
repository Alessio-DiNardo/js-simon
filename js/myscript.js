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




setTimeout(console.log, 5000, "ciao")




//Schema, aggiungere GIORNO, ORA , MINUTI , SECONDI            Fino a domani ci sarebbero 64800000 millisecondi   
// domande da fare a riccardo:
// cosa significa window con setTimeout, valore di this 



function countdown(){
    console.log("è iniziata la lezione, svegliaaaa");
}

let timer = setTimeout(countdown, 60000);

let interval = setInterval(() => {
    console.log("Prova");
}, 1000)