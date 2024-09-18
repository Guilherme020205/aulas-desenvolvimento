const cervejas = [
    { ID: 1, NOME: "Heineken", ABV: "4.5%", TIPO: "Lager", NACIONALIDADE: "Holanda" },
    { ID: 2, NOME: "Corona", ABV: "5.2%", TIPO: "Pilsen", NACIONALIDADE: "México" },
    { ID: 3, NOME: "Patagônia", ABV: "4.2%", TIPO: "Amber Ale", NACIONALIDADE: "Argentina" },
    { ID: 4, NOME: "Saint'Beer", ABV: "3.5%", TIPO: "IPA", NACIONALIDADE: "Brasil" },
    { ID: 5, NOME: "Duff Beer", ABV: "3.5%", TIPO: "Pilsen", NACIONALIDADE: "EUA" },
    { ID: 6, NOME: "Coruja", ABV: "3.5%", TIPO: "Lager", NACIONALIDADE: "Brasil" },
    { ID: 7, NOME: "Brugse Zot", ABV: "6.2%", TIPO: "IPA", NACIONALIDADE: "Bélgica" }
];

exports.listar = (req, res) => {
    res.status(200).send(cervejas)
}

exports.listarPorNome = (req, res) => {
    const nomeCerveja = req.params.nome;

    const cervejasEncontradas = cervejas.filter(cerveja => cerveja.NOME.toLowerCase() === nomeCerveja.toLowerCase());

    if (cervejasEncontradas.length > 0) {
        res.status(200).send(cervejasEncontradas);
    } else {
        res.status(404).send({ mensagem: `Nenhuma cerveja encontrada com o nome '${nomeCerveja}'` });
    }
}

exports.listarPorParteDoNome = (req, res) => {
    const nomeCerveja = req.params.nome;

    const cervejasEncontradas = cervejas.filter(cerveja => 
        cerveja.NOME.toLowerCase().includes(nomeCerveja.toLowerCase())
    );

    if (cervejasEncontradas.length > 0) {
        res.status(200).send(cervejasEncontradas);
    } else {
        res.status(404).send({ mensagem: `Nenhuma cerveja encontrada contendo o nome '${nomeCerveja}'` });
    }
}

exports.listarPorTipo = (req, res) => {
    const nomeTipoCerveja = req.params.tipo;

    const cervejasEncontradas = cervejas.filter(cerveja => cerveja.TIPO.toLowerCase() === nomeTipoCerveja.toLowerCase());

    if (cervejasEncontradas.length > 0) {
        res.status(200).send(cervejasEncontradas);
    } else {
        res.status(404).send({ mensagem: `Nenhuma cerveja do tipo '${nomeTipoCerveja}' foi encontrada` });
    }
}

exports.listarPorNacionalidade = (req, res) => {
    const nomeNacionalidadeCerveja = req.params.nacionalidade;

    const cervejasEncontradas = cervejas.filter(cerveja => cerveja.NACIONALIDADE.toLowerCase() === nomeNacionalidadeCerveja.toLowerCase());

    if (cervejasEncontradas.length > 0) {
        res.status(200).send(cervejasEncontradas);
    } else {
        res.status(404).send({ mensagem: `Nenhuma cerveja com a nacionalidade '${nomeNacionalidadeCerveja}' foi encontrada` });
    }
}

exports.listarPorABV = (req, res) => {

    let cervejasOrdenadas = [...cervejas]; // [...cervejas] serve para fazer uma copia de cervejas
    
        for (let i = 0; i < cervejasOrdenadas.length - 1; i++) {
            for (let j = i + 1; j < cervejasOrdenadas.length; j++) {
                if (parseFloat(cervejasOrdenadas[i].ABV) > parseFloat(cervejasOrdenadas[j].ABV)) {
                    let temp = cervejasOrdenadas[i];
                    cervejasOrdenadas[i] = cervejasOrdenadas[j];
                    cervejasOrdenadas[j] = temp;
                }
            }
        }
    
        // Responder com a lista de cervejas ordenada
        res.status(200).send(cervejasOrdenadas);
    }
    


