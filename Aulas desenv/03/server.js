const express = require('express');
const app = express();
const port = 3000;
//Definindo o tipo de dados do corpo como JSON
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const compras = [
    { id: 1, descricao: 'PlayStation 5', preco: 5000.00 },
    { id: 2, descricao: 'Camisa Grêmio', preco: 250.99 },
    { id: 3, descricao: 'Coxinha do Araújo', preco: 7.65 },
]



//Mapeando os 4 métodos

//localhost:3000/compras
app.get('/compras', (req, res) => {
    res.json({ message: compras })
});

app.post('/compras', (req, res) => {
    const { id, descricao, preco } = req.body;
    compras.push({ id, descricao, preco })

    return res.json(compras)
});

app.delete('/compras/:index', (req, res) => {
    const { index } = req.params;
    compras.splice(index, 1)

    return res.json(compras)
});

app.get('/compras-total', (req, res) => {
    function somaTotal(lista) {
        return lista.reduce((total, item) => total + item.preco, 0);
    }

    const totalCarrinho = somaTotal(compras).toFixed(2);
    res.json({ message: totalCarrinho })
});

app.listen(port, () => {
    console.log('Servidor express rodando');
});