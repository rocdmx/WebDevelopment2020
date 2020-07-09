var name= "Rodrigo";
var age= 27;
var calif= 8.1;
document.getElementById("nuevoID").innerHTML = name;
document.getElementById("parrafo1").innerHTML = "<b>nuevo parrafo</b>";
document.getElementById("parrafo2").innerText = "<b>nuevo parrafo</b>";
document.getElementById("parrafo2").innerHTML = "Nombre: " + age;
document.getElementById("parrafo2").innerHTML = "Edad: " +age;
if (age >= 18) {
    document.getElementById("olderthan18").innerHTML = "Mayor de edad: Sí";
    
} else {
    document.getElementById("olderthan18").innerHTML = "NO ERES MAYOR DE EDAD!";    
}
if (true) {
    
} else {
    
}
if (calif <= 5) {
    document.getElementById("calif").innerHTML = "REPROBADO";
} 
 else if (calif <=6){
     document.getElementById("calif").innerHTML = "REGULAR"  
}
else if (calif <=7){
    document.getElementById("calif").innerHTML = "BIEN"
}  
else if (calif <=8){
    document.getElementById("calif").innerHTML = "MUY BIEN"  
}
else if (calif <=9){
    document.getElementById("calif").innerHTML = "EXCELENTE"  
}
else if (calif <=10){
    document.getElementById("calif").innerHTML = "PERFECTO"
}
else{
    document.getElementById("calif").innerHTML = "EL NUMERO QUE ESCRIBISTE NO SE LE PUEDE ASIGNAR CALIFICACIÓN";

}  