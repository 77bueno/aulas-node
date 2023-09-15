import express from "express";

// Armazenando o express em uma variável. Ao invés de chamar express().get, usaremos app.get;
const app = express();

// Configurar as rotas de acesso

// Raíz
app.get("/", (req, res) => {
    res.send("Bem Vindo ao servidor ExpressJs!")
});


// Iniciar o servidor e escolher a porta
app.listen(3000, () => {
    console.log("Servidor expressJs rodando normalmente.")
});