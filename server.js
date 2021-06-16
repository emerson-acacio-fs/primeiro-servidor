const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(
    '<form action="/"  method="POST"> Nome: <input type="text" name="nome"> <button>Enviar arquivo</button></form> '
  );
});
app.get("/testes/:idUsuarios?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send("oi");
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Recebio formulário!");
});

app.listen(3001, () => {
  console.log("Acessar http://localhost:3001/");
  console.log("Servidor executando na porta 3001");
});
