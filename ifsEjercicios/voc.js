var inicial;
var vocales =["a", "e", "i", "o", "u",]

function guardarIncial() {
    inicial = document.getElementById("palabra").value.toLowerCase()[0];
    checarVocal();
}
 
function checarVocal(){
    if (vocales.includes(inicial) == true){
        document.getElementById("resultado").style = "Color:green;"
    }
    else{
    document.getElementById("resultado").style = "Color:purple;"
    }
}