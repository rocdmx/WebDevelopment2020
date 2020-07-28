var num;
function leerNum(){
    num = document.getElementById("numero").value *1;
    cambiarEstilo();
    function cambiarEstilo(){
        if(num >=0){

        document.getElementById("resultado").style = "Color:blue;"
        }
        else{
            document.getElementById("resultado").style = "Color:red;"  
        }
    }
}