import { useLocalStorage } from './useLocalStorage';
import { UserProgress, UserProfile } from '../types';

export function useUserData() {
  const [progress, setProgress] = useLocalStorage<UserProgress[]>('user-progress', []);
  const [profile, setProfile] = useLocalStorage<UserProfile>('user-profile', {
    name: 'Usuário',
    avatar: '',
    language: 'pt'
  });
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

  const updateProgress = (lessonId: string, progressPercent: number, completed: boolean = false) => {
    setProgress(prev => {
      const existing = prev.find(p => p.lessonId === lessonId);
      if (existing) {
        return prev.map(p => 
          p.lessonId === lessonId 
            ? { ...p, progress: progressPercent, completed, lastWatched: new Date() }
            : p
        );
      }
      return [...prev, { lessonId, progress: progressPercent, completed, lastWatched: new Date() }];
    });
  };

  const toggleFavorite = (lessonId: string) => {
    setFavorites(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const getLessonProgress = (lessonId: string) => {
    return progress.find(p => p.lessonId === lessonId);
  };

  const getContinueWatching = () => {
    return progress
      .filter(p => p.progress > 0 && !p.completed)
      .sort((a, b) => new Date(b.lastWatched).getTime() - new Date(a.lastWatched).getTime());
  };

  return {
    progress,
    profile,
    favorites,
    updateProgress,
    setProfile,
    toggleFavorite,
    getLessonProgress,
    getContinueWatching
  };
}