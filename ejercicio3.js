    // Importar el paquete prompt-sync
const prompt = require('prompt-sync')();

// Pedir el primer string y guardarlo en una variable
let string1 = prompt("Ingresa el primer string: ");

// Pedir el segundo string y guardarlo en otra variable
let string2 = prompt("Ingresa el segundo string: ");

// Comparar si ambos strings son iguales
let sonIguales = string1 === string2;

// Comparar si ambos strings tienen la misma longitud
let mismaLongitud = string1.length === string2.length;

// Mostrar los resultados
console.log("Los strings son iguales: " + sonIguales);
console.log("Los strings tienen la misma longitud: " + mismaLongitud);
