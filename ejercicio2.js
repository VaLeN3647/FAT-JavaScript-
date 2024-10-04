// Importar el paquete prompt-sync
const prompt = require('prompt-sync')();

// Pedir el primer número y guardarlo en una variable
let numero1 = prompt("Ingresa el primer número: ");

// Pedir el segundo número y guardarlo en otra variable
let numero2 = prompt("Ingresa el segundo número: ");

// Convertir los valores ingresados a números
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Crear una tercera variable que sume los valores pedidos
let suma = numero1 + numero2;

// Retornar la suma por consola
console.log("La suma de los dos números es: " + suma);
