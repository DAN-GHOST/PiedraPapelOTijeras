function getComputerChoice(){
    let num = Math.floor((Math.random() * 3) + 1);
    return num;
}
function traslateSelectionPlayer(playerSelection){
    if(playerSelection ==='piedra'){
        return 1;
    }else if(playerSelection === 'papel'){
        return 2;
    }else if(playerSelection === 'tijera'){
        return 3;
    }
}

function checkingSelectionPlayer(playerSelection){
    let stringMin = playerSelection.toLowerCase();
    if(stringMin ==='piedra'){
        return stringMin;
    }else if(stringMin === 'papel'){
        return stringMin;
    }else if(stringMin === 'tijera'){
        return stringMin;
    }else{
        return null;
    }
}

function checkSelection(){
    let vali = false;
    let date = " ";
    while(vali === false){
        date = prompt("Ingrese por favor su elección Piedra, Papel o Tijera:");
        date = checkingSelectionPlayer(date);
        if(date === "piedra" || date === "papel"|| date === "tijera"){
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
        retrun `No se puede juar, ya que el jugador introdujo mal su elección: ${playerSelection}.`;
    }else{
        if(getNewSelectionPleyer === 1 && computerSelection === 1){
            console.log("Empate: Piedra contra Piedra.");
            return 0;
        }else if (getNewSelectionPleyer === 1 && computerSelection === 2) {
            console.log("La conputadora gana: Papel contra Piedra.");
            return 1;
        }else if(getNewSelectionPleyer === 1 && computerSelection === 3){
            console.log("El jugador gana: Piedra contra Tijera.");
            return 2;
        }else if(getNewSelectionPleyer === 2 && computerSelection === 2){
            console.log("Empate: Papel contra Papel.");
            return 0;
        }else if(getNewSelectionPleyer === 2 && computerSelection === 3){
            console.log("La conputadora gana: Tijera contra Papel.");
            return 1;
        }else if(getNewSelectionPleyer === 3 && computerSelection === 3){
            console.log("Empate: Tijera contra Tijera.");
            return 0;
        }else if(getNewSelectionPleyer === 2 && computerSelection === 1){
            console.log("El jugador gana: Paple contra Piedra.");
            return 2;
        }else if(getNewSelectionPleyer === 3 && computerSelection === 2){
            console.log("El jugador gana: Tijera contra Papel.");
            return 2;
        }else if(getNewSelectionPleyer === 3 && computerSelection === 1){
            console.log("La conputadora gana: Piedra contra Tijera.");
            return 1;
        }
    }
}

function Game(){
    let increase = 0;
    let winsPlayer = 0;
    let winsPC = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = checkSelection();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        increase += 1;
        switch(result){
            case 0:
                tie += 1;
            break;
            case 1:
                winsPC += 1;
            break;
            case 2:
                winsPlayer += 1;
            break;    
        }
    }
    console.log(`La cantidad de emaptes es: ${tie}; La cantidad de victorias de la PC: ${winsPC}; La cantidad de victorias del jugador: ${winsPlayer}.`);
    if(winsPlayer < winsPC){
        console.log("Gana la computadora.");
    }else if (winsPlayer > winsPC){
        console.log("Gana el jugador.");
    }else if(winsPlayer === winsPC){
        console.log("Termina en empate.");
    }
}