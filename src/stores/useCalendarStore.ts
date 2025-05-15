import { create } from "zustand";

type CalendarState = {
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
  hoveredDay: Date | null;
  setHoveredDay: (date: Date | null) => void;
};

export const useCalendarStore = create<CalendarState>((set) => ({
  currentMonth: new Date(),
  setCurrentMonth: (date) => set({ currentMonth: date }),
  hoveredDay: null,
  setHoveredDay: (date) => set({ hoveredDay: date }),
}));