var inputC=0;
var inputF=0;

function guardarInputC(){
    inputC= document.getElementById("Celsius").value;
    console.log(inputC);
}
function guardarInputF(){
    inputC= document.getElementById("Fahrenheit").value;
    console.log(inputF);
}
function CaF (){
document.getElementById("Fahrenheit").value=inputC*(9/5)+32
}
function FaC (){
document.getElementById("celsius").value = (inputF - 32) * 5/9
}
