//Captura referências do DOM
    //Busca referências para todos os elementos
    const eSpans = document.querySelectorAll("span");
    const eA = eSpans[0];
    const eB = eSpans[1];
    const eS = eSpans[2];

    const eButtons = document.querySelectorAll("button");
    const eButtonSoma = eButtons[0];
    const eButtonMultiplica = eButtons[1];

    eButtonSoma.addEventListener("click", somaListener);
    eButtonMultiplica.addEventListener("click", multiplicaListener);

    function somaListener(event) {
        console.log("soma Listener!");
        soma();
    }

    function multiplicaListener(event) {
        console.log("multiplica Listener!");
        multiplica();
    }

    //Opera os dados
    function soma() {     
        const A = Number(eA.textContent);
        const B = Number(eB.textContent);
        const S = A+B;
        eS.textContent = S;
    }

    function multiplica() {     
        const A = Number(eA.textContent);
        const B = Number(eB.textContent);
        const S = A*B;
        eS.textContent = S;
    }
    //Escreve na saída
    
    