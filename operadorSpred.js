

// // COPIA POR VALOR o REFERENCIA

// let a = 1
// let b = a 

// console.log( b )

// a = 15

// console.log( b )

// const persona = {
//     nombre: "pepe",
//     edad: 22,
//     esCasado: true
// }


// let personaCopia = persona



// console.log(personaCopia)

// persona.edad = 15

// persona.color = "rojo"

// console.log(personaCopia)

// personaCopia.nombre = "carmencita"

// console.log(persona)




// // array 

// let numeros = [1, 4, 2, 16, 14]

// let copiaNumeros = numeros

// // console.log(copiaNumeros)

// numeros.push(20)

// // console.log(copiaNumeros)

// copiaNumeros.push(120)

// console.log(numeros)





const persona = {
    nombre: "pepe",
    edad: 22,
    esCasado: true
}

let copiaPersona = {...persona}

persona.nombre = "maria"

console.log(copiaPersona)


let numeros = [1, 4, 2, 16, 14]

let copiaNumeros = [...numeros]

console.log(copiaNumeros)

numeros.push(100)

console.log(copiaNumeros)


let numero1 = 12
let numero2 = numero1