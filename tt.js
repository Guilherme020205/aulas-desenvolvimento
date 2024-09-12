if (!heroi || !vilao) {
  return res.status(404).send({ mensagem: 'Herói ou vilão não encontrado.' });
}