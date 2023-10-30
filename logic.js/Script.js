function getComputerChoice(){
    let num = Math.floor((Math.random() * 3) + 1);
    return num;
}
function traslateSelectionPlayer(playerSelection){
    let stringMin = playerSelection.toLowerCase();
    if(stringMin ==='piedra'){
        return 1;
    }else if(stringMin === 'papel'){
        return 2;
    }else if(stringMin === 'tijera'){
        return 3;
    }else{
        return null;
    }
}

function checkSelection(){
    let vali = false;
    let date = " ";
    while(vali === false){
        date = prompt("Ingrese por favor su elección Piedra, Papel o Tijera:");
        date = traslateSelectionPlayer(date);
        if(date === 1){
            date = "piedra";
            vali = true;
        }else if(date === 2){
            date = "papel";
            vali = true;
        }else if(date === 3){
            date = "tijera";
            vali = true;
        }else{
            window.alert("Ha introdicido mal su selección.\n por favor buelava a intentarlo.");
        }
    }
    return date;
}

function playRound(playerSelection, computerSelection) {
    let getNewSelectionPleyer = traslateSelectionPlayer(playerSelection);
    if(getNewSelectionPleyer === null){
        retrun `No se puede juar, ya que el jugador introdujo mal su elección: ${playerSelection}`;
    }else{
        if(getNewSelectionPleyer === 1 && computerSelection === 1){
            return "Empate: Roca contra Roca.";
        }else if (getNewSelectionPleyer === 1 && computerSelection === 2) {
            return "La conputadora gana: Papel contra Roca.";
        }else if(getNewSelectionPleyer === 1 && computerSelection === 3){
            return "El jugador gana: Roca contra Tijera.";
        }else if(getNewSelectionPleyer === 2 && computerSelection === 2){
            return "Empate: Papel contra Papel.";
        }else if(getNewSelectionPleyer === 2 && computerSelection === 3){
            return "La conputadora gana: Tijera contra Papel.";
        }else if(getNewSelectionPleyer === 3 && computerSelection === 3){
            return "Empate: Tijera contra Tijera.";
        }else if(getNewSelectionPleyer === 2 && computerSelection === 1){
            return "El jugador gana: Paple contra Roca.";
        }else if(getNewSelectionPleyer === 3 && computerSelection === 2){
            return "El jugador gana: Tijera contra Papel.";
        }else if(getNewSelectionPleyer === 3 && computerSelection === 1){
            return "La conputadora gana: Piedra contra Tijera.";
        }
    }

function Game(){
    let increase = 0;
    for (let i = 0; i <5; i++){
        const playerSelection = checkSelection();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        increase += 1;
    }
    // Ahora, tengo que identificar quien gana y contar cuantas veces gana cada quien. Además, hay que tener en cuenta que al final de este proceso se debe mostrar en la consola quien gana. Tambien hay que ver por qué no esta llamanado a la función Game() cuando la llamo desde la consola.
}

}
