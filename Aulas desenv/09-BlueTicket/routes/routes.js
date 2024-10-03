const express = require('express')
const router = express.Router()
const eventosControllers = require("../controllers/enventosController.js")

router.post('/list', eventosControllers.cadastraEvento)
router.get('/list', eventosControllers.listarEnventos)
router.get('/listdetalhes', eventosControllers.detalhesEnvento)

module.exports = router