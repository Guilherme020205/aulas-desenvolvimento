"use client"

// import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


// Definindo o tipo do clube
type Clube = {
    id: number;
    nome: string;
    apelido: string;
    escudos: Escudo;
};

interface Escudo {
    "60x60": string;
    "45x45": string;
    "30x30": string;
}

export default function Clubs() {

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

            <div>
                <ul className="flex flex-col gap-4">
                    {clubs.map((evento, key) =>
                        <Link href={`/Atletas/${evento.id}`} key={key}>
                            <li className="flex gap-2">

                                <img src={evento.escudos['60x60']} alt="" />

                                <div className="flex flex-col ">

                                    <p>{evento.nome}</p>
                                    <p className="text-[#DD4913]">{evento.apelido}</p>

                                </div>

                            </li>
                        </Link>
                    )}
                </ul>
            </div>
        </>
    );
}
