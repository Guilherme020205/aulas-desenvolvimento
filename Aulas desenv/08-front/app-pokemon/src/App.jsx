import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [pokemon, setPokemon] = useState(null)
  const [idPokemon, setIdPokemon] = useState(0)

  const carregarPokemon = async () => {

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
      setPokemon(response.data)
  }
carregarPokemon()

const proximoPokemon = () => {

  setIdPokemon(idPokemon + 1)

}
const anteriorPokemon = () => {

  setIdPokemon(idPokemon - 1)

}

  return (
    <>
      <h1>Pokédex do Paulinho</h1>
      <h3>{pokemon?.name}</h3>
      <img src={pokemon?.sprites.front_default} alt="" />

      <button onClick={anteriorPokemon}>Anterior</button>n=
      <button onClick={proximoPokemon}>Soma</button>

    </>
  )
}

export default App
