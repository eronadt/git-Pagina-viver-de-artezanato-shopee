export interface Lesson {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  color: string;
}

export interface UserProgress {
  lessonId: string;
  progress: number;
  completed: boolean;
  lastWatched: Date;
}

export interface UserProfile {
  name: string;
  avatar: string;
  language: 'pt' | 'en';
}