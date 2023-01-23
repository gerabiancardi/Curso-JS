// STORANGE & JSON
 localStorage.setItem("nombreDeLaClave","Valor que almaceno");
// guarda solo string 
 localStorage.setItem("OtrosTiposDeDatos",10);

const valor= localStorage.getItem("OtrosTiposDeDatos");


console.log(parseInt(valor)+ 10)
// para remover
/* localStorage.removeItem("OtroTiposDeDatos") */

//el local storage es un objeto no iterable
// para obetner todas tengo que hacer asi
for(let i =0; i<localStorage.length;i++){
    const clave=console.log(localStorage.key(i));
    localStorage.getItem(clave);
    console.log(localStorage.getItem(clave));
}


// para borrar todo el local estorage hago
// localStorage.clear();

//Session stogare es por pestañana cada vez que abro o cierro funciona igual pero no para la pc sino para una pestaña
// en vez de poner localStorage pongo sessionStorage


const boton =document.getElementById("boton");
boton.addEventListener("click",()=>{
    sessionStorage.setItem("numeroRandon")
})


// JSON es un tipo de nomenclatura que podemos representar objetos como string 

const objetoSringinifacdo= JSON.stringify({
    nombre:"Ariel",
    edad:31

});

console.log(objetoSringinifacdo)

//para volver a convertirlo a objeto uso 
console.log(JSON.parse(objetoSringinifacdo));

