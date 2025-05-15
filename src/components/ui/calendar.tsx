"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, isSameDay, addMonths, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/components/ui/tooltip";
import { useCalendarLogic } from "@/hooks/Calendar";
import { useTooltipStore } from "@/stores/useTooltipStore";

type Talk = {
  date: Date;
  isPastWithTalk: boolean;
  isWithTalk: boolean;
  isOrganizedTalk: boolean;
  isSpeakerTalk: boolean;
  isPublicTalk: boolean;
  title?: string;
};

export function Calendar({
  selectedDate,
  onDateChange,
  className,
  talks = [],
  userRole = "public",
}: {
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
  className?: string;
  talks?: Talk[];
  userRole?: string;
}) {
  const {
    currentMonth,
    handleMonthChange,
    hoveredDay,
    setHoveredDay,
    daysInMonth,
    getDayStyle,
    getTalksForDay,
  } = useCalendarLogic(talks, userRole);

  const setTooltipData = useTooltipStore((state) => state.setTooltipData);

  const previousMonth = subMonths(currentMonth, 1);
  const nextMonth = addMonths(currentMonth, 1)

  return (
    <div className={cn("p-4 flex flex-col h-full", className)}>
      <div className="flex items-center justify-between mb-4 h-24">
      <button
          onClick={() => handleMonthChange("previous")}
          className="text-lg font-bold uppercase text-[30px] p-2 rounded-full hover:bg-gray-100 text-gray-400 w-100 cursor-pointer"
        >
          {format(previousMonth, "MMMM", { locale: fr })}
        </button>
        <h2 className="text-lg font-bold uppercase text-[30px] w-100 flex justify-center pt-12">
          {format(currentMonth, "MMMM", { locale: fr })}
        </h2>
        <button
          onClick={() => handleMonthChange("next")}
          className="text-lg font-bold uppercase text-[30px] p-2 rounded-full hover:bg-gray-100 text-gray-400 w-100 cursor-pointer"
        >
          {format(nextMonth, "MMMM", { locale: fr })}
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 flex-grow text-[25px]">
        {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
          <div key={day} className="flex flex-col justify-end items-center text-center text-black uppercase font-extrabold">
            {day}
          </div>
        ))}

        {daysInMonth.map((day) => {
          const dayTalks = getTalksForDay(day);

          return (
            <div
              key={day.toISOString()}
              onMouseEnter={() => {
                setHoveredDay(day);
                setTooltipData(dayTalks, { top: 80, left: -40 }, userRole);
              }}
              onMouseLeave={() => setHoveredDay(null)}
              className="relative flex items-center justify-center"
            >
              <button
                onClick={() => onDateChange(day)}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm transition-colors hover:bg-blue-100 cursor-pointer",
                  selectedDate?.toDateString() === day.toDateString()
                    ? "ring-2 ring-blue-500"
                    : "",
                  getDayStyle(day)
                )}
              >
                {day.getDate()}
              </button>
              {hoveredDay && isSameDay(hoveredDay, day) && <Tooltip />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
