function getComputerChoice(){//Crear un número aleatorio de 1 al 3.
    let num = Math.floor((Math.random() * 3) + 1);
    return num;
}

function traslateSelectionPlayer(playerSelection){//Combierte la elección del usuario a un número entero de 0 a 3.
    if(playerSelection ==='piedra'){
        return 1;
    }else if(playerSelection === 'papel'){
        return 2;
    }else if(playerSelection === 'tijera'){
        return 3;
    }
}

function playRound(playerSelection, computerSelection) {// Determina quien gana una ronda.
    let getNewSelectionPleyer = traslateSelectionPlayer(playerSelection); //Comvierte la seleción del usuario a número entero
    if(getNewSelectionPleyer === 1 && computerSelection === 1){
        //Empate: Piedra contra Piedra.
        return 0;
    }else if (getNewSelectionPleyer === 1 && computerSelection === 2) {
        // La conputadora gana: Papel contra Piedra.
        return 1;
    }else if(getNewSelectionPleyer === 1 && computerSelection === 3){
        // El jugador gana: Piedra contra Tijera.
        return 2;
    }else if(getNewSelectionPleyer === 2 && computerSelection === 2){
        //Empate: Papel contra Papel.
        return 0;
    }else if(getNewSelectionPleyer === 2 && computerSelection === 3){
        //La conputadora gana: Tijera contra Papel.
        return 1;
    }else if(getNewSelectionPleyer === 3 && computerSelection === 3){
        // Empate: Tijera contra Tijera.
        return 0;
    }else if(getNewSelectionPleyer === 2 && computerSelection === 1){
        // El jugador gana: Paple contra Piedra.
        return 2;
    }else if(getNewSelectionPleyer === 3 && computerSelection === 2){
        //El jugador gana: Tijera contra Papel.
        return 2;
    }else if(getNewSelectionPleyer === 3 && computerSelection === 1){
        // La conputadora gana: Piedra contra Tijera.
        return 1;
    }
}

function Game(seleccionJugador){
    let increase = 1;
    let winsPlayer = 0;
    let winsPC = 0;
    let tie = 0;
    const playerSelection = seleccionJugador;
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);// Realzia las comparaciones de la selección del jugador y la pc y retorna un resultado.
    switch(result){
        case 0: // Empate
            tie = 1;
        break;
        case 1:// victorias jugar
            winsPC = 1;
        break;
        case 2:// victorias PC
            winsPlayer = 1;
        break;    
    }
    return [increase,tie,winsPC,winsPlayer];
}

function seveResults(array){
    let Ronda = array[0],
    tie = array[1],
    winsPC = array[2],
    winsPlayer = array[3];

    let txtRondas = document.querySelector('.txtRondas'),
    txtEmpate = document.querySelector('.txtEmpate'),
    txtJugador = document.querySelector('.txtJugador'),
    txtPC = document.querySelector('.txtPC');
    
    /*
    Hasta el momento la parte de abajo no esta funcinando. La intención del
    código es tomar la información persistida en el html y comvertirla de string
    a int para realizar un incremento e ir contando las rondas jugadas y victorias.
    */
/*
    if(txtRondas.textContent === " "){
        txtRondas.textContent = Ronda.toString();
        txtEmpate.textContent = tie.toString();
        txtJugador.textContent = winsPlayer.toString();
        txtPC.textContent = winsPC.toString();
    }else if(Integer.parseInt(txtRondas.textContent) <= 5){
        cantidadRondas = Integer.parseInt(txtRondas.textContent) + Ronda;
        cantidadEmpates = Integer.parseInt(txtEmpate.textContent) + tie;
        cantidadVictoriasJuador = Integer.parseInt(txtJugador.textContent) + winsPlayer;
        cantidadVictoriasPC = Integer.parseInt(txtPC.textContent) + winsPC;
        txtRondas.textContent = cantidadRondas.toString();
        txtEmpate.textContent = cantidadEmpates.toString();
        txtJugador.textContent = cantidadVictoriasJuador.toString();
        txtPC.textContent = cantidadVictoriasPC.toString();
    }else if(Integer.parseInt(txtRondas.textContent) === 5){
        if(cantidadVictoriasJuador < cantidadVictoriasPC){
            console.log("Gana la computadora.");
        }else if (cantidadVictoriasJuador > cantidadVictoriasPC){
            console.log("Gana el jugador.");
        }else if(cantidadVictoriasJuador === cantidadVictoriasPC){
            console.log("Termina en empate.");
        }
    }else{
        console.log("Juego a terminado. Si queiere volver a jugar por favor seleccione el boton volver a jugar o backGame");
    }
    */
}

let btnSeleccionPiedra = document.querySelector('.btnPiedra');
btnSeleccionPiedra.addEventListener('click', ()=>{
    let getValue = btnSeleccionPiedra.value;
    let arrayResults = Game(getValue);
    seveResults(arrayResults);
});

let btnSeleccionPapel = document.querySelector('.btnPapel');
btnSeleccionPapel.addEventListener('click', ()=>{
    let getValue = btnSeleccionPapel.value;
    let arrayResults = Game(getValue);
    seveResults(arrayResults);
});

let btnSelecionTijera = document.querySelector('.btnTijera');
btnSelecionTijera.addEventListener('click', ()=>{
    let getValue = btnSelecionTijera.value;
    let arrayResults = Game(getValue);
    seveResults(arrayResults);
});
