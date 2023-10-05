//RESUELVE LOS EJERCICIOS AQUÍ
//Ejercicio 1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
let [ ,ana, ] = empleados

//Ejercicio 2
let [{email: emailLuis}] = empleados;

// Ejercicio 3
let a = 5;
let b = 3;

[a, b] = [b,a] 

// Ejercicio 4
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

const {today: maximaHoy} = HIGH_TEMPERATURES;
const {tomorrow: maximaManana} = HIGH_TEMPERATURES;

// SPREAD
// Ejercicio 5
function sumEveryOther(...number){
    let result = number.reduce((acc,value) => acc+value)
    return result
}

//Ejercicio 6
addOnlyNums(1, "perro", 2, 4); //7
function addOnlyNums(...arr) {
    let filtro = arr.filter(valor => typeof valor == "number");
    let resultado = filtro.reduce((acc,value)=> acc+value);
    return resultado
}

//Ejercicio 7
function countTheArgs(...arr) {
    return arr.length
}

//Ejercicio 8
function combineTwoArrays(arr1,arr2) {
    let combinados = [...arr1,...arr2];
   return combinados;
}

//Ejercicio 9
function onlyUniques(...array) {
    let arrayUnicos = array.filter((valor, index, arr)=> arr.indexOf(valor) == index);
    return arrayUnicos   
}

//Ejercicio 10
function combineAllArrays(...array){
    let arrayNuevo = []
    array.map(arrayNuevoIterado => arrayNuevo.push(...arrayNuevoIterado));
    return arrayNuevo;
}

//Ejercicio 11
function sumAndSquare(...argumentos) {
    let numAlCuadrado = argumentos.map(numero => numero**2);
    let cuadradoSumado = numAlCuadrado.reduce((acc,value)=>acc+value);
    return cuadradoSumado;
}





