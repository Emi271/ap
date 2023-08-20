class Item {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen; }}

const mochila = []

var pocion = new Item("Poción de vida", 25, "")
var espada = new Item("Espada", 100, "")
var escudo = new Item("Escudo", 75, "")

let oro = 500

const elementoOro = document.querySelector("#oro span")
const elementoMochila = document.querySelector("#mochila")

elementoOro.innerText = oro

const btnComprar = document.querySelector(".btnComprar")

function comprar(item) {
    if (oro - item.precio <= 0) {
        alert(`No tienes suficiente dinero para comprar` + item.nombre)
    } else if (mochila.length > 5) {
        alert("No tienes más espacio en el inventario")
    } else {mochila.push(item)
    oro = oro - item.precio
        actualizarHTML()}}

function actualizarHTML() {
    elementoMochila.innerHTML = ""
    for (const item of mochila) {
        let indiceItem = mochila.indexOf(item)
        let elementoItem = ``
        <li></li>`
    }
}