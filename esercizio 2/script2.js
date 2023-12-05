let intervalID;
let tempoTrascorso = 0;

function avviaContatore() {
    // Controlla se il contatore è già in esecuzione
    if (!intervalID) {
        intervalID = setInterval(function () {
            tempoTrascorso++;
            sessionStorage.setItem('tempoTrascorso', tempoTrascorso);
            aggiornaContatore();
        }, 1000);
    }
}

function fermaContatore() {
    // Ferma il contatore
    clearInterval(intervalID);
    intervalID = null;
}

function aggiornaContatore() {
    // Aggiorna il valore del contatore nella pagina
    document.getElementById('counter').textContent = 'Tempo trascorso: ' + tempoTrascorso + ' secondi';
}


avviaContatore()
// Mostra il valore salvato all'avvio della pagina
tempoTrascorso = parseInt(sessionStorage.getItem('tempoTrascorso')) || 0;
aggiornaContatore();