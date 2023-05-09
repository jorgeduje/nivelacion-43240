
// objetos 

let persona = {
    nombre: "pepe",
    edad: 22,
    esCasado: true
}

persona.nombre = "juan"
persona.apellido = "perez"

// importa el nombre, pero no el orden
let {esCasado, nombre} = persona

console.log(nombre)


// arrays

// importa el orden, y no el nombre
const personas = [ "pepito", "maria", "carmen" ]

const [ , persona2 ] = personas

console.log(persona2)

let auto = {
    color: "rojo",
    modelo: 2022
}

 let {color} = auto

console.log(color)
console.log(color)
console.log(color)

let numeros = [10, 12, 32]

let [ , , n3 ] = numeros

console.log( n3 )
console.log( n3 )
console.log( n3 )