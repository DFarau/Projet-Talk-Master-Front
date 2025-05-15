import { useMemo } from "react";
import { isSameDay } from "date-fns";
import { useCalendarStore } from "@/stores/useCalendarStore";

type Talk = {
  date: Date;
  isPastWithTalk: boolean;
  isWithTalk: boolean;
  isOrganizedTalk: boolean;
  isSpeakerTalk: boolean;
  isPublicTalk: boolean;
  title?: string;
};

export function useCalendarLogic(talks: Talk[], userRole: string) {
  const {
    currentMonth,
    setCurrentMonth,
    hoveredDay,
    setHoveredDay,
  } = useCalendarStore();

  const filteredTalks = useMemo(
    () =>
      talks.filter((talk) => {
        if (talk.isPastWithTalk || talk.isWithTalk) return true;
        if (userRole === "organizer" && talk.isOrganizedTalk) return true;
        if (userRole === "speaker" && talk.isSpeakerTalk) return true;
        if (userRole === "public" && talk.isPublicTalk) return true;
        return false;
      }),
    [talks, userRole]
  );

  const daysInMonth = useMemo(
    () =>
      Array.from(
        {
          length: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate(),
        },
        (_, i) => new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
      ),
    [currentMonth]
  );

  const handleMonthChange = (direction: "previous" | "next") => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() + (direction === "next" ? 1 : -1)))
    );
  };

  const getDayStyle = (day: Date) => {
    const talk = filteredTalks.find((e) => isSameDay(e.date, day));
    if (talk?.isPastWithTalk) return "bg-blue-100 text-black hover:bg-green-100";
    if (talk?.isWithTalk) return "bg-blue-800 text-white hover:bg-green-500";
    if (talk?.isOrganizedTalk) return "bg-yellow-500 text-white hover:bg-green-500";
    if (talk?.isSpeakerTalk) return "bg-green-800 text-white hover:bg-green-500";
    if (talk?.isPublicTalk) return "bg-green-800 text-white hover:bg-green-500";
    return "border-black border hover:bg-green-500 hover:border-green-500";
  };

  const getTalksForDay = (day: Date) =>
    filteredTalks.filter((e) => isSameDay(e.date, day));

  return {
    currentMonth,
    setHoveredDay,
    hoveredDay,
    handleMonthChange,
    daysInMonth,
    getDayStyle,
    getTalksForDay,
  };
}
