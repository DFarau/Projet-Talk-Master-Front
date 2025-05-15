"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Planning() {
  const [date, setDate] = React.useState<Date | null>(new Date());

  const fetchMockData = () => ({
    users: [
      { id: 1, role: "speaker" },
      { id: 2, role: "organizer" },
      { id: 3, role: "public" },
    ],
    talks: [
      {
        id: 1,
        title: "Talk 1",
        description: "Description du talk 1",
        duration: 60,
        level: "beginner",
        status: "scheduled",
        speaker_id: 1,
        timeslot: { start: new Date(2025, 4, 10, 10, 0), end: new Date(2025, 4, 10, 11, 0) },
        room_id: 201,
      },
      {
        id: 2,
        title: "Talk 2",
        description: "Description du talk 2",
        duration: 90,
        level: "intermediate",
        status: "scheduled",
        speaker_id: 1,
        timeslot: { start: new Date(2025, 4, 18, 14, 0), end: new Date(2025, 4, 18, 15, 30) },
        room_id: 202,
      },
      {
        id: 3,
        title: "Talk 3",
        description: "Description du talk 3",
        duration: 45,
        level: "advanced",
        status: "pending",
        speaker_id: 1,
        timeslot: { start: new Date(2025, 4, 20, 9, 0), end: new Date(2025, 4, 20, 9, 45) },
        room_id: 203,
      },
      {
        id: 4,
        title: "Talk 4",
        description: "Description du talk 4",
        duration: 90,
        level: "intermediate",
        status: "scheduled",
        speaker_id: 2,
        timeslot: { start: new Date(2025, 4, 18, 14, 0), end: new Date(2025, 4, 18, 15, 30) },
        room_id: 202,
      },
      {
        id: 5,
        title: "Talk 5",
        description: "Description du talk 5",
        duration: 45,
        level: "advanced",
        status: "pending",
        speaker_id: 3,
        timeslot: { start: new Date(2025, 4, 20, 9, 0), end: new Date(2025, 4, 20, 9, 45) },
        room_id: 203,
      },
    ],
  });

  const { users, talks: talkData } = fetchMockData();
  const currentUser = users[0];

  const talks = React.useMemo(() => {
    const today = new Date();

    return talkData.map((talk) => ({
      date: talk.timeslot.start,
      isPastWithTalk: talk.timeslot.start < today,
      isWithTalk: talk.status === "scheduled",
      isOrganizedTalk: currentUser.role === "organizer",
      isSpeakerTalk: currentUser.role === "speaker" && talk.speaker_id === currentUser.id,
      isPublicTalk: currentUser.role === "public",
      title: talk.title,
    }));
  }, [talkData, currentUser]);

  return (
    <div className="flex h-screen">
      <aside className="w-1/5 bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Date du jour</h2>
        <ul className="space-y-2">
          <li className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
            Prochain talk
          </li>
          <li className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer">Bouton 1</li>
          <li className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer">Bouton 2</li>
        </ul>
      </aside>

      <main className="w-4/5 p-6 flex flex-col">
        <Calendar
          selectedDate={date}
          onDateChange={setDate}
          className="w-full h-full"
          talks={talks}
          userRole={currentUser.role}
        />
      </main>
    </div>
  );
}