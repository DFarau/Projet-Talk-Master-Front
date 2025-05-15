"use client";
import {MagnifyingGlassIcon, ChevronRightIcon, ChevronDownIcon} from "@heroicons/react/24/outline";
import { useState } from "react";

interface TalkListProps {
    type: "admin"
}
export default function TalksList(TalkListProps: TalkListProps) {
    const isAdmin = TalkListProps.type === "admin";
    const [isActiv, setIsActiv] = useState(false);
    const [isDayActiv, setIsDayActiv] = useState(false);
    const handleClick = () => {
        setIsActiv((prev) => !prev);
    };
    const handleDayClick = () => {
        setIsDayActiv((prev) => !prev);
    }
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row items-center justify-between  gap-1 w-1/2">
                <MagnifyingGlassIcon className="h-7 w-7 text-gray-500/30" />
                <input
                    type="text"
                    placeholder="Rechercher..."
                    className="border border-gray-300 rounded-full px-3 p-1 w-full"
                />
                
            </div>
            <div className="w-full flex flex-col gap-1 shadow-lg p-5 rounded-lg">
                <div className="w-full flex flex-col shadow-md"></div>
                <div className="w-full flex flex-row items-center justify-between">
                    <h2 className="text-xl font-bold py-2">14/05/2025</h2>
                    {isDayActiv ? 
                                    <ChevronDownIcon className="h-7 w-7 text-gray-500/30 cursor-pointer hover:text-gray-500/70" onClick={handleDayClick}/>

                                    :
                                    <ChevronRightIcon className="h-7 w-7 text-gray-500/30 cursor-pointer hover:text-gray-500/70" onClick={handleDayClick}/>
                    }
                </div>
                {isDayActiv && (
                    <>
                    <div className="flex flex-row h-1 bg-gray-200/40 rounded-full w-1/2"></div>
                    <h3 className="text-lg font-medium py-2">En attente</h3>
                    <div id="todo" className="w-full flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="w-3/4 flex flex-col gap-2 shadow-md p-3 rounded-lg">
                                <div className="w-full flex flex-row gap-2  items-center justify-between">
                                    <div className=" flex flex-row gap-4 items-center justify-center">
                                        
                                            <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                                            <p>9h-10h</p>
                                            
                                        
                                        
                                            <p>Nom du talk</p>
                                            <p>Intervenant</p>
                                            
                                    
                                    </div>
                                    <div className="py-2 w-30 text-center rounded-lg bg-gray-200/40">
                                                <p>Statut </p>
                                    </div>
                                    {isActiv ? 
                                        <ChevronDownIcon className="h-5 w-5 text-gray-500/30 cursor-pointer hover:text-gray-500/70" onClick={handleClick}/>

                                        :
                                        <ChevronRightIcon className="h-5 w-5 text-gray-500/30 cursor-pointer hover:text-gray-500/70" onClick={handleClick}/>
                                    }
                                    
                                </div>
                                {isActiv && (
                                    <>
                                        <p className="w-full p-2">Description</p>
                                        <div className="p-2 gap-2 w-full flex flex-row items-center">
                                            <button className="bg-blue-800 text-white rounded-lg px-4 py-2 hover:bg-green-500 hover:cursor-pointer text-center">Accepter</button>
                                            <button className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-700 hover:cursor-pointer text-center">Refuser</button>
                                        </div>
                                    </>
                                

                                )}
                            </div>
                            
                        </div>        
                    </div>
                    <h3 className="text-lg font-medium py-2">Attribués</h3>
                    <div id="daytasks" className="w-full flex flex-row gap-2">
                                <div className="flex flex-col items-center w-1/5">
                                    <h4 className="text-lg font-medium py-2">Salle 1</h4>
                                    <div className="shadow-md p-3 flex-col gap-2 text-center rounded-lg w-full">
                                        <p className="text-gray-300 text-xs ">9h-10h</p>
                                        <h4 className="font-medium">Nom du talk</h4>
                                        <p className="text-gray-500 italic text-xs">Description </p>
                                        <p className="text-gray-500 italic text-xs">Intervenant</p>
                                    </div>
                                
                                </div>
                                <div className="flex flex-col items-center w-1/5">
                                    <h4 className="text-lg font-medium py-2">Salle 2</h4>
                                    <div className="shadow-md p-3 flex-col gap-2 text-center rounded-lg w-full">
                                        <p className="text-gray-300 text-xs ">9h-10h</p>
                                        <h4 className="font-medium">Nom du talk</h4>
                                        <p className="text-gray-500 italic text-xs">Description </p>
                                        <p className="text-gray-500 italic text-xs">Intervenant</p>
                                    </div>
                                    
                                </div>
                                <div className="flex flex-col items-center w-1/5">
                                    <h4 className="text-lg font-medium py-2">Salle 3</h4>
                                    <div className="shadow-md p-3 flex-col gap-2 text-center rounded-lg w-full">
                                        <p className="text-gray-300 text-xs ">9h-10h</p>
                                        <h4 className="font-medium">Nom du talk</h4>
                                        <p className="text-gray-500 italic text-xs">Description </p>
                                        <p className="text-gray-500 italic text-xs">Intervenant</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-1/5">
                                    <h4 className="text-lg font-medium py-2">Salle 4</h4>
                                    <div className="shadow-md p-3 flex-col gap-2 text-center rounded-lg w-full">
                                        <p className="text-gray-300 text-xs ">9h-10h</p>
                                        <h4 className="font-medium">Nom du talk</h4>
                                        <p className="text-gray-500 italic text-xs">Description </p>
                                        <p className="text-gray-500 italic text-xs">Intervenant</p>
                                    </div>

                                </div>
                                <div className="flex flex-col items-center w-1/5">
                                    <h4 className="text-lg font-medium py-2">Salle 5</h4>
                                    <div className="shadow-md p-3 flex-col gap-2 text-center rounded-lg w-full">
                                        <p className="text-gray-300 text-xs ">9h-10h</p>
                                        <h4 className="font-medium">Nom du talk</h4>
                                        <p className="text-gray-500 italic text-xs">Description </p>
                                        <p className="text-gray-500 italic text-xs">Intervenant</p>
                                    </div>
                                </div>

                    </div>

             
                </>
                )}
            </div>
        </div>
    );
}