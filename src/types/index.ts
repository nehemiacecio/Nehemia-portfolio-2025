export type MonthTag = 'Work' | 'Project' | 'Personal' | 'Learning' | 'Travel' | 'Health' | 'Achievement';

export interface MediaItem {
  type: 'image' | 'video' | 'link';
  url: string;
  thumbnail?: string;
  caption?: string;
}

export interface Advice {
  lesson: string;
  wouldDoDifferently?: string;
  recommendation?: string;
}

export interface TaskItem {
  title: string;
  detail?: string;
}

export interface MonthEntry {
  month: number; // 1-12
  monthName: string;
  title: string;
  description: string;
  highlights: (string | TaskItem)[];
  tags: MonthTag[];
  media?: MediaItem[];
  advice?: Advice;
  outcomes?: string[];
}

export interface YearSummary {
  keyAchievements: string[];
  biggestChallenges: { challenge: string; solution: string }[];
  skillsImproved: string[];
  nextYearGoals: string[];
}

export interface TimelineData {
  year: number;
  playerName: string;
  playerTitle: string;
  intro: string;
  months: MonthEntry[];
  summary: YearSummary;
}
