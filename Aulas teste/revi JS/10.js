// Descrição do Carro
function descreverCarro(carro) {
    return `O carro é um ${carro.modelo} ${carro.ano} ${carro.marca}`;
}
const carro = { marca: "Ford", modelo: "Mustang", ano: 2020 };
console.log(descreverCarro(carro));
