import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [titulo, setTitulo] = useState('')
    const [filmes, setFilmes] = useState([])

    const buscarFilmes = async () => {
        const url = `https://www.omdbapi.com/?apikey=28d0dee8&s=${titulo}`
        const resposta = await axios.get(url)
        setFilmes(resposta.data.Search)
    }

    return (
        <>
            <h1>Filmes</h1>
            <input
                type='text'
                onChange={(event) => setTitulo(event.target.value)}
                value={titulo}
                id='idBusca'
            />
            <button onClick={buscarFilmes}>Buscar</button>
            <ul>
                {filmes.map((filme, key) =>
                    <Link to={`/filme/${filme.imdbID}`} key={key}>
                        <li >
                            <p>{filme.Title}</p>
                            <img src={filme.Poster} width={90} alt="Capa do filme" />
                        </li>
                    </Link>
                )}
            </ul>
        </>
    )
}

export default Home
