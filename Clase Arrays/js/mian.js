// un arrays es una lista de cosas que querramos guardar, cada elemento tiene una lista se crean entre [], arranca de n0 a n....
/* const miPrimerArray = [];

const unArrayConValores = [1, "Hola", {nombre:"Ariel"}, true];

console.log(unArrayConValores);

console.log(unArrayConValores[0]);
console.log(unArrayConValores[2]); */

//muchas veces quiero recorrer una lista completa
/* const avengers = ["Iron Man", "Capitan America", "Thor", "Hulk"];

for (let i=0; i <avengers.length; i++) {
    console.log(avengers[i]);
} */

// metodos y propiedades de los arrays
/* const avengers = ["Iron Man", "Capitan America", "Thor", "Hulk"]; */

/* console.log(avengers.length); */

// agregar nuevos elementos

//agregar un elemento al final del array
/* avengers.push("Black Widow");
console.log(avengers);
 */
//agregar un elemento al principio del array
/*  *//* avengers.unshift("Hawekeye");
console.log(avengers);
 */

//REMOVER ELEMENTOS DEL ARRAY
//PARA REMOVER EL ELEMENTO DEL FINAL Y RETORNARLO
/* const elementoEliminadoConPop =avengers.pop();
console.log(elementoEliminadoConPop);
console.log(avengers); */

//para remover el primer elemento tambien me retorna si pongo una constante para verlo me lo retorna al igual que el pop 
/* avengers.shift(); */

// para remover una pocion del array uso, pongo desde donde hasta donde inlcuyo

/* avengers.splice(0,1); */


// otros temas de arrays

/* const avengers = ["Iron Man", "Capitan America", "Thor", "Hulk"]; */

// sirve para concatenar pero solo para strim, junta los elementos y separa por el caracter que le pongo entre ("") y devuelve un strim
/* console.log(avengers.join(","));
 */


//CONCATENAR ARRAYS ME SIRVE PARA UNIR 2 Y CREAR UNO NUEVO
/* const NuevosAvengers=["Doctor Strange", "Spiderman"];

const nuevoArray = avengers.concat(NuevosAvengers); */

// slice es un metodo que nos permite tomar una rebanada de ese array
/* 
console.log(avengers.slice(0,2)); // no es destructivo no modifica al original, 0 trae el 2 no incluye 
 */

// que pasa si quiero saber el indice de algun elemento sabiendo el contenido
/* 
avengers.indexOf("Thor"); */


// para saber si el array incluye algo devuelve un boleano 
/* 
avengers.includes("Hulk");
 */

// para invertir el contenido del array, pero es destructivo, modifica el array original
/* avengers.reverse(); */


//EJEMPLO DE LISTA DE SUPERMERCADO
/* 
let producto;

const listaProductos =[];

do {
    producto = prompt("Ingrese un producto para la lista, para finalizar infrese Fin")
    if(producto!=="FIN"){
    listaProductos.push(producto);}
} while(producto !== "Fin");

alert("La lista tiene " + listaProductos.length + " productos");
alert("La lista contiene : \n" + listaProductos.join("\n"));

 */


// para recorrer un array 
/* const avengers = ["Iron Man", "Capitan America", "Thor", "Hulk"]

for(const avenger of avengers){
    console.log(avenger);
}
 */


// EJEMPLO DE UN CARRITO DE COMPRAS SIMPLE

/* class Producto {
    constructor (entrada) {
        this.precio = parseFloat(entrada.precio);
        this.cantidad= parseInt(entrada.cantidad);
    }

    calcularPrecioConIva(){
        return this.cantidad *  this.precio * 1.21;
    }
}


let precio;
let cantidad;
const carritoDeCompras = [];


do{
    precio = prompt("Ingrese el precio del producto, para finalizar ingrese Fin");
    if (precio !=="Fin"){
        cantidad = prompt("Ingrese la cantidad");
        const producto = new Producto({precio: precio,  cantidad: cantidad});
        carritoDeCompras.push(producto);
    }
}while(precio !=="Fin");


let total =0;
for(const producto of carritoDeCompras){
    total = total + producto.calcularPrecioConIva();
}

alert("El total del carrito es: " + total) */