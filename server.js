import express from "express";

const app = express();
app.use(express.json())
let nextId = 1; // Variável para controlar o próximo ID a ser atribuído

const livros = [
    {
        id: nextId++,
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        ano: 1954,
        genero: "Fantasia"
    },
    {
        id: nextId++,
        titulo: "1984",
        autor: "George Orwell",
        ano: 1949,
        genero: "Distopia"
    },
    {
      id: nextId++,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      ano: 1943,
      genero: "Infantil"
  },
    // ... outros livros com IDs incrementais
];

  
// Rota para retornar todos os livros
app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

function buscarLivroPorID(id){
  return livros.findIndex((livro) =>{
    return livro.id == Number(id);
  })
};

app.get('/livros/:id', (req, res) => {
  const index = buscarLivroPorID(req.params.id);
  res.status(200).json(livros[index]);

});

// app.get('/livro', (req, res) => {
//   res.status(200).send(livro);
// });

app.listen(3000, () =>{
    console.log("Servidor escutando.....");
});

app.get("/api", (req,res) =>{
    res.status(200).send("Boas vindas à imersão!");
});

