'use client';

import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

interface TalkFormProps {
  type: 'create' | 'update';
}

interface TalkData {
  title: string;
  level: string;
  date: string | null;
  start: string | null;
  end: string | null;
  description: string;
}

const TalkForm: React.FC<TalkFormProps> = ({ type }) => {
  const isCreate = type === 'create';
  const isUpdate = type === 'update';

  const [talkData, setTalkData] = useState<TalkData>({
    title: '',
    level: 'beginner',
    date: null,
    start: null,
    end: null,
    description: '',
  });

  const handleCreateTalk = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data = {
      title: (formData.get('title') ?? '') as string,
      level: (formData.get('level') ?? '') as string,
      date: formData.get('date') as string | null,
      start: formData.get('start') as string | null,
      end: formData.get('end') as string | null,
      description: (formData.get('description') ?? '') as string,
    };
    setTalkData(data);

    console.log('Talk data:', talkData);
  };

  return (
    <div className="flex h-screen bg-white w-full justify-center items-center">
      <div className="flex items-center justify-center w-1/3">
        <div className="bg-white shadow-md border rounded-lg p-8 w-full max-w-md ">
          <h1 className="font-medium text-[25px]  mb-5">
            {isCreate ? 'Proposez un nouveau talk' : 'Mettez à jour votre talk'}
          </h1>

          <form
            className="space-y-4"
            onSubmit={isCreate ? handleCreateTalk : undefined}
            method="POST"
          >
            <div className="flex flex-col gap-3">
              <label htmlFor="title" className="block text-[16px] font-normal w-full ">
                Titre du talk
              </label>
              <input
                onChange={e => setTalkData({ ...talkData, title: e.target.value })}
                defaultValue={talkData.title}
                type="text"
                id="title"
                className="mt-1 mb-7 block w-full h-12 px-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-[14px]"
                placeholder="Renseignez ici le titre du talk"
              />
              <div className="flex w-full flex-row items-center justify-between gap-5">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="level" className="block text-[16px] font-normal">
                    Niveau de difficulté
                  </label>
                  <select
                    onChange={e => setTalkData({ ...talkData, level: e.target.value })}
                    defaultValue={talkData.level}
                    id="level"
                    className="mt-1 mb-7 block w-full h-12 px-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-[14px]"
                  >
                    <option value="beginner">Débutant</option>
                    <option value="intermediate">Intermédiaire</option>
                    <option value="advanced">Avancé</option>
                  </select>
                </div>

                <div className="flex flex-col w-1/2">
                  <label htmlFor="date" className="block text-[16px] font-normal">
                    Date du talk
                  </label>
                  <input
                    onChange={e => setTalkData({ ...talkData, date: e.target.value })}
                    defaultValue={talkData.date ?? ''}
                    type="date"
                    id="date"
                    className="mt-1 mb-7 block w-full h-12 px-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-[14px]"
                  />
                </div>
              </div>

              <div className="flex w-full flex-row items-center justify-between gap-5">
                <div className="flex flex-col w-1/2 ">
                  <label htmlFor="start" className="text-[16px] font-normal">
                    Horaire de début
                  </label>
                  <input
                    onChange={e => setTalkData({ ...talkData, start: e.target.value })}
                    defaultValue={talkData.start ?? ''}
                    type="time"
                    id="start"
                    min="09:00"
                    max="19:00"
                    className="w-full p-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-[14px]"
                  />
                </div>
                <div className="flex flex-col w-1/2 ">
                  <label htmlFor="end" className="text-[16px] font-normal">
                    Horaire de fin
                  </label>
                  <input
                    onChange={e => setTalkData({ ...talkData, end: e.target.value })}
                    defaultValue={talkData.end ?? ''}
                    min="09:00"
                    max="19:00"
                    type="time"
                    id="end"
                    className="w-full p-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-[14px]"
                  />
                </div>
              </div>
              <label htmlFor="description" className="block text-[16px] font-normal">
                Description
              </label>
              <textarea
                onChange={e => setTalkData({ ...talkData, description: e.target.value })}
                defaultValue={talkData.description}
                id="description"
                className="mt-1 mb-7 block w-full h-32 px-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-[14px]"
                placeholder="Renseignez ici la description du talk"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-blue-800 hover:bg-green-500 hover:cursor-pointer  text-[16px] font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              {isCreate ? 'Proposer le talk' : 'Mettre à jour le talk'}
            </button>

            {isUpdate && (
              <button
                type="button"
                className="w-full flex flex-row items-center justify-center h-12 bg-red-500 hover:bg-red-700 text-[16px] hover:cursor-pointer font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
