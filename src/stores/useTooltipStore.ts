import { create } from 'zustand';

type Talk = {
  title?: string;
  isPastWithTalk?: boolean;
  isWithTalk?: boolean;
  isPublicTalk?: boolean;
  isSpeakerTalk?: boolean;
  isOrganizedTalk?: boolean;
};

type TooltipState = {
  talks: Talk[];
  position?: { top: number; left: number };
  userRole: string;
  setTooltipData: (talks: Talk[], position?: { top: number; left: number }, userRole?: string) => void;
};

export const useTooltipStore = create<TooltipState>((set) => ({
  talks: [],
  position: { top: 0, left: 0 },
  userRole: 'public',
  setTooltipData: (talks, position, userRole) =>
    set((state) => ({
      talks,
      position: position ?? state.position,
      userRole: userRole ?? state.userRole,
    })),
}));
