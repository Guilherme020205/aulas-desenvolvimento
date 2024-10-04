const express = require('express')
const router = express.Router()
const eventosControllers = require("../controllers/enventosController.js")

router.get('/', eventosControllers.listarEnventos)
router.post('/cadastraEvento', eventosControllers.cadastraEvento)
router.get('/listadetalhes/:id', eventosControllers.detalhesEnvento)

module.exports = router