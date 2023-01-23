const agregarFilaALaTabla = (electrodomestico) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${electrodomestico.nombre}</td>
    <td>${electrodomestico.cantidad}</td>
    <td>${electrodomestico.HorasdeUso}</td>
    `;

    tabla.append(tr);

    Equipos.push(electrodomestico);
};