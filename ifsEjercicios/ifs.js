var booleano;
function changeValue() {
    booleano= !booleano;
    if (booleano == true) {
        document.getElementById("resultado").innerText= "Booleano es verdadero"
    }
    else {
        document.getElementById("resultado").innerText= "Booleano es falso"
    }
}