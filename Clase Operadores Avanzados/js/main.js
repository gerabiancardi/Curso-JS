//formas analogas, escribir cosas mas simplificadas
//sugar sintac
let contador = 0;

contador = contador + 1;
contador += 1;
contador++;

//Operador ternario, se usa en cosas chicas, retorna algo implicito 

const valor = 1000;

if (valor > 100) {
  console.log("Es mayor a 100")
} else {
  console.log("no es mayor a 100")
}


const resultado = valor > 100 ? "Es mayor a 100" : "no es mayor a 100";

console.log(resultado);


// Operador &&
//aparece hola como estas por que se cumple la primera condicion, es decir efectua la segunda condicion si lo primero es verdadero
valor > 100 && console.log("Hola como estas");

// sino tambien puedo hacer 

const resultado2 = valor > 100 && "Hola como estas";

console.log(resultado2);


// Operador ||

const valor1 = " "; //valor falso le asigno

const valor2 = valor1 || [];

console.log(valor2); // tengo un strin vacio por que el primer valor es falso sino tendria el primer valor.


// Nullish coalescing ?? lo que hace es se comporta como el or pero considera falso al null o al undefined, al 0 lo considera verdadero 
// ??

console.log(null ?? "Hola 1")
console.log(undefined ?? "Hola 2")
console.log(0 ?? "Hola 3")

// Acceso condicional a un objeto
const avenger1 = {
  alias: 'Iron Man',
  nombre: 'Tony Stark',
  edad: 40,
  direccion: {
    calle: 'Calle falsa',
    numero: 123,
  }
};
const avenger2 = {
  alias: 'Thor',
  nombre: 'Thor',
  edad: 100000
};

console.log(avenger2.direccion.calle); // esto tira un error por que el avenger 2 no tiene direccion 

console.log(avenger1.direccion && avenger1.direccion.calle);
console.log(avenger2.direccion && avenger2.direccion.calle);

// para hacer mas corto y que no se rompa hago

console.log(avenger2?.direccion.calle);
console.log(avenger1?.direccion?.provincia?.codigo);

// Destructuring (objetos) permite crear una const con el valor de un atrivuto del objeto

const avenger = {
  numeroDeCredencial: 2,
  alias: 'Iron Man',
  nombre: 'Tony Stark',
  edad: 40,
  direccion: {
    calle: 'Calle falsa',
    numero: 123,
  }
};


/* const nombre=avenger.alias; */

/* const {nombre}=avenger;

console.log(nombre); */


// para mas 
const {
  numeroDeCredencial:id,
  nombre,
  edad,
  direccion: { calle },
} = avenger;

console.log(nombre);


// Destructuring de parametros 

/* const obtenerNombreDeAvenger=(avenger)=>avenger.nombre;

console.log(obtenerNombreDeAvenger(avenger));
 */

// me permite decir lo que quiero
const obtenerNombreDeAvenger=({nombre, alias})=>"${nombre} es ${alias}";

console.log(obtenerNombreDeAvenger(avenger));


//Destructuring de arrays

const nombresAvengers = ['Captain America', 'Thor', 'Iron Man', 'Hulk'];

const [,nombre1, nombre2]=nombreaAvengers; // si pongo , saltea la posicion 

console.log(nombre1,nombre2);

//Spread operator 
console.log("hola",1, flase); 

console.log(...nombresAvengers); //agarra cada elemento del array y transforma en entidades individuales 

const numeros=[1,2,3,4]

console.log(Math.max(...numeros));

const masNombresDeAvengers = ['Vision', 'Spiderman'];
// esto es como un concat de arrays
const nuevoArray=[...nombresAvengers,...masNombresDeAvengers];

//transformar un array enn objeto con atrivuto de indice
console.log({...nombresAvengers});

// Spread operator de objetos opera sobre el primer nivel cuando hay anidamiento copia la referencia 
// permite mezclar objetos, copia uno y mezcla
const nuevoAvenger={
  ...avenger,
}

nuevoAvenger.direccion.calle="Otra calle"

console.log(avenger);

// puedo escribir propiedades de esta manera piso las anteriores 

const nuevoAvenger={
  ...avenger, nombre:"Ariel", alias:"Programador"
}


// Rest parameters // permite crear funciones con multiples parametros 
// aca digo que numeros es 1 o muchos, un array
const sumar =(...numeros)=>{
console.log(numeros);
return numeros.reduce((acc, num)=>acc+ num, 0);
}

console.log(sumar(1,2,3)); 

