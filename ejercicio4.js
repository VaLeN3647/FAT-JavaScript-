const prompt = require('prompt-sync')();

let numero = prompt("Ingresa un número: ");
numero = parseFloat(numero);

function esDivisiblePor5(num) {
    return num % 5 === 0;
}

let resultado = esDivisiblePor5(numero);

console.log("El número " + numero + " es divisible por 5?: " + resultado);
