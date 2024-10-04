import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from "react"

function Filme() {
    const { id } = useParams()
    const [filme, setFilme] = useState([])

    useEffect(() => {
        buscarFilmePeloId(id)
    }, [])

    const buscarFilmePeloId = async (id) => {
        const url = `https://www.omdbapi.com/?apikey=28d0dee8&i=${id}`
        const resposta = await axios.get(url)
        setFilme(resposta.data)
    }

    return (
        <div>
            <h1>{filme?.Title}</h1>
            <img src={filme?.Poster} width={100} alt="Poster do Filme" />
            <p>{filme?.Plot}</p>
            <p>{filme?.Runtime}</p>
            <p>{filme?.Director}</p>
            <p>{filme?.Genre}</p>
        </div>
    )
}
export default Filme