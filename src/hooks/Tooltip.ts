import { useTooltipStore } from '@/stores/useTooltipStore';

export function useTooltipLogic() {
  const { talks, userRole } = useTooltipStore();

  const getTooltipContent = () => {
    if (userRole === 'public') {
      if (talks.some((talk) => talk.isPastWithTalk)) return 'Talks auxquels vous avez participés';
      if (talks.some((talk) => talk.isWithTalk || talk.isPublicTalk)) return 'Talk du jour';
    }

    if (userRole === 'speaker') {
      if (talks.some((talk) => talk.isPastWithTalk)) return 'Talks auxquels vous avez participés';
      if (talks.some((talk) => talk.isWithTalk)) return 'Talks du jour';
      if (talks.some((talk) => talk.isSpeakerTalk)) return 'Vos interventions du jour';
    }

    if (userRole === 'organizer') {
      if (talks.some((talk) => talk.isPastWithTalk)) return 'Talks passés';
      if (talks.some((talk) => talk.isWithTalk)) return 'Talks validés';
      if (talks.some((talk) => talk.isOrganizedTalk)) return 'Talks en attente de validation';
    }

    return 'Aucun titre disponible';
  };

  return { getTooltipContent };
}
