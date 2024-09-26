import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [pokemon, setPokemon] = useState(null)

  const carregarPokemon = async () => {

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
      setPokemon(response.data)
  }
  
carregarPokemon()

  return (
    <>
      <h1>Pokédex do Paulinho</h1>
      <h3>{pokemon?.name}</h3>
      <img src={pokemon?.sprites.front_default} alt="" />
    </>
  )
}

export default App
