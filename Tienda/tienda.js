var producto1 = {
    "marca": "adidas",
    "modelo": "Superstar",
    "tallas": [4,5,6,7,8],
    "precios": [300,320,350,380,400],
    "inventario": [23,66,44,56,79],
    "departamento": "Hombres",
    "categoría": "casual",
}

var producto2 = {
    "marca": "Nike",
    "modelo": "Jordan",
    "tallas": [4,5,6,7,8],
    "precios": [600,640,700,760,800],
    "inventario": [9,15,13,36,66]
    "departamento": "Hombres",
    "categoría": "deportivo",
}

var producto3 = {
    "marca": "Asics",
    "modelo": "Nimbus",
    "tallas": [4,5,6,7,8],
    "precios": [200,220,250,270,300],
    "inventario": [43,12,46,57, 95],
    "departamento": "Hombres",
    "categoría": "deportivo",
}

var producto4 = {
    "marca": "Puma",
    "modelo": "RS-X",
    "tallas": [4,5,6,7,8],
    "precios": [600, 640, 700,760,800],
    "inventario": [48,62,1,46,35],
    "departamento": "Mujeres",
    "categoría": "correr",
}

var producto5 = {
    "marca": "UnderArmor",
    "modelo": "Charged Assert",
    "tallas": [4,5,6,7,8],
    "precios": [300,320,350,380,400],
    "inventario": [14,5,15,98,11],
    "departamento": "Mujeres",
    "categoría": "correr",
}
var productos = [producto1, producto2, producto3, producto4, producto5]

var unisex = productos.filter (tenis => tenis.departamento == "Unisex")

var deportivo = productos.filter(tenis => tenis.categoría == "deportivo")

console.log (unisex)
console.log(deportivo)

productos.forEach(
    p => (console.log("Nombre del producto: " + p.modelo))
)
function GenerarInventario (n) {
    var lista = []
    for (let index = 0; index < n; index++){
        lista [index] = Math.floor (Math.random() *100)
    }
    return lista
}

function CrearTarjeta (modelo, marca, precio, depto, categoría) {
    card = document.createElement("div"
    card.setAttribute("class", "product-card"))

    m = document.createElement ("p")
    m.innerText =modelo
    m.setAttribute("class", "modelo")
    card.appendChild(card)
}