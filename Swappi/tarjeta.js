var numero;
var url = "https://swapi.dev/api/people/"
function guardarValor(){
    numero = document.getElementById("num_usuario").value;

}
function buscarPersonaje(){
    var urlCompleto = url + numero + "/"
    console.log(urlCompleto)
    fetch(urlCompleto)
    .then(respuesta => {
        respuesta.json().then(
            resultado => {
                var Persona= {
                    "nombre": resultado.name,
                    "estatura": resultado.height,
                    "masa": resultado.mass,
                    "genero": resultado.gender,
                    "nacimiento": resultado.birth_year 
                }
                console.log(Persona)
                GenerarTarjeta(Persona)
            }
        )

    }
    )
}

function GenerarTarjeta(obj){
   var container= document.getElementById("container");
    innerHTML="";
    var tarjeta =document.createElement("div");
    tarjeta.className ="card"
    
    var nombre = document.createElement("h1");
    nombre.innerHTML = obj.nombre;
    tarjeta.appendChild(nombre)

    var birth_year = document.createElement("h3");
    birth_year.innerHTML ="Nacimiento: "+obj.nacimiento;
    tarjeta.appendChild(birth_year);

    var estatura = document.createElement("h3");
    estatura.innerHTML ="Estatura: "+obj.estatura;
    tarjeta.appendChild(estatura);

    var masa = document.createElement("h3");
    masa.innerHTML ="Masa: "+obj.nacimiento;
    tarjeta.appendChild(masa);

    var gender = document.createElement("h3");
    gender.innerHTML ="Género: "+obj.gender;
    tarjeta.appendChild(gender);


    container.appendChild(tarjeta)
}


