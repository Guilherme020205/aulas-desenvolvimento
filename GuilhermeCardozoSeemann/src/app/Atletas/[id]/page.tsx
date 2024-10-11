"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation'; // Importando useParams

type Atleta = {
  nome: string;
  apelido: string;
  foto: string;
  posicao_id: number;
  clube_id: number; // Caso você precise usar clube_id no futuro
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
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
  const [error, setError] = useState<string | null>(null); // Estado de erro

  useEffect(() => {
    // Verifica se id é uma string e chama a função de busca
    if (typeof id === 'string') {
      buscaClubs(id);
    } else if (Array.isArray(id)) {
      // Se id for um array, pegamos o primeiro elemento
      buscaClubs(id[0]);
    }
  }, [id]); // Dependência de 'id' para executar a função sempre que o ID mudar

  const buscaClubs = async (id: string) => {
    try {
      const url = `https://api.cartola.globo.com/atletas/mercado/${id}`; // Usa o ID da URL
      const retorno = await axios.get(url);
      const atletasArray = retorno.data.atletas;

      // Atualiza os estados
      setAtletas(atletasArray);
      setPosicoes(retorno.data.posicoes);
      setLoading(false); // Define loading como false após os dados serem carregados
    } catch (error) {
      console.error("Erro ao buscar os dados da API:", error);
      setError("Erro ao buscar os dados."); // Atualiza o estado de erro
      setLoading(false); // Define loading como false mesmo em erro
    }
  };

  if (loading) return <p>Carregando...</p>; // Mensagem de carregamento
  if (error) return <p>{error}</p>; // Mensagem de erro

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {atletas.length === 0 ? (<p>Nenhum atleta encontrado.</p>) : ( atletas.map((atleta, key) => (
            <li key={key} className="flex gap-2 items-center">

              <img src="https://s.sde.globo.com/media/person_role/2024/02/26/photo_220x220_EM6z7aN.png" alt="Foto" className="w-16 h-16 object-cover" />
              {/* <img src={atleta.foto} alt="Foto" className="w-16 h-16 object-cover" /> */}

              <div className="flex flex-col">

                <p className="text-gray-500">{atleta.apelido}</p>
                <p className="text-blue-600">{posicoes[atleta.posicao_id]?.nome}</p>

              </div>
            
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
