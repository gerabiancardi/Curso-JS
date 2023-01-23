const h1 = document.createElement('h1');
h1.innerText = 'Soy un h1';
document.body.append(h1);

const lista = document.getElementById('lista');
const tres = document.createElement('li');
const textoTres = "Tres";

///tres.innerHTMl = '<strong>' + textoTres + '<strong>'; 

tres.innerHTML = `
  <strong>
    ${textoTres}
  </strong>
`;


tres.className = 'elemento';
lista.append(tres);

h1.remove();

const elementosDeLaLista = document.getElementsByClassName('elemento');
console.log(elementosDeLaLista);

elementosDeLaLista[0].remove();

const input = document.getElementById('nombre');
//value es el valor dentro del input
console.log(input.value);

input.value = 'Ariel';
