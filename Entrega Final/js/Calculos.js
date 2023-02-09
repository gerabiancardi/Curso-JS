const Calcular = (electrodomestico) => {
    switch (electrodomestico.nombre) {
        case "Foco":
            return electrodomestico.HorasdeUso * electrodomestico.cantidad * 0.01;
        case "Heladera":
            return electrodomestico.HorasdeUso * electrodomestico.cantidad * 0.2;
        case "AAcondicionado":
            return electrodomestico.HorasdeUso * electrodomestico.cantidad * 1.397;
        case "Microondas":
            return electrodomestico.HorasdeUso * electrodomestico.cantidad * 0.75;
        case "PavaElectrica":
            return electrodomestico.HorasdeUso * electrodomestico.cantidad * 2.0;
        case "Lavarropas":
            return electrodomestico.HorasdeUso * electrodomestico.cantidad * 0.5;
        default:
            break;
    }
};

const CalcularConsumoTotal=(Equipos)=>{
    return Equipos.reduce((acc, Equipos) => {
    return acc + Calcular(Equipos)
}, 0)}


const CalculoCosto=(Nombreprovincia,data,consumoTotal)=>{
    switch (Nombreprovincia) {
        case "Corrientes":
            CostoMensual = (((data[0].CargoFijo) + (data[0].CargoVariable * consumoTotal * 61)) * 1.21)-(data[0].Subsidio)+(data[0].Alumbrado);
            Swal.fire({
                title: 'Su Costo Bimestral en Corrientes es',
                text: "$" + CostoMensual.toFixed(2),
                imageUrl:"../Entrega Final/assets/imagenes/Captura.PNG",
                imageWidth:100,
                imageHeight:100,
                confirmButtonText: 'Cerrar',
                background: "green",
                color: "black"
            });
            break;
        case "SantaFe":
            CostoMensual = (((data[1].CargoFijo) + (data[1].CargoVariable * consumoTotal * 61)) * 1.21)+(data[1].Alumbrado)
            +(((data[1].CargoFijo) + (data[1].CargoVariable * consumoTotal * 61)) * 0.006)+
            (((data[1].CargoFijo) + (data[1].CargoVariable * consumoTotal * 61)) * 0.018) +
            (((data[1].CargoFijo) + (data[1].CargoVariable * consumoTotal * 61)) * 0.06)+
            (((data[1].CargoFijo) + (data[1].CargoVariable * consumoTotal * 61)) * 0.015);
            Swal.fire({
                title: 'Su Costo Bimestral en Santa Fe es',
                text: "$" + CostoMensual.toFixed(2),
                imageUrl:"../Entrega Final/assets/imagenes/Captura.PNG",
                imageWidth:100,
                imageHeight:100,
                confirmButtonText: 'Cerrar',
                background: "green",
                color: "black"
            });
            break;
        case "CapitalFederal":
            CostoMensual = ((data[2].CargoFijo) + (data[2].CargoVariable * consumoTotal * 61)) * 1.21;
            Swal.fire({
                title: 'Su Costo Bimestral en Buenos Aires es',
                text: "$" + CostoMensual.toFixed(2),
                imageUrl:"../Entrega Final/assets/imagenes/Captura.PNG",
                imageWidth:200,
                imageHeight:200,
                confirmButtonText: 'Cerrar',
                background: "green",
                color: "black"
            });
            break;
    }
}