var currentPlayer= "jugador1"
var tablero = [[0,0,0],
            [0,0,0],
            [0,0,0]];

function Play(celda){

    if ("jugador1" ==currentPlayer){
        document.getElementById(celda).className += "j1";
        currentPlayer = "jugador2";
    }else{
        currentPlayer="jugador1";}
        document.getElementById("jugador").innerText = "Jugador Actual: "+currentPlayer;
    }



    function leerCelda (palabra) {
        var fia = palabra[0] * 
        var columna = palabra[1] *1;
        if (tablero [fila] [columna] === 0);
        tablero [fila] [columna] = currentPlayer[7] *1;
        document.getElementById("error").innerText = ""
        return true

    } else {
        document.getElementById("error").innerText = "ESTA CELDA YA ESTÁ OCUPADA";
        return false
    }