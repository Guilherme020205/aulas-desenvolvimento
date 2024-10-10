"use client"

// import Image from "next/image";
import axios from "axios"; 
import { useEffect, useState } from "react";

// Definindo o tipo do clube
type Clube = {
  nome: string;
  // Você pode adicionar mais propriedades aqui se quiser, de acordo com o retorno da API
};

export default function Clubs() {

  // Use o tipo Clube[] para definir que clubs é uma lista de objetos do tipo Clube
  const [clubs, setClubs] = useState<Clube[]>([])
  
  useEffect(() => {
    buscaClubs()
  }, [])
  
  const buscaClubs = async () => {
    const url = `https://api.cartola.globo.com/clubes`
    const retorno = await axios.get(url)
    // Transformando o objeto em um array
    setClubs(Object.values(retorno.data))
    console.log(retorno.data)

    type Clube = {
      nome: string;
      // Você pode adicionar mais propriedades aqui se quiser, de acordo com o retorno da API
    };

  }

  return (
    <>
      <div>
        <ul>
          {clubs.map((evento, key) =>
            <li key={key}>
                <p>{evento.nome}</p>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
