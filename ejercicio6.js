const prompt = require('prompt-sync')();

let angulo1 = prompt("Ingresa el primer ángulo en grados: ");
let angulo2 = prompt("Ingresa el segundo ángulo en grados: ");
let angulo3 = prompt("Ingresa el tercer ángulo en grados: ");

angulo1 = parseFloat(angulo1);
angulo2 = parseFloat(angulo2);
angulo3 = parseFloat(angulo3);

function esTrianguloValido(a1, a2, a3) {
    return (a1 + a2 + a3 === 180);
}

let valido = esTrianguloValido(angulo1, angulo2, angulo3);

console.log("El triángulo es válido: " + valido);
