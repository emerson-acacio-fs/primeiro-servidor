const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    '<form action="/"  method="POST"> Nome: <input type="text" name="nome"> <button>Enviar</button></form> '
  );
});
app.post("/", (req, res) => {
  res.send("Recebio formulário!");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato!");
});

app.listen(3001, () => {
  console.log("Acessar http://localhost:3001/");
  console.log("Servidor executando na porta 3001");
});
