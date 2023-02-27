// commonjs export
/* function suma(a, b){
    return a + b;
} */

/* module.exports = {
    suma
} */


// module es6
function sumar(a, b){
    return a + b;
}

export function restar(a, b){
    return a - b;
}

export function multiplicar(a, b){
    return a * b;
}

export const PI = 3.1416;

export default sumar;