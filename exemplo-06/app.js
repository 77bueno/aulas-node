import express from "express";

// Armazenando o express em uma variável. Ao invés de chamar express().get, usaremos app.get;
const app = express();

// Configurar a view engine com EJS
app.set("view engine", "ejs")

// Configurar as rotas de acesso

// Raíz
app.get("/", (req, res) => {
    // res.send("Bem Vindo ao servidor ExpressJs. Foi mais fácil do que parecia!")
    res.render("paginas/index");
});

app.get("/sobre", (req, res) => {
    res.render("paginas/sobre");
});

app.get("/contato", (req, res) => {
    res.render("paginas/contato");
});

// Iniciar o servidor e escolher a porta
app.listen(3000, () => {
    console.log("Servidor expressJs rodando normalmente.")
});