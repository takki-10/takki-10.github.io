// Globale variabler
let tall1;
let tall2;
let svar;
const response = document.getElementById("respons");
let data1 = 0;
let data2 = 0;

// Lager en ny oppgave
function nyOppgave() {
    tall1 = Math.floor(Math.random() * 1000) + 1;
    tall2 = Math.floor(Math.random() * 1000) + 1;

    document.getElementById("tall1").textContent = tall1;
    document.getElementById("tall2").textContent = tall2;

    svar = tall1 + tall2;
}

// Sjekker svaret
function sjekkSvar() {
    let input = document.getElementById("gjetttall");

    if (input.value === "") {
        document.getElementById("melding").innerText = "Vær så snill å skriv et tall";
        return;
    }

    let brukerSvar = Number(input.value);
    input.value = "";

    if (brukerSvar === svar) {
        console.log("Bruker skrev:", brukerSvar);
        console.log("Riktig svar er:", svar);
        nyOppgave();
        document.getElementById("melding").innerText = "Du svarte riktig, prøv neste oppgave";
        data1 = data1 + 1;
        console.log("du har", data1, "riktige");
        document.getElementById("data1").textContent = data1;
    } else {
        console.log("Bruker skrev:", brukerSvar);
        console.log("Bruker skrev", svar);
        document.getElementById("melding").innerText = "Du svarte feil, prøv igjen";
        data2 = data2 + 1;
        console.log("du har", data2, "feil");
        document.getElementById("data2").textContent = data2;
    }
}

// Enter-tast sender inn svaret
document.getElementById("gjetttall").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sjekkSvar();
    }
});

// Start første oppgave
nyOppgave();

function respons() {
    console.log(svar);
    alert(svar);
}
