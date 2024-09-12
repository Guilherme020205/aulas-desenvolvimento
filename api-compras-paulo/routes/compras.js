const express = require('express')
const router = express.Router()
const controller = require('../controllers/compras')

router.get('/listar', controller.listar)
router.post('/cadastrar', controller.cadastrar)
router.get('/valor-total', controller.valorTotal)
router.delete('/deletar/:id', controller.deletar)

module.exports = router