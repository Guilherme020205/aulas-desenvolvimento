import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
       
        <h1 className="text-white text-[100px] my-10">Olá Mundo 👈(ﾟヮﾟ👈)</h1>

        <div className="w-full flex flex-col items-center gap-4">
          
          <Link className="w-full max-w-96 bg-white text-center py-2 rounded-xl font-bold" href={"/Clubs"}>Clubs</Link>
          <Link className="w-full max-w-96 bg-white text-center py-2 rounded-xl font-bold" href={"/Atletas"}>Atletas Pontuados</Link>
        
        </div>

      </div>
    </>
  );
}
