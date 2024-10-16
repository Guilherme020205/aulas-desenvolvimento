"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';

type Atleta = {
  nome: string;
  apelido: string;
  foto: string;
  posicao_id: number;
};

type Posicoes = {
  [key: number]: {
    nome: string;
  };
};


export default function Atletas() {

  const { id } = useParams(); // Captura o ID da URL

  const [atletas, setAtletas] = useState<Atleta[]>([]);
  const [posicoes, setPosicoes] = useState<Posicoes>({});

  useEffect(() => {
    // Ve se id e uma string e chama a funcao de busca
    if (typeof id === 'string') {
      buscaClubs(id);
    } else if (Array.isArray(id)) {
      // Se id for um array pega o primeiro elemento
      buscaClubs(id[0]);
    }
  }, [id]);

  const buscaClubs = async (id: string) => {

    const url = `https://api.cartola.globo.com/atletas/mercado/${id}`;
    const retorno = await axios.get(url);
    const atletasArray = retorno.data.atletas;

    setAtletas(atletasArray);
    setPosicoes(retorno.data.posicoes);

  };

  return (<>
    <main>
      <div className="flex flex-row border-b-2 border-gray-400 py-2 gap-10">
        <img src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png" alt="logo cartola" className="w-40" />
        <div className="flex flex-row  py-2 gap-5">
          <input type="text" placeholder="Buscar time pelo nome " className=" rounded-xl p-2" />
          <button className="bg-[#DD4913] text-white py-2 px-10 rounded-xl">Buscar</button>
        </div>
      </div>
    </main>
    <div className="flex flex-col justify-center items-center">

      <img src="" alt="logo" className="w-8 object-cover my-20" />

      <ul className="w-[1000px] grid grid-cols-4 gap-4">
        {atletas.map((atleta, key) => (

          <li key={key} className="flex flex-col gap-2 items-center text-center">
            {/* <img
              src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/06/52995026633_1a363511b0_o-e1687484938274.jpg"
              alt="Foto"
              className="w-28 h-28 object-cover"
            /> */}

            <img src={atleta.foto} alt="Foto" className="w-16 h-16 object-cover" />

            <div className="flex flex-col">
              <p className="text-[#000] font-bold text-[25px]">{atleta.apelido}</p>
              <p className="text-[#DD4913] text-sm">{posicoes[atleta.posicao_id]?.nome}</p>
            </div>


          </li>
        ))}
      </ul>
    </div>
  </>
  );
}
