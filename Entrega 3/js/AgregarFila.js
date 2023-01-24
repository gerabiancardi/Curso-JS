const agregarFilaALaTabla = (electrodomestico) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${electrodomestico.nombre}</td>
    <td>${electrodomestico.cantidad}</td>
    <td>${electrodomestico.HorasdeUso}</td>
    `;

    const nombre = electrodomestico.nombre;
    const cantidad = electrodomestico.cantidad;
    const HorasdeUso=electrodomestico.HorasdeUso;
    const botonera = document.createElement('td');
    botonera.innerHTML = '<button class="btn btn-danger mb-3">Borrar</button>';
    botonera.addEventListener('click', () => {
        const electrodomesticoEcontrado = Equipos.find((elemento) => elemento.nombre === nombre && elemento.cantidad=== cantidad && elemento.HorasdeUso===HorasdeUso);
        const indice = Equipos.indexOf(electrodomesticoEcontrado);
        Equipos.splice(indice, 1);
        localStorage.setItem("elementoselectricos", JSON.stringify(Equipos));
        tr.remove();
    });

    tr.append(botonera);

    tabla.append(tr);
};