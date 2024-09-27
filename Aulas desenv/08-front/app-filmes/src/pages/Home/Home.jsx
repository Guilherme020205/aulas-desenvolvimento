import { useState } from "react"
// import { Link } from "react-router-dom"

function Home() {

  const [apiFilmes, setApiFilmes] = useState(null)

  const carregarApiFilmes = async () => {

    const response = await axios.get(`https://api.themoviedb.org/3/`)
    setApiFilmes(response.data)
  }
  carregarApiFilmes()

  return (
    <>
      <p>{carregarApiFilmes()}</p>
    </>
  )
}

export default Home
