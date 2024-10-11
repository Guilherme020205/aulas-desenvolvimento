import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
       
        <div className="w-full flex flex-col items-center gap-4">
          <p>Aluno: Guilherme Cardozo Seemann</p> 
          <Link className="w-full max-w-96 bg-slate-800 text-white text-center py-2 rounded-xl font-bold" href={"/Clubs"}>Clubs</Link>
        
        </div>

      </div>
    </>
  );
}
