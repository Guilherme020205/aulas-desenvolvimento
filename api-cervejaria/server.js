const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const routesCervejas = require('./routes/routesCervejas.js')

const app = express()
app.use(bodyParser.json())
app.use('/', routesCervejas)

app.listen(port, () => {
    console.log("Servidor Rodando!")
})