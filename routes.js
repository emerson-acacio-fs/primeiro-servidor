const express = require("express");
const route = express.Router();
const {
  paginaInicial,
  trataPost,
} = require("./src/controllers/homeController");
const { paginaContato } = require("./src/controllers/contatoController");

function meuMiddleware(req, res, next) {
  console.log("passei no meddleware");
  next();
}

function meuMiddleware2(req, res, next) {
  console.log("passei no meddleware 2");
}
route.get("/", meuMiddleware, paginaInicial, meuMiddleware2);
route.post("/", trataPost);

route.get("/contatos", paginaContato);

module.exports = route;
