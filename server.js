const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3001, () => {
  console.log("Acessar http://localhost:3001/");
  console.log("Servidor executando na porta 3001");
});
