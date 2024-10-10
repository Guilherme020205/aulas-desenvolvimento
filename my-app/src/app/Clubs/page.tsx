"use client"

// import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

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
  }

  return (
    <>
      <div className="w-full flex flex-col items-center gap-4">

        <Link className="w-full max-w-96 bg-white text-center py-2 rounded-xl font-bold" href={"/"}>Home</Link>
        <Link className="w-full max-w-96 bg-white text-center py-2 rounded-xl font-bold" href={"/Atletas"}>Atletas Pontuados</Link>

      </div>
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
