let aluno = "Victor";
let nota1 = 10;
let nota2 = 8;

let media = (nota1 + nota2) / 2;

console.log(media);
console.log("==============================================");

let dados = {
    nome: "Bueno",
    idade: 16,
    signo: "Cavalo"
};

console.table(dados);

console.log("==============================================");

if (media >= 7) {
    console.log(`O aluno ${aluno} está Aprovado! 😎`);
} else {
    console.log(`O aluno ${aluno} está Reprovado! 🤦‍♂️`);
}