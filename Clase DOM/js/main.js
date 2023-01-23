
// se trae por id solo 1 ya que el id es unico para un elemento
const titulo=document.getElementById("avengers-titulo")
console.dir(titulo.innerText);

titulo.innerText="Avengers!!!"


if(titulo){
    console.log("Existe")
};


// se puede traer las cosas por las clases asignadas


const avengers=document.getElementsByClassName("avenger");

console.dir(avengers);

// tambien por la etiqueta, trae todos los elementos con etiqueta id

const etiquetaLi=document.getElementsByTagName("li");

console.dir(li);


// propiedades que nos permiten modificar el html desde js
const subtitulo= document.getElementById("avengers-subtitulo");
subtitulo.innerText="<p>The Earth\´s mightest heroes </p>" // toma todo como texto
subtitulo.innerHTML="<p><strong>The Earth\´s mightest heroes </strong></p>" // entiende HTML


const divColor=document.getElementById("color-aletorio");
console.log(div.divColor.className);

const colores=["rojo","azul","amarillo"];
divColor.className=colores[Math.floor(Math.random()*colores.length)];
console.log(divColor.className);

