import TalkList from "@/components/talkslist";



export default function TalkPage() {
    const isAdmin = true; 
  return (
    <div className="flex flex-col w-full items-center justify-center  bg-white p-5">
        <div className="w-3/4 flex flex-col h-100 items-start justify-start gap-2" >
            <h1 className="text-2xl font-bold mb-4">Gestion des Talks</h1>
            <p className="text-gray-700 mb-4">{isAdmin ? "Gérez ici l'ensemble des talks." : "Retrouvez ici tous talks et propositions de talk."}</p>
            <TalkList type="admin"/>
            
        </div>
    </div>
  );
}