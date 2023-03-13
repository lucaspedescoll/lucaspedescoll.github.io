
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

function eventomostrar(x) {
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none"
    }
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