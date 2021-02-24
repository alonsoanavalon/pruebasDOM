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

/* setTimeout(() => {
    cajaDesapareceAparece.style.display = "inline-block"
},1000)
 */
/* Clonar un nodo e insertarlo */

let enlaceButton = enlaces[3];

let enlaceClon = enlaceButton.cloneNode(true)

body.appendChild(enlaceClon)

console.log(cajaDesapareceAparece.getAttribute("style"))

console.log(cajaDesapareceAparece.className)

/* Combinando interval con toggle clase */

/* setInterval(() => {

    boxes = [...boxes]

    boxes.forEach(n => {
        n.classList.toggle("cajita")
    })

},1000) */


/* Creando elemento y dandole estilos desde JS */

let $box = d.createElement("div")
let $boxImage = d.createElement("img")
$boxImage.setAttribute("src", "https://placeimg.com/200/200/animals")
let $boxContent = d.createTextNode("Un animalito")

$box.appendChild($boxImage)

$box.appendChild($boxContent, $boxImage)
$box.classList.add("box")


$boxImage.style.display = "block"

body.insertAdjacentElement("beforeend", $box)

/* Agregando elemento rápido con innerHTML */


let $box2 = d.createElement("div")
let $figure = d.createElement("figure")

$figure.innerHTML = 
`<img src='https://placeimg.com/200/200/random' alt='animalito'>
<figcaption>Animalito</figcaption> `

$box2.appendChild($figure)
$box2.classList.add("box")

body.appendChild($box2)

/* Insertando elementos de un array */

const $ul = d.createElement("ul")

const estaciones = ["otoño", "invierno", "primavera","verano"]

estaciones.forEach(estacion => {

    const $li = d.createElement("li")
    $li.textContent = estacion
    $ul.appendChild($li)
    
})

body.appendChild($ul)