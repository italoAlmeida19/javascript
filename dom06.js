console.log("hello 06");

//Captura referências do DOM
const eP = document.querySelector("p");
const eButton = document.querySelector("button");

function mudaTexto() {
    console.log("mudaText chamada!");
    eP.textContent = "Funcionou!";
}

function ouvinteClick(event) {
    console.log("ouvinteClick");
    mudaTexto();
}

eButton.addEventListener("click", ouvinteClick);