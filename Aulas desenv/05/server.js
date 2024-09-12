const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const batalhaRoutes = require('./routes/batalhaRoutes')

const app = express()
app.use(bodyParser.json())
app.use('/', batalhaRoutes)

app.listen(port, () => {
    console.log('Servidor rodando!')
})