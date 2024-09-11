// IMPORTAR EXPRESS
import express from "express"

const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
    res.status(200).send("Olá mundo")
});

app.post('/api/:nome', (req, res) => {
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)
    res.status(200).send("Req post recebido!")
});


app.listen(3000, () => console.log("Servidor on"))