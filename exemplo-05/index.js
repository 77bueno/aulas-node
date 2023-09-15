import chalk from "chalk"; // Importação do módulo instalado

console.log("Gerenciamento de Pacotes");

let aluno = "Victor Bueno";
let idade = 16;

if (idade >= 18) {
    console.log(chalk.bgCyan(`${aluno} é maior de idade`));
} else {
    console.log(chalk.bgRed(`${aluno} é menor de idade`));
}

console.log(chalk.bgGray("Hello Word!"));