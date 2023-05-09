// find, map, filter, some, reduce

// map ---> un nuevo array, de la misma longitud

let numeros = [2, 5, 7]; // [6, 15, 21]

let numerosXtres = numeros.map(elemento => elemento * 3); // []

console.log(numerosXtres);

// filter ---> un nuevo array, con todos los elementos que cumplan una condicion

let productos = [
  {
    id: 1,
    nombre: "telefono",
    precio: 200,
    cantidad: 2
  },
  {
    id: 2,
    nombre: "tablet",
    precio: 100,
    cantidad: 3
  },
  {
    id: 3,
    nombre: "zapatilla",
    precio: 50,
    cantidad: 1
  },
  {
    id: 4,
    nombre: "notebook",
    precio: 250,
    cantidad: 5
  },
];

let productosFiltrados = productos.filter( elemento => elemento.precio < 150 )
console.log(productosFiltrados)

// find ---> devuelve el primer elemento que cumpla la condicion, o undefined si no 
// lo encuntra 
console.log("--------------")
let elementoEncontrado = productos.find( elemento => elemento.id === 3 )
console.log(elementoEncontrado)

// some ---> devuelve un booleano si la condicion se cumple al menos 1 vez

let existeTablet = productos.some( elemento => elemento.nombre === "casa" )
console.log(existeTablet)

let cantidadTotal = productos.reduce( ( acc , elemento)=>  acc + elemento.cantidad, 0  )
console.log(cantidadTotal)
