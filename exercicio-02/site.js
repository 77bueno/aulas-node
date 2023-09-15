import express  from "express";

const site = express();

site.set("view engine", "ejs");

site.get("/", (req, res) => {
    // res.send("Deu bom")
    res.render("paginas/index.ejs")
})


site.listen(8080, () => {
    console.log("Servidor funcionando bem!");
});