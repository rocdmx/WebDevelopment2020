var frutas= ["manzana", "pera", "platano", "naranja", "zanahoria"];
console.log("Frutas antes: "+frutas);

for (let index = 0; index < frutas.length; index++) {
    frutas[index]=frutas[index].toUpperCase();
}
    console.log("frutas despues: "+frutas);

    var tablero =
    [[0,0,0],
    [0,0,0],
    [0,0,0]];
    var tableroDeseado =
    [[1,2,3]
    [4,5,6],
    [7,8,9]];

    contador=1;
    for (let fila = 0; fila < tablero.length; fila++) {
        for (let celda = 0; celda < tablero[fila].length; celda++) {
                tablero [fila][celda] = contador;
                contador ++;
                console.log(contador);
            }
    }

    console.log(tablero);

    function bucarCols(f,c) {
        var tableroDeseado =
        [[0,0,0]
        [0,0,0]
        [0,0,0]];


    for (let fila = 0; fila < tablero.length; fila++) {
        for (let columna = 0; columna < tablero[fila].length; celda++) {
            columna ++) {

                if(columna ==c){
                    tablero[fila] [columna] =1;
                }
            }
    }
     return tableroDeseado
}

    console.log(tablero);

    function bucarCols(f,c) {
        var tableroDeseado =
        [[0,0,0]
        [0,0,0]
        [0,0,1]];

        return tableroDeseado
    }
    bucarCols(0,2)
    [[0,0,1]
    [0,0,1]
    [0,0,1]];