console.log("Esto es una api")
// guarda el url
var link = "https://swapi.dev/api/people/";
// aquí estoy obteniendo respuesta y llamado a su JSON
fetch (link)
.then (respuesta => respuesta.json()
// Aqui estoy entrando a los resultados json y filtrándolos por altura
.then(resultado => console.log(resultado.results.filter(e=>e.height < 170))
)
)