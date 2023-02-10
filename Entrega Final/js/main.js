const formulario = document.getElementById("ingreso-electrodomesticos");
let formularioprovincia = document.getElementById("selectprov")
const mensajeError = document.getElementById('mensaje-error');
const tabla = document.getElementById("tabla");
let MensajeTotal = document.getElementById("mensaje-totales");
const EquiposDelLocalStorage = JSON.parse(localStorage.getItem("elementoselectricos")) || [];
const Equipos = EquiposDelLocalStorage.map((electrodomestico) => {
    return new Electrodomesticos(electrodomestico);
});

for (const elementos of Equipos) {
    agregarFilaALaTabla(elementos);
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const electrodomestico = new Electrodomesticos({
        nombre: e.target[0].value,
        cantidad: e.target[1].value,
        HorasdeUso: e.target[2].value,
    })
    if (electrodomestico.cantidad < 1) {
        mensajeError.innerText = 'Tienes que poner una cantidad mayor a 0';
        return;
    }
    Equipos.push(electrodomestico)

    agregarFilaALaTabla(electrodomestico);

    for (const input of e.target) {
        input.value = '';
    }
    localStorage.setItem("elementoselectricos", JSON.stringify(Equipos));
}
);

const BotonFocos = document.getElementById("Consumo Focos")
const BotonHeladeras = document.getElementById("Consumo Heladeras")
const BotonAire = document.getElementById("Consumo Aires")
const BotonMicroondas = document.getElementById("Consumo Microondas")
const BotonPava = document.getElementById("Consumo PavaElectrica")
const BotonLavarropas = document.getElementById("Consumo Lavarropas")
const BotonTotales = document.getElementById("Consumo Total")
let consumoFocos = 0;
let consumoHeladeras = 0;
let consumoAires = 0;
let consumoMicroondas = 0;
let consumoPava = 0;
let consumoLavarropas = 0;
let consumoTotal = 0;

BotonFocos.addEventListener("click", (e) => {
    let ArrayFocos = Equipos.filter(function (item) {
        return item.nombre == "Foco"
    });
    const consumoFocos = ArrayFocos.reduce((acc, foco) => {
        return acc + Calcular(foco)
    }, 0)
    Swal.fire({
        title: 'El consumo de sus Focos es',
        text: consumoFocos + "kW-h",
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
});

BotonHeladeras.addEventListener("click", (e) => {
    let ArrayHeladeras = Equipos.filter(function (item) {
        return item.nombre == "Heladera"
    });
    const consumoHeladeras = ArrayHeladeras.reduce((acc, Heladera) => {
        return acc + Calcular(Heladera)
    }, 0)
    Swal.fire({
        title: 'El consumo de sus Heladeras es',
        text: consumoHeladeras + "kW-h",
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
});

BotonAire.addEventListener("click", (e) => {
    let ArrayAires = Equipos.filter(function (item) {
        return item.nombre == "AAcondicionado"
    });
    const consumoAires = ArrayAires.reduce((acc, AAcondicionado) => {
        return acc + Calcular(AAcondicionado)
    }, 0)
    Swal.fire({
        title: 'El consumo de sus Aires Acondicionados es',
        text: consumoAires + "kW-h",
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
});

BotonMicroondas.addEventListener("click", (e) => {
    let ArrayMicroondas = Equipos.filter(function (item) {
        return item.nombre == "Microondas"
    });
    const consumoMicroondas = ArrayMicroondas.reduce((acc, Microondas) => {
        return acc + Calcular(Microondas)
    }, 0)
    Swal.fire({
        title: 'El consumo de sus Microondas es',
        text: consumoMicroondas + "kW-h",
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
});


BotonPava.addEventListener("click", (e) => {
    let ArrayPava = Equipos.filter(function (item) {
        return item.nombre == "PavaElectrica"
    });
    const consumoPava = ArrayPava.reduce((acc, PavaElectrica) => {
        return acc + Calcular(PavaElectrica)
    }, 0)
    Swal.fire({
        title: 'El consumo de sus Pavas Electricas es',
        text: consumoPava + "kW-h",
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
});

BotonLavarropas.addEventListener("click", (e) => {
    let ArrayLava = Equipos.filter(function (item) {
        return item.nombre == "Lavarropas"
    });
    const consumoLavarropas = ArrayLava.reduce((acc, Lavarropas) => {
        return acc + Calcular(Lavarropas)
    }, 0)
    Swal.fire({
        title: 'El consumo de sus lavarropas es',
        text: consumoLavarropas + "kW-h",
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
});

BotonTotales.addEventListener("click", (e) => {
    const consumoTotal=CalcularConsumoTotal(Equipos);
    if (consumoTotal > 9) {
        Swal.fire({
            title: 'Su consumo total esta por encima encima del promedio, por favor mejorar, el medioambiente se lo ruega Cuidemos el planeta :(',
            text: "Tiene un consumo de " + consumoTotal + "kW-h por dia",
            icon: 'error',
            confirmButtonText: 'Cerrar',
            background: "red",
            color: "black"
        });
    } else if (consumoTotal < 8) {
        Swal.fire({
            title: 'Su consumo total esta por debajo del promedio,bien hecho! El medio ambiente se lo agradece! PLANETA FELIZ :)',
            text: "Tiene un consumo de " + consumoTotal + "kW-h por dia",
            icon: 'success',
            confirmButtonText: 'Cerrar',
            background: "green",
            color: "black"
        });
    } else {
        Swal.fire({
            title: 'Su consumo total se encuentra en el promedio, el 80% de los consumos residenciales estan en su rango! Bien hecho. A seguir mejorando!',
            text: "Tiene un consumo de " + consumoTotal + "kW-h por dia",
            icon: 'warning',
            confirmButtonText: 'Cerrar',
            background: "yellow",
            color: "black"
        });
    }
});

const BotonPrecio = document.getElementById("Precio")
let CostoMensual = 0;

BotonPrecio.addEventListener("click", (e) => {
    let Nombreprovincia = formularioprovincia.value
    const consumoTotal=CalcularConsumoTotal(Equipos);
    fetch("./js/Precios.json").then((response) => response.json())
        .then((data) => {
            CalculoCosto(Nombreprovincia,data,consumoTotal);
        })
});



