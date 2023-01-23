class EquiposElectricos {
    constructor(entrada) {
        this.tipo = (entrada.tipo)
        this.cantidad = parseInt(entrada.cantidad);
        this.hsDeUso = parseFloat(entrada.hsDeUso);
    }

    calcularConsumo(tipo) {
        switch (tipo) {
            case "Foco":
                return this.hsDeUso * this.cantidad * 0.01;
            case "Heladera":
                return this.hsDeUso * this.cantidad * 0.2;
            case "Aire Acondicionado":
                return this.hsDeUso * this.cantidad * 1.397;
            case "Microondas":
                return this.hsDeUso * this.cantidad * 0.75;
            case "Pava Electrica":
                return this.hsDeUso * this.cantidad * 2.0;
            case "Lavarropas":
                return this.hsDeUso * this.cantidad * 0.5;
            default:
                alert("Ingreso un equipo no valido")
                break;
        }
    }
}

let cantidad;
let hsDeUso;
let tipo;
const Equipos = [];
let nombre = prompt("Ingrese un Nombre")

do {
    tipo = prompt("Ingrese el tipo de electrodomestico Foco, Heladera, Microondas, Aire Acondicionado, Pava Electrica o Lavarropas si quiere salir escriba -1")
    if (tipo != -1) {
        if (["Foco", "Heladera", "Aire Acondicionado", "Microondas", "Pava Electrica", "Lavarropas"].includes(tipo)) {
            cantidad = prompt("Ingrese la cantidad")
            if (!isNaN(cantidad)) {
                hsDeUso = prompt("Ingrese la cantidad de horas de uso de sus/ su artefacto")
                if (hsDeUso >= 0) {
                    const equipos = new EquiposElectricos({ tipo: tipo, cantidad: cantidad, hsDeUso: hsDeUso });
                    Equipos.push(equipos);
                }
            } else {
                alert("Debe ingresar un valor numerico")
            };
        } else {
            alert("El equipo ingresado no es valido")
        }
    }
} while (tipo != -1)

let ArrayFocos = Equipos.filter(function (item) {
    return item.tipo == "Foco"
})

let ArrayHeladeras = Equipos.filter(function (item) {
    return item.tipo == "Heladera"
})

let ArrayAiresAcondicionados = Equipos.filter(function (item) {
    return item.tipo == "Aire Acondicionado"
})

let ArrayMicroondas = Equipos.filter(function (item) {
    return item.tipo == "Microondas"
})


let ArrayPavaElectrica = Equipos.filter(function (item) {
    return item.tipo == "Pava Electrica"
})

let ArrayLavarropas = Equipos.filter(function (item) {
    return item.tipo == "Lavarropas"
})


const consumoFocos = ArrayFocos.reduce((acc,foco)=>{
    return acc + foco.calcularConsumo("Foco")
},0);

const consumoHeladeras = ArrayHeladeras.reduce((acc,heladera)=>{
    return acc + heladera.calcularConsumo("Heladera")
},0);

const consumoAiresAcondicionados = ArrayAiresAcondicionados.reduce((acc,AA)=>{
    return acc + AA.calcularConsumo("Aire Acondicionado")
},0);


const consumoMicroondas = ArrayMicroondas.reduce((acc,Microonda)=>{
    return acc + Microonda.calcularConsumo("Microondas")
},0);

const consumoPavaElectrica = ArrayPavaElectrica.reduce((acc,PE)=>{
    return acc + PE.calcularConsumo("Pava Electrica")
},0);

const consumoLavarropas = ArrayLavarropas.reduce((acc,LR)=>{
    return acc + LR.calcularConsumo("Lavarropas")
},0);

let consumoTotal = consumoFocos + consumoHeladeras + consumoAiresAcondicionados
    + consumoMicroondas + consumoPavaElectrica + consumoLavarropas;

alert(nombre + " Los consumos siguientes estan calculados en KW-h," +
    " el consumo de sus focos es " + consumoFocos +
    " ,el consumo de sus heladeras es " + consumoHeladeras +
    " ,el consumo de sus A.A es " + consumoAiresAcondicionados
    + " ,el consumo de sus microondas es " + consumoMicroondas +
    " ,el consumo de sus pavas electricas es " + consumoPavaElectrica
    + " ,el consumo de sus lavarropas es " + consumoLavarropas)

alert(nombre + " ,segun sus datos ingresados, tiene un consumo de " + consumoTotal + " KW-h diarios")

if (consumoTotal > 9) {
    alert("Su consumo se encuentra por encima promedio, el 80% de los consumos residenciales estan por debajo del suyo, por favor mejorar, el medio ambiente se lo ruega, CUIDEMOS EL PLANETA :(")
} else if (consumoTotal < 8) {
    alert("Su consumo esta por debajo del promedio, bien hecho!. El medio ambiente se lo agradece! PLANETA FELIZ :)")
} else {
    alert("Su consumo se encuentra en el promedio, el 80% de los consumos residenciales estan en su rango! Bien hecho. A seguir mejorando!")
} 