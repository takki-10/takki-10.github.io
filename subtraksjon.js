// Globale variabler
let tall1;
let tall2;
let svar ;
const response = document.getElementById("respons") ;
console.log("r:",response)


// Lager en ny oppgave

function nyOppgave() {
    tall1 = Math.floor(Math.random() * 1000) + 1;
    tall2 = Math.floor(Math.random() * 1000) + 1;

    document.getElementById("tall1").textContent = tall1;
    document.getElementById("tall2").textContent = tall2;

    svar = tall1 - tall2;
}

 // console.log("x:", fasit)


// Sjekker svaret

function sjekkSvar() {
    let input = document.getElementById("gjetttall");
    let brukerSvar = Number(input.value);

    input.value = ""; // tøm input-feltet

    if (brukerSvar === svar) {
        // alert("Du svarte riktig!");
        console.log("Bruker skrev:", brukerSvar);
        console.log("Riktig svar er:", svar) ;
        nyOppgave(); // ny oppgave når svaret er riktig
        document.getElementById("melding").innerText = "Du svarte riktig, prøv neste oppgave";
        

            
    } else {
        // alert("Feil, prøv igjen!");
        console.log("Bruker skrev:", brukerSvar) ;
        console.log("Bruker skrev", svar) ;
        document.getElementById("melding").innerText = "Du svarte feil, prøv igjen";

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

function respons(){
    console.log(svar)
    alert(svar)
}
