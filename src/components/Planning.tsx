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
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString("fr-FR", { day: "2-digit" });
  const currentMonth = currentDate
    .toLocaleDateString("fr-FR", { month: "long" })
    .charAt(0)
    .toUpperCase() + currentDate.toLocaleDateString("fr-FR", { month: "long" }).slice(1);
  const currentYear = currentDate.toLocaleDateString("fr-FR", { year: "numeric" });
  return (
    <div className="flex h-screen">
      <aside className="w-1/5 h-full bg-gray-100 p-8 flex flex-col items-center justify-around gap-8">
        <div className="flex flex-row items-center gap-2">
            <p className="text-4xl font-bold">{currentDay}</p>
          <div className="flex-col ">
            <p className="text-md font-medium">{currentMonth}</p>
            <p className="text-md font-medium">{currentYear}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold mb-4">Prochains Talks</h2>
          <ul className="list-disc pl-5">
            {talks
              .filter((talk) => talk.isWithTalk && !talk.isPastWithTalk)
              .slice(0, 3)
              .map((talk, index) => (
                <li key={index} className="text-sm">
                  <span>
                  {talk.date.getHours()}h
                  {talk.date.getMinutes() !== 0 ? `:${talk.date.getMinutes().toString().padStart(2, "0")} ` : ""}
                  - 
                  {(talkData[index].timeslot.end.getHours())}h
                  {talkData[index].timeslot.end.getMinutes() !== 0 ? `${talkData[index].timeslot.end.getMinutes().toString().padStart(2, "0")}` : ""}
                  </span>
                  {" "}
                  {talk.title}
                  
                </li>
              ))}
          </ul>
        </div>
        <button className="border-2 border-blue-600 text-blue-600 rounded-md px-4 py-2 hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer">
          Accéder à mes talks
        </button>
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