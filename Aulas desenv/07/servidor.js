// inicializa express e coneção com as rotas 

import express  from "express";

import rotaProdutos from "./routes/produtos.js"

const app = express()



//Utilizar json  nas req
app.use(express.json())

//Informa arquivo de rotas
app.use(rotaProdutos)


app.listen(3000, () => console.log("Servidor online :P"))