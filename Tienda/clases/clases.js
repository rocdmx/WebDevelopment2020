class Tenis{
    constructor(modelo, marca, precio,categoria, depto){
    this.model = modelo
    this.brand = marca
    this.price = precio
    this.category = categoria
    this.dept = depto
}
}

productos= []

var p1 = new Tenis (RS-XMLDocument, "Puma", 700, "unisex", "deportivo")
var p2 = new Tenis ("Nimbus", "Asics", 250, "unisex", "casual")
productos.push (p1)
productos.push (p2)

function AgregarProducto (modelo, marca, precio, categoria, depto)
{
    var e = new Tenis (modelo, marca, precio, categoria, depto)
    productos.push (e)

}

class.Tenis{
    constructor (modelo, marca, precio, categoria, depto){
        this.model =modelo
        this.brand =marca
        this.price = precio
        this.category = categoria
        this.dept = depto
    }
}

var productos = [ ]
function AgregarProducto(modelo, marca, precio, categoria, depto){
    var e = new Tenis (modelo, marca, precio, categoria, depto)
    productos.push(e)
    productos.forEach(p => CrearTarjeta(0,0,productos,lenght))

}

function GenerarInventario(n) {
    var lista = []
    for (let index = 0; index < n; index ++) {
        lista [index] = Math.floor (Math.random() *100)
    }
    return lista
}