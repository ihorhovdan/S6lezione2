function salvaNome() {
    let nomeInput = document.getElementById('nameInput').value;
    localStorage.setItem('nomeUtente', nomeInput);
    mostraNomeSalvato();
}

function rimuoviNome() {
    localStorage.removeItem('nomeUtente');
    mostraNomeSalvato();
}

function mostraNomeSalvato() {
    let nomeSalvatoElement = document.getElementById('nomeSalvato');
    let nomeSalvato = localStorage.getItem('nomeUtente');

    if (nomeSalvato) {
        nomeSalvatoElement.textContent = nomeSalvato;
    } else {
        nomeSalvatoElement.textContent = '';
    }
}


mostraNomeSalvato();