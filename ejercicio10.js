const prompt = require('prompt-sync')();

let color = prompt("Ingresa un color: ").toLowerCase();

function obtenerColorEnIngles(color) {
    switch (color) {
        case 'azul':
            return 'blue';
        case 'rojo':
            return 'red';
        case 'verde':
            return 'green';
        case 'naranja':
            return 'orange';
        case 'amarillo':
            return 'yellow';
        default:
            return 'Color not found';
    }
}

let colorEnIngles = obtenerColorEnIngles(color);

console.log(colorEnIngles);
