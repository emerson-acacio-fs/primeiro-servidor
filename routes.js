const express = require("express");
const route = express.Router();
const { paginaInicial, trataPost } = require("./controllers/homeController");
const { paginaContato } = require("./controllers/contatoController");

route.get("/", paginaInicial);
route.post("/", trataPost);

route.get("/contatos", paginaContato);

module.exports = route;
