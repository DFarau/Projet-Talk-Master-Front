"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, isSameDay } from "date-fns";
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

  return (
    <div className={cn("p-4", className)}>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => handleMonthChange("previous")}
          className="p-2 rounded hover:bg-gray-200"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-semibold">
          {format(currentMonth, "MMMM yyyy", { locale: fr })}
        </h2>
        <button
          onClick={() => handleMonthChange("next")}
          className="p-2 rounded hover:bg-gray-200"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 relative">
        {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
          <div key={day} className="text-center font-medium text-gray-600">
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
                setTooltipData(dayTalks, { top: 40, left: 0 }, userRole);
              }}
              onMouseLeave={() => setHoveredDay(null)}
              className="relative"
            >
              <button
                onClick={() => onDateChange(day)}
                className={cn(
                  "p-2 rounded text-center w-full",
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
