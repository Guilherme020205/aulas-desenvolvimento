const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const comprasRoutes = require('./routes/compras')

const app = express()
app.use(bodyParser.json())
app.use('/compras', comprasRoutes)

app.listen(port, () => {
    console.log('Servidor rodando!')
})