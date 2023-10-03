// Declaracion de variable
const boton= document.getElementById ("boton")

 boton.addEventListener("click", () => {
const body = document.querySelector("body")

if (body.style.backgroundColor === "white"){
body.style.backgroundColor = "black"}
else {body.style.backgroundColor = "white"
}
 })
