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

