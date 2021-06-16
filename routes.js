const express = require("express");
const route = express.Router();
const {
  paginaInicial,
  trataPost,
} = require("./src/controllers/homeController");
const { paginaContato } = require("./src/controllers/contatoController");

route.get("/", paginaInicial);
route.post("/", trataPost);

route.get("/contatos", paginaContato);

module.exports = route;
