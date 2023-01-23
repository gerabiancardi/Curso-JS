// query selector
//# me trae el id con el si aplico espacio me trae los hijos, siempre me trae el primer elemento que encuentre con las condiciones que estoy pidiendo
console.dir(document.querySelector("#contenedor"));

console.dir(document.querySelector("#contenedor li"));

// para traer todos uso

console.dir(document.querySelectorAll("#contenedor li"));


// ahora por clase

console.dir(document.querySelector(".texto strong"));

console.dir(document.querySelectorAll(".heroe"));


// me permite utilizar las seudo clases de css
console.dir(document.querySelector(".radio:checked"));