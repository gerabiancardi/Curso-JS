const formulario = document.getElementById("ingreso-avenger");
const mensajeError = document.getElementById("mensaje-error");
const tabla = document.getElementById("tabla");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const avenger = {
        alias: e.target[0].value,
        nombre: e.target[1].value,
        edad: parseInt(e.target[2].value),
    }
    //validacion de edad
    if (avenger.edad < 18) {
        mensajeError.innerText = "tiene que ser mayor de 18 años para ser un avenger";
        return;
    }
    /* const idAleatorio = (Math.floor(Math.random() * 10000000).toString()); */
    // ahora agregamos a la tabla 
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${avenger.alias}</td>
    <td>${avenger.nombre}</td>
    <td>${avenger.edad}</td>
    <td id=>"${idAleatorio}">X</td>
    `;

    tabla.append(tr);
    for (const input of e.target) {
        input.value = "";
    }

    const botonera = document.createElement("td");
    botonera.innerHTML = `<button  class="btn btn-danger mb-3">Borrar</button>`
    botonera.innerText = "Borrar"
    botonera.onclick = () => {
        tr.remove();
    }

    tr.append(botonera);

    /*     document.getElementById(idAleatorio).addEventListener(("click",
            () => {
                tr.remove();
            })); */



});
