/* Seleccionando elementos y guardando en variables */
const d = document;
const body = document.body;
let boxes = d.querySelectorAll('.box')
let enlaces = d.getElementsByTagName("a");
enlaces = [...enlaces]


/* Creando nuevos elementos */
let $nuevoEnlace = d.createElement('a');
let contenidoEnlace = d.createTextNode('Hola soy un nodo de texto')

/* Insertando nuevos elementos creados */
$nuevoEnlace.appendChild(contenidoEnlace)


/* Cambiando valor de nodos de texto */
let box1 = boxes[0];

box1.innerHTML = 'Hola es una prueba'



let textoViejo = contenidoEnlace.nodeValue;

let textoNuevo = contenidoEnlace.nodeValue = "Hola soy un nuevo nodo de texto"


/* Cambiando nodos de texto en el documento */

let nuevoHermanoTexto = d.createTextNode('Estoy Detras de mi hermano')
let nuevoEnlace = d.createElement('a');

nuevoEnlace.appendChild(nuevoHermanoTexto)

let enlaceHermano = boxes[1].firstChild;
let padreNodo = enlaceHermano.parentNode
// Lo debo insertar en el padre nodo con la referencia del hijo a reemplazar
padreNodo.insertBefore(nuevoHermanoTexto, enlaceHermano)

let nuevoTexto = d.createTextNode('Soy el reemplazo')
let nuevoEnlace2 = d.createElement('a')

nuevoEnlace2.appendChild(nuevoTexto)

let antiguoEnlace = boxes[2].firstChild;
let padreAntiguoEnlace = antiguoEnlace.parentNode;

padreAntiguoEnlace.replaceChild(nuevoEnlace2, antiguoEnlace)

/* Removiendo hijos */

let cajaARemover = boxes[3]
let parentARemover = cajaARemover.parentNode
parentARemover.removeChild(cajaARemover)



let textoARemover = boxes[4].firstChild;
textoARemover.parentNode.removeChild(textoARemover)

/* Viendo atributos de elementos */

let cajaAtributo = boxes[5]
console.log(cajaAtributo.getAttribute('class'))


/* Modificando atributo de elemento */
let enlaceAtributo = enlaces[0]

console.log(enlaceAtributo.getAttribute("href"))
enlaceAtributo.setAttribute("href", "https://google.com")
console.log(enlaceAtributo.getAttribute("href"))

/* Ocultando y mostrando elemento a través de style css */

let cajaDesapareceAparece = boxes[6]
cajaDesapareceAparece.style.display = "none"

setTimeout(() => {
    cajaDesapareceAparece.style.display = "inline-block"
},1000)

/* Clonar un nodo */

let enlaceButton = enlaces[3];

let enlaceClon = enlaceButton.cloneNode(true)

body.appendChild(enlaceClon)