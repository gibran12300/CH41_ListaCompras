let btnagregar =document.getElementById("btnagregar");
let btnclear =document.getElementById("btnclear");

let txtnombre =document.getElementById("name");
let txtnumber = document.getElementById("number");

let alertValidaciones =document.getElementById("alertValidaciones");
let alertValidacionesTexto =document.getElementById("alertValidacionesTexto");

function validarcantidad() {
    if(txtnumber.value.length==0){
        return false;
    }//if length
    return true;
}//validarcantidad

btnagregar.addEventListener("click", function( event){
    event.preventDefault();
        alertValidacionesTexto.innerHTML="";
        alertValidaciones.style.display="none";
        txtnombre.style.border="";
        txtnombre.style.border="";
        if (txtnombre.value.length<3){
            alertValidacionesTexto.innerHTML="El  <strong>nombre</strong> no es correcto"
            alertValidaciones.style.display="block";
            txtnombre.style.border="solid red medium";

    }//length
     }
    if (! validarcantidad()) {
        alertValidacionesTexto.innerHTML="El  <strong>nombre</strong> no es correcto"
        alertValidaciones.style.display="block";
        txtnombre.style.border="solid red medium";
    }

});


btnclear.addEventListener("click", function(event){
    event.preventDefault();
});

    txtnombre.value ="";
    txtnumber.value ="";
