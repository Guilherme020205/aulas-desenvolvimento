const express = require('express')
const router = express.Router()
const controller = require("../controllers/batalhas")

router.get('/herois', controller.listarHerois)
router.post('/cadastrar-heroi', controller.cadHeroi)

router.get('/viloes', controller.listarViloes)
router.post('/cadastrar-vilao', controller.cadVilao)

router.post('/batalhar/:idHeroi/:idVilao', controller.batalha)

module.exports = router