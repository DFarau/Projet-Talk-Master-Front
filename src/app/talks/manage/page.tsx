import TalkList from "@/components/talkslist";



export default function TalkPage() {
    const isAdmin = true; 
  return (
    <div className="flex flex-col w-full md:text-start  items-center justify-center  bg-white md:p-5">
        <div className="w-full md:w-3/4 flex flex-col md:h-100 items-center md:items-start md:justify-start gap-3 md:gap-2 p-3 md:p-0" >
            <h1 className="text-3xl md:text-2xl font-bold mb-4">Gestion des Talks</h1>
            <p className="text-gray-700 mb-4">{isAdmin ? "Gérez ici l'ensemble des talks." : "Retrouvez ici tous talks et propositions de talk."}</p>
            <TalkList type="admin"/>
            
        </div>
    </div>
  );
}