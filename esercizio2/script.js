function avviaOttieniContatore() {
    var startTime = sessionStorage.getItem('tempoInizio');

    if (!startTime) {
        startTime = new Date().getTime();
        sessionStorage.setItem('tempoInizio', startTime);
    }

    
    var interval = setInterval(function () {
        var currentTime = new Date().getTime();
        var elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
        sessionStorage.setItem('tempoTrascorso', elapsedSeconds);
        mostraContatore(elapsedSeconds);
    }, 1000);
}


function mostraContatore(seconds) {
    var timerElement = document.getElementById('timer');
    timerElement.textContent = seconds;
}

// Avvia o riprende il contatore al caricamento della pagina
avviaOttieniContatore();