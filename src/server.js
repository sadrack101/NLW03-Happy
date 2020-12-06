//Importar uma lib (dependencia)
const express = require("express");
const path = require("path");

const pages = require("./pages.js");

//Iniciando o Express
const server = express();

server
    // utilizando os arquivos estáticos
    .use(express.urlencoded({ extended: true }))

    //configurar template engine
    .use(express.static("public"))
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "hbs")
  
    //rotas da aplicação
    .get("/", pages.index)
    .get("/orphanage", pages.orphanage)
    .get("/orphanages", pages.orphanages)
    .get("/create-orphanage", pages.createOrphanage)
    .post("/save-orphanage", pages.saveOrphanage);

//ligar o servidor
server.listen(5500, () => {
    console.log("Server started");
  });