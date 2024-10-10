"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

// Definindo o tipo do atleta com base no retorno da API
type Atleta = {
  id: number;
  apelido: string;
  clube_id: number;
};

// Definindo o tipo do clube com base no retorno da API
type Clube = {
  id: number;
  nome: string;
};

export default function Atletas() {

  // Definindo estados para atletas e clubes
  const [atletas, setAtletas] = useState<Atleta[]>([]);
  const [clubes, setClubes] = useState<{ [key: number]: Clube }>({});

  useEffect(() => {
    buscaDados();
  }, []);

  const buscaDados = async () => {
    const url = `https://api.cartola.globo.com/atletas/pontuados/2`;
   
      const retorno = await axios.get(url);
      // Guardando os clubes como um objeto, onde a chave é o ID do clube
      setClubes(retorno.data.clubes);
      // Transformando o objeto de atletas em uma lista
      const atletasData = Object.values(retorno.data.atletas) as Atleta[];
      setAtletas(atletasData); // Atualizando o estado com a lista de atletas
      console.log(retorno.data);

  };

  return (
    <>
      <div className="w-full flex flex-col items-center gap-4">

        <Link className="w-full max-w-96 bg-white text-center py-2 rounded-xl font-bold" href={"/"}>Home</Link>
        <Link className="w-full max-w-96 bg-white text-center py-2 rounded-xl font-bold" href={"/Clubs"}>Clubs</Link>

      </div>
      <div>
        <ul>
          {atletas.map((atleta, key) => {
            const clube = clubes[atleta.clube_id]; // Encontrando o clube do atleta pelo clube_id
            return (
              <li className="flex flex-row justify-between" key={key}>
                <p>{atleta.apelido}</p>
                <p>{clube ? clube.nome : "Clube não encontrado"}</p> 
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
