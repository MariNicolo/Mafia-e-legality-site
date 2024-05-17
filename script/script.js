async function quiz1(catDomanda) {
    try {
        const url = "https://marinicolo.pythonanywhere.com/api/questions/"
        const response = await fetch(url + catDomanda);
        const domande = await response.json();
        
        const containerQuiz = document.getElementById("containerQuiz");
        containerQuiz.innerHTML = "";

        let numDomande = Object.keys(domande).length;
        let domandeRimaste = Object.keys(domande).length;
        let punteggio = 0;
        
        for (const domanda in domande) {
            const domandaDiv = document.createElement("div");
            
            const testoDomanda = document.createElement("h4");
            testoDomanda.textContent = domanda;
            domandaDiv.appendChild(testoDomanda);
            
            const rispostaVeraButton = document.createElement("button");
            rispostaVeraButton.textContent = "Vero";
            rispostaVeraButton.setAttribute("type", "button");
            rispostaVeraButton.classList.add("btn");
            rispostaVeraButton.classList.add("btn-success");
            rispostaVeraButton.classList.add("tremble-button");
            rispostaVeraButton.onclick = function() {
                if (domande[domanda] === true) {
                    testoDomanda.style.color = "green";
                    punteggio++;
                } else {
                    testoDomanda.style.color = "red";
                }
                rispostaVeraButton.disabled = true;
                rispostaFalsaButton.disabled = true;
                domandeRimaste--;
                if (domandeRimaste == 0) {
                    const punteggioFinale = document.createElement("h4");
                    punteggioFinale.textContent = "Punteggio finale: " + punteggio + "/" + numDomande;
                    containerQuiz.appendChild(punteggioFinale);
                } 
            };
            domandaDiv.appendChild(rispostaVeraButton);

            const spazio = document.createElement("span");
            spazio.textContent = " ";
            domandaDiv.appendChild(spazio);
            
            const rispostaFalsaButton = document.createElement("button");
            rispostaFalsaButton.textContent = "Falso";
            rispostaFalsaButton.classList.add("btn");
            rispostaFalsaButton.classList.add("btn-danger");
            rispostaFalsaButton.classList.add("tremble-button");
            rispostaFalsaButton.onclick = function() {
                if (domande[domanda] === false) {
                    testoDomanda.style.color = "green";
                    punteggio++;
                } else {
                    testoDomanda.style.color = "red";
                }
                rispostaVeraButton.disabled = true;
                rispostaFalsaButton.disabled = true;
                domandeRimaste--;
                if (domandeRimaste == 0) {
                    const punteggioFinale = document.createElement("h4");
                    punteggioFinale.textContent = "Punteggio finale: " + punteggio + "/" + numDomande;
                    containerQuiz.appendChild(punteggioFinale);
                } 
            };
            domandaDiv.appendChild(rispostaFalsaButton);
            
            containerQuiz.appendChild(domandaDiv);
        }
    } catch (error) {
        console.error('Si è verificato un errore durante il recupero dei dati:', error);
    }
}
