// types/mindfulness.ts

export interface Practice {
  id: string;
  title: string;
  desc: string;
  fullDesc: string;
  steps: string[];
  icon: string;
  color: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  benefits: string[];
}

export interface Session {
  id: string;
  practiceId: string;
  duration: number;
  completedAt: Date;
}