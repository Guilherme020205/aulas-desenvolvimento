import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from "react"

function Evento() {
    const { id } = useParams()
    const [evento, setEvento] = useState(null)

    useEffect(() => {
        buscarEvento(id)
    }, [])

    const buscarEvento = async (id) => {
        const url = `http://localhost:3000/listadetalhes/${id}`
        const resposta = await axios.get(url)
        setEvento(resposta.data)
        console.log(resposta.data)
    }

    return (
        <>
            <h1>{evento?.nome}</h1>
            <img src={evento?.foto} alt={evento?.nome} />
            <p>{evento?.local}</p>
            <p>{evento?.preco}</p>
            <span>{evento?.descricao}</span>
        </>
    )
}
export default Evento
