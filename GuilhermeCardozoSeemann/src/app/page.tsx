import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
       
        <div className="w-full flex flex-col items-center gap-4">
          
          <Link className="w-full max-w-96 bg-white text-center py-2 rounded-xl font-bold" href={"/Clubs"}>Clubs</Link>
          <Link className="w-full max-w-96 bg-white text-center py-2 rounded-xl font-bold" href={"/Atletas"}>Atletas</Link>
        
        </div>

      </div>
    </>
  );
}
