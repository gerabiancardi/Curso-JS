/* const unObjeto = {
    nombre: "Ariel",
    edad: 31,
    nacionalidad: "Argentina",
    direccion: {
        calle: "calle falsa",
        numero: "123",
        localidad: "Goya",
    }

}


//para visualizar la propiedad del objeto hago
console.log(unObjeto.edad);
console.log(unObjeto["edad"]);
console.log(unObjeto[propiedadEdad]);


// para editar las propiedades hago
unObjeto.edad =32;

 */

//Funcion constructora siempre el nombre de estas funciones va la primera en mayuscula, la funcion saludar en estos casos se llama metodos 
/* function Actor (nombre, apellido, edad) {
    this.nombre =nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.saludar = () => "Hola, soy " + this.nombre;
}

const actor1 = new Actor ("Will","Smith",53);

const actor2= new Actor ("Chris", "Evans", 41);

console.log(actor1.saludar());
console.log(actor2.saludar());


 */

//para ver si existe el nombre en actor 1 por ejemplo uso  el operador in, 

/* function Actor (nombre, apellido, edad) {
    this.nombre =nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.saludar = () => "Hola, soy " + this.nombre;
}

const actor1 = new Actor ("Will","Smith",53);

const actor2= new Actor ("Chris", "Evans", 41);

console.log("nombre" in actor1); */

// para que atributo vaya iterando por todas las propiedades del objeto se osa for y in, y veo propiedad por propiedad con el dato
/* for(const atributo in actor1){
    console.log(atributo, actor1[atributo]);
}
 */

// tema nuevo, todo lo anterior evoluciono y ahora se utiliza clase, en esto los metodos van afuera queda mas prolijo

/* class Actor {
    constructor ({nombre, apellido, edad}){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=parseInt(edad);
    }

    saludar (){
        return "Hola, soy " + this.nombre;
    }

    dormir (){
        return "Buenas noches"
    }
}

const actor1 = new Actor ({
    nombre: "Will",
    apellido: "Smith",
    edad: 42
});

console.log(actor1.saludar()); */

// ejemplo real


class Golondrina {
    constructor (entrada){
        this.nombre=entrada.nombre;
        this.energiaMaxima=parseInt(entrada.energiaMaxima);
        this.energia=parseInt(energiaMaxima);
    }


    vola(distanciaEnKms){
        const energiaAGastar =distanciaEnKms * 2;

        if(this.energia < energiaAGastar){
            alert(this.nombre + ": Estoy muy cansada para volar "+ distanciaEnKms + "Kms");
        } else {
            this.energia = this.energia - energiaAGastar;
            alert(this.nombre + ": Pude volar "+ distanciaEnKms + "Kms"+ "Me queda de energia "+ this.energia)
        }
    }

    come (){
        const nuevaEnergia = this.energia + 10;
        if(nuevaEnergia>this.energiaMaxima){
            alert(this.nombre + ": Ya no puedo comer mas :(")
        } else {
            this.energia = nuevaEnergia;
            alert(this.nombre + ": Estaba muy rico, mi energia ahora es de " + this.come.energia)
        }
    }
}

const nombre = prompt("Ingrese el nombre de su golondrina");
const energia= prompt("Ingrese la energia maxima de su golondrina");

const golondrina=new Golondrina({
    nombre: nombre,
    energiaMaxima: energiaMaxima,
});

do {
    let opcion = prompt("Seleccione una opcion :/ n1 - volar / n2 - comer / n0- Finalizar");
    switch(opcion){
        case "1":
            const distancia = parseFloat(prompt ("Indique la distancia a volar en Kms"));
            golondrina.vola(distancia) break;
        case "2":
            golondrina.come()
            break;
    }
}while(opcion !== 0);