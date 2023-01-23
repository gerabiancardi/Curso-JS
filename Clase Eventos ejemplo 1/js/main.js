//Eventos del Mouse, cuando hago clkick, saco click, mantengo el click, etc
const divRojo = document.getElementById("ejemplos-mouse")

divRojo.addEventListener("mousedown", () => {
    console.log("mousedonw")
});

divRojo.addEventListener("mouseup", () => {
    console.log("mouseup")
});

divRojo.addEventListener("click", () => {
    console.log("click")
});


divRojo.addEventListener("mousemove", () => {
    console.log("mousemove")
});

divRojo.addEventListener("mouseover", () => {
    console.log("mouseover")
});


divRojo.addEventListener("mouseout", () => {
    console.log("mouseout")
});


// EVENTOS DEL TECLADO, se le asocia a elemetnos de html como un input

const inputTeclado = getElementById("ejemplos-teclado");

//manda siempre que la tecla este apretada
inputTeclado.addEventListener("keydonw", () => {
    console.log("Keydonw");
});


//cuando sotlamos la tecla

inputTeclado.addEventListener("keyup", () => {
    console.log("Keyup");
});

//evento change se ejecuta cuando haya un cambio en el input y haga click afuera o en otro input, es decir cuando haya cambio y salga del foco del input
inputTeclado.addEventListener("change", () => {
    console.log("change");
});

// evento input se va a ejecutar cada vez que se modifique el input 
inputTeclado.addEventListener("input", () => {
    console.log("input");
});



// EVENTOS SUBMIT para el formulario se aplica, si lo hago por defecto refresca, por eso tengo que prevenir con esto, aca obtengo los datos del formulario
const formulario = document.getElementById("formulario");
//con esto, aca obtengo los datos del formulario


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
});

// Lista de Eventos    https://www.w3schools.com/jsref/dom_obj_event.asp