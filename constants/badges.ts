export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'achievement' | 'streak' | 'social' | 'game' | 'special';
  dateEarned: string | null;
  isLocked: boolean;
};

export const badges: Badge[] = [
  {
    id: '1',
    name: 'Early Bird',
    description: 'Complete your first morning training session',
    icon: '🌅',
    category: 'achievement',
    dateEarned: '2024-02-01',
    isLocked: false,
  },
  {
    id: '2',
    name: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
    category: 'streak',
    dateEarned: '2024-02-05',
    isLocked: false,
  },
  {
    id: '3',
    name: 'Social Butterfly',
    description: 'Invite 3 friends to join Ignite',
    icon: '🦋',
    category: 'social',
    dateEarned: null,
    isLocked: true,
  },
  {
    id: '4',
    name: 'Memory Master',
    description: 'Score perfect in 5 memory games',
    icon: '🧠',
    category: 'game',
    dateEarned: null,
    isLocked: true,
  },
  {
    id: '5',
    name: 'Speed Demon',
    description: 'Complete 10 speed challenges',
    icon: '⚡',
    category: 'game',
    dateEarned: null,
    isLocked: true,
  },
  {
    id: '6',
    name: 'Problem Solver',
    description: 'Complete 15 critical thinking challenges',
    icon: '💡',
    category: 'game',
    dateEarned: null,
    isLocked: true,
  },
  {
    id: '7',
    name: 'Focus Champion',
    description: 'Maintain focus for 30 minutes straight',
    icon: '🎯',
    category: 'achievement',
    dateEarned: null,
    isLocked: true,
  },
  {
    id: '8',
    name: 'Monthly Maven',
    description: 'Complete all daily challenges for a month',
    icon: '📅',
    category: 'streak',
    dateEarned: null,
    isLocked: true,
  },
  {
    id: '9',
    name: 'Community Leader',
    description: 'Help 5 friends improve their scores',
    icon: '👥',
    category: 'social',
    dateEarned: null,
    isLocked: true,
  },
  {
    id: '10',
    name: 'Night Owl',
    description: 'Complete evening training for 5 days',
    icon: '🦉',
    category: 'achievement',
    dateEarned: null,
    isLocked: true,
  },
]; 