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
            <main>
                <div className="flex flex-row border-b-2 border-gray-400 py-2 gap-10">
                    <img src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png" alt="logo cartola" className="w-40" />
                    <div className="flex flex-row  py-2 gap-5">
                        <input type="text" placeholder="Buscar time pelo nome " className=" rounded-xl p-2"/>
                        <button className="bg-[#DD4913] text-white py-2 px-10 rounded-xl">Buscar</button>
                    </div>
                </div>
            </main>
            <div>
                <ul className="flex flex-col gap-4">
                    {clubs.map((evento, key) =>
                        <Link href={`/Atletas/${evento.id}`} key={key}>
                            <li className="flex gap-2">

                                <img src={evento.escudos['60x60']} alt="" />

                                <div className="flex flex-col ">

                                    <p className="text-[#000] font-bold text-2xl">{evento.nome}</p>
                                    <p className="text-[#DD4913] text-xs">{evento.apelido}</p>

                                </div>
                            </li>
                            <div className="w-full border-b border-gray-400 my-4"></div>
                        </Link>
                    )}
                </ul>
            </div>
        </>
    );
}
