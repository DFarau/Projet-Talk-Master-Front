"use client";

import React, { useState } from "react";
import {TrashIcon} from "@heroicons/react/24/solid";

interface TalkFormProps {
  type: "create" | "update" ;
  
}

const TalkForm: React.FC<TalkFormProps> = ({ type }) => {
  const isCreate = type === "create";
  const isUpdate = type === "update";

  return (
    <div className="flex md:h-screen bg-white w-full justify-center items-center">
      <div className="flex items-center justify-center w-full md:w-1/3">
        <div className="bg-white shadow-md border rounded-lg p-6 md:p-8 w-full max-w-md ">
          <h1 className="font-medium text-3xl md:text-2xl  mb-5">{isCreate ? "Proposez un nouveau talk" : "Mettez à jour votre talk"}</h1>
          
          <form className="space-y-4">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col w-full gap-2">
                  <label htmlFor="title" className="block text-lg md:text-md font-normal w-full ">
                    Titre du talk
                  </label>
                  <input
                    type="text"
                    id="title"
                    className=" block w-full h-12 px-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-md  md:text-sm"
                    placeholder="Renseignez ici le titre du talk"
                  />
              </div>
                
                <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div className="flex flex-col w-full md:w-1/2 gap-2">
                      <label htmlFor="level" className="block text-lg md:text-md font-normal">
                        Niveau de difficulté
                      </label>
                      <select
                        id="level"
                        className="block w-full h-12 px-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-md  md:text-sm"
                      >
                        <option value="beginner">Débutant</option>
                        <option value="intermediate">Intermédiaire</option>
                        <option value="advanced">Avancé</option>
                      </select>
                    </div>
                    
                    <div className="flex flex-col w-full md:w-1/2 gap-2">
                      <label htmlFor="date" className="block text-lg md:text-md font-normal">
                        Date du talk
                      </label>
                      <input
                        type="date"
                        id="date"
                        className=" block w-full h-12 px-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-md  md:text-sm"
                        />
                    </div>
                </div>
                
                <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div className="flex flex-col w-full md:w-1/2 gap-2">
                    <label htmlFor="start" className="text-lg md:text-md font-normal">
                    Horaire de début
                    </label>
                    <input 
                    type="time"
                    id="start"
                    min="09:00"
                    max="19:00"
                    className="w-full p-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-md  md:text-sm"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2  gap-2">
                  <label htmlFor="end" className="text-lg md:text-md font-normal">
                      Horaire de fin
                    </label>
                    <input
                      type ="time"
                      id="end"
                      className="w-full p-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-md  md:text-sm"
                    />
                  </div>
                    
                </div>
                <div className="flex flex-col w-full  gap-2">
                  <label htmlFor="description" className="block text-lg md:text-md font-normal">
                    Description
                  </label>
                  <textarea
                    id="description"
                    className=" block w-full h-32 p-4  rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-md  md:text-sm"
                    placeholder="Renseignez ici la description du talk"
                  />
                </div>

                
                
            </div>
            
            <button
              type="submit"
              className="w-full h-12 bg-blue-800 hover:bg-green-500 hover:cursor-pointer  text-lg md:text-md font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              {isCreate
              ? "Proposer le talk"
              : "Mettre à jour le talk"}

            </button>

            {isUpdate && (
              <button
                type="button"
                className="w-full flex flex-row items-center justify-center h-12 bg-red-500 hover:bg-red-700 text-lg md:text-md hover:cursor-pointer font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                onClick={() => {}}
              >
                Supprimer le Talk
                <TrashIcon className="h-5 w-5 inline-block ml-2" />
              </button>
            )}
      
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default TalkForm;