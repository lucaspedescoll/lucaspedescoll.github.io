
//definicion de variables globales//



// Eventos para mostra u ocultar elementos//
function ta() {
    document.getElementById("minombre").innerHTML = "LUCASAAAA";
}


document.getElementById("Infopersonal").onclick = function () {
    mostrar_infopersona();
}

document.getElementById("Experiencia").onclick = function () {
    mostrar_exp();
}


document.getElementById("Educacion").onclick = function () {
    mostrar_edu();
}

document.getElementById("Hobbies").onclick = function () {
    mostrar_hobbies();
}

document.getElementById("myBtn").onclick=function(){

    funcionirarriba()

}

//evento generico que se repite en todas las funciones 
function eventomostrar(x) {
    if (x.style.display ="none") {
        x.style.display ="block";
    }
   // else {
     //       x.style.display ="none";
        
    //}
}



function mostrar_infopersona() {
    var x = document.getElementById("Info");
    eventomostrar(x);

}

function mostrar_edu() {
    var x = document.getElementById("Edu");
    eventomostrar(x)
}

function mostrar_exp() {
    var x = document.getElementById("Exp");
    eventomostrar(x);
}


function mostrar_hobbies() {
    var x = document.getElementById("Hob")
    eventomostrar(x)
}




// Obtener el boton
let mybutton = document.getElementById("myBtn");

// cuando se scrollea mas de 20 px se muestra el boton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Cuando se hace click en el boton se scrollea hacia arriba del documento
function funcionirarriba() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
