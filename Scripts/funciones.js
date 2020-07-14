var esAzul = true;
var clicks=0;
var trigl =5;
function cambiarColor(){
    if (esAzul ==true) {
    document.getElementById("título").style= "color:blue"
} else {
    document.getElementById("título").style= "color:red"
}

esAzul = !esAzul;
}

function aumentarClicks(multlipicador){
    clicks +=multlipicador;
    document.getElementById("clicks").innerText ="Número de clicks dados al botón: " + clicks;
}

function areaTriangulo(base, altura){
    document.getElementById("trigl").innerText = "El área del tirángulo es:  " +trigl;

    return base*altura / 2

areaTriangulo(3,4)
}