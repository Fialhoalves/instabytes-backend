import express from "express";

const app = express();
const titulo = "O Senhor dos Anéis";
const autor ="J.R.R. Tolkien";
const ano = 1954;
const genero = "Fantasia"

const livro = {
    titulo: titulo,
    autor: autor,
    ano: ano,
    genero: genero
  };

app.listen(3000, () =>{
    console.log("Servidor escutando.....");
});

app.get("/api", (req,res) =>{
    res.status(200).send("Boas vindas à imersão!");
});

app.get('/livro', (req, res) => {
    res.status(200).send(livro);
  });