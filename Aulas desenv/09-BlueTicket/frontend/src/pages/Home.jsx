import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Home() {
    const [nome, setNome] = useState("");
    const [local, setLocal] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [url, setUrl] = useState("");

    const CadastraEvento = async () => {

        if (!nome || !local || !descricao || !preco || !url) {
            alert("Preencha os campos!");
            return;
        }

        const novoEvento = {
            id: 1,
            nome,
            local,
            descricao,
            preco,
            foto: url
        };

        try {
            // Envia os dados do evento via POST
            const resposta = await axios.post('http://localhost:3000/cadastraEvento', novoEvento);
            console.log(resposta.data);

            // Limpa os campos após o cadastro
            setNome("");
            setLocal("");
            setDescricao("");
            setPreco("");
            setUrl("");

        } catch (erro) {
            console.error("Erro ao cadastrar evento:", erro);
            alert("Ocorreu um erro ao cadastrar o evento.");
        }

        location.reload()
    };

    // mostra evento
    const [lista, setLista] = useState([]);

    const apiEventos = async () => {
        const url = `http://localhost:3000/`;
        const resposta = await axios.get(url);
        console.log(resposta.data);
        setLista(resposta.data);
    };

    useEffect(() => {
        apiEventos();
    }, []);

    return (
        <>
            <div>
                <h1>Cadastro de evento</h1>
                <div>
                    <input
                        type="text"
                        onChange={(event) => setNome(event.target.value)}
                        value={nome}
                        placeholder="Nome evento"
                    />
                    <input
                        type="text"
                        onChange={(event) => setLocal(event.target.value)}
                        value={local}
                        placeholder="Local evento"
                    />
                    <input
                        type="text"
                        onChange={(event) => setDescricao(event.target.value)}
                        value={descricao}
                        placeholder="Descricao evento"
                    />
                    <input
                        type="text"
                        onChange={(event) => setPreco(event.target.value)}
                        value={preco}
                        placeholder="Preco evento"
                    />
                    <input
                        type="text"
                        onChange={(event) => setUrl(event.target.value)}
                        value={url}
                        placeholder="Url foto evento"
                    />
                    <button onClick={CadastraEvento}>Cadastrar</button>
                </div>

                <h2>Eventos</h2>
                <div>
                    <ul>
                        {lista.map((evento, key) =>
                            <Link to={`/listadetalhes/${evento.id}`} key={key}>
                                <li>
                                    <p>{evento.nome}</p> 
                                    <img src={evento.foto} alt="foto_evento" />
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;
