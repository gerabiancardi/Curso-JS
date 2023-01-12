// son funciones que reciben otra funcion como parametro o que retornan otra funcion
// para retornar funcion leer en la teoria 
// aca vemos la parte practica de la funcion que recibe de parametro otra funcion
const avengers = [
    {
        alias: 'Thor',
        nombre: 'Thor',
        ordenDeAfilicacion: 3,
        tipo: 'Dios',
        fuerza: 1000
    },
    {
        alias: 'Captain America',
        nombre: 'Steve Rogers',
        ordenDeAfilicacion: 1,
        tipo: 'Humano',
        fuerza: 100
    },
    {
        alias: 'Iron Man',
        nombre: 'Tony Stark',
        ordenDeAfilicacion: 2,
        tipo: 'Humano',
        fuerza: 10
    },
    {
        alias: 'Hulk',
        nombre: 'Bruce Banner',
        ordenDeAfilicacion: 4,
        tipo: 'Hulk',
        fuerza: 10000
    },
    {
        alias: 'Vision',
        nombre: 'Vision',
        ordenDeAfilicacion: 7,
        tipo: 'Robot',
        fuerza: 5000
    },
];


//forEach
avengers.forEach((avenger) => {
    console.log(avenger.nombre);
});

// Find
const encontrado = avengers.find((avenger) => {
    return avenger.alias == "Hulk"
});

// Filter devuelve un nuevo array filtrado con lo que encontro
const filtrado = avengers.filter((avenger) => {
    return avenger.tipo == "Humano"
})
console.log(filtrado);

//Some, es para saber si la condicion se cumple en al menos 1 elemento
//devuelve un boleano true or false
const hayAlmenosUnoQueCumple = avengers.some((avenger) => {
    avenger.tipo === "Hulk"
})

console - log(hayAlmenosUnoQueCumple);

//map
//aplica la funcion y retorna un array con el resultado de la funcion que le di como parametro
//si o si tiene que devolver algo, me permite aplicar la funcion a cada elemento del array
// en este ejemplo creo un nuevo array con solo los alias
const nombresDeAvengers = avengers.map((avenger) => {
    return avenger.alias
})

console.log(nombresDeAvengers);

//Reduce
// devuelve un solo valor, si tengo muchos alumnos o notas me devuelve el promedio por ejemplo
//recibe dos parametros 1la funcion (que tiene dos parametros primero el acumulador y el segundo el elevmento que iteramos) y 2do el valor inical del acumulador
const fuerzaDeTodos = avengers.reduce((acc, avenger) => {
    return acc + avenger.fuerza
}, 0);

console.log(fuerzaDeTodos);

// Sort, es para ordenar, es destructivo, aplica al array original y lo modifica

const listaNumeros = [5, 8, 9, 3, 2];
const listaNombres = ["Gera", "Pame", "Mili"];

console.log(listaNombres.sort());
console.log(listaNumeros.sort().reverse);

//para ordenar un array de objetos necesita parametros dentro y una funcion de orden superior
// le ayudo a entender cual va primero con 1 -1 y 0
// aca me los ordena por fuerza del mas fuerte al mas debil
console.log(avengers.sort((avenger1, avenger2) => {
    if (avenger1.fuerza < avenger2.fuerza) {
        return 1;
    }
    if (avenger1.fuerza > avenger2.fuerza) {
        return -1;
    }
    if (avenger1.fuerza === avenger2.fuerza) {
        return 0;
    }
}));

console.log(avengers);


////////////
//OBJETO MATH
//objeto Math permite realizar operaciones matematicas mas avanzadas 
// tinee numero PI, numero E.
console.log(Math.E);

consoloe.log(Math.min(1,2,3,4,5));
consoloe.log(Math.max(1,2,3,4,5,6,8,9,23,25));


//redondea devolviendo un entero
console.log(Math.round(1.5555));


// me devuelve el entero siguiente para arriba 2
console.log(Math.ceil(1.333));

// me devuelve el entero siguiente para abajo 1
console.log(Math.floor(1.333));

// me devuelve 
console.log(1.333.toFixed(2));


//raiz cuadrada
console.log(Math.sqrt(4));

//Random devulve un numero aleatorio entre 0 y 1
console.log(Math.random());


console.log(Math.ceil(Math.random()*6));


//OBJETO DATE
//nos va dar la fecha actual del dispositivo que ejecutemos
const ahora= new Date();

console.log(ahora);
//11 es diciembre por que va de 0 a 11 en js los meses, despues va hs min seg miliseg
const navidad= new Date(2023, 11,25,0,0,0,0);

consoloe.log(navidad);

//devuelve el mes como un numero
console.log(navidad.getMonth);

//devuelve el año como un numero
console.log(navidad.getFullYear);

//devuelve el dia como un numero del dia de la semana del o domingo al sabaod
console.log(navidad.getDay);

// mas adelante vamos a ver como usar libreria que soluciona para no trabajar con numeros

//formas de imprimir las fechas en formatos mas legibles
console.log(navidad.toDateString());
console.log(navidad.toLocaleString());
console.log(navidad.toLocaleDateString());


//si resto me dice cuantos milisegundos faltan para navidad

console.log(navidad-ahora);

//asi saco cuantos dias faltan
console.log((navidad-ahora)/1000/60/60/24);

//comparar 

if (navidad>ahora){
consolo.log("Si")
}else{
    console.log("No")
}

