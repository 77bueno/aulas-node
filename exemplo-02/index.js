// import soma from "./modulos/funcoes.mjs";  importando um único recurso
import { soma, multiplica, dividir, subtrair } from "./modulos/funcoes.mjs";

let resultadoSoma = soma(10, 50);
let resultadoMultiplica = multiplica(2, 10);
let resultadoDividir = dividir(10,2);
let resultadoSubtrair = subtrair(20,4);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Multiplicação: ${resultadoMultiplica}`);
console.log(`Divisão: ${resultadoDividir}`);
console.log(`Subtração: ${resultadoSubtrair}`); 
