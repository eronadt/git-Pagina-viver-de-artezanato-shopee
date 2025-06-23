import React from 'react';
import { Play, Heart, CheckCircle, Clock } from 'lucide-react';
import { Lesson } from '../types';
import { useUserData } from '../hooks/useUserData';

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
  showProgress?: boolean;
}

export function LessonCard({ lesson, onClick, showProgress = false }: LessonCardProps) {
  const { getLessonProgress, favorites } = useUserData();
  const progress = getLessonProgress(lesson.id);
  const isFavorite = favorites.includes(lesson.id);

  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-200 hover:shadow-2xl group"
    >
      <div className="relative">
        <img
          src={lesson.thumbnail}
          alt={lesson.title}
          className="w-full h-32 sm:h-40 object-cover group-hover:brightness-75 transition-all duration-200"
        />
        
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Play size={20} className="text-white ml-1" />
          </div>
        </div>

        <div className="absolute top-2 right-2 flex space-x-1">
          {progress?.completed && (
            <div className="bg-green-500 rounded-full p-1">
              <CheckCircle size={16} className="text-white" />
            </div>
          )}
          {isFavorite && (
            <div className="bg-red-500 rounded-full p-1">
              <Heart size={16} className="text-white" fill="currentColor" />
            </div>
          )}
        </div>

        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
          <Clock size={12} />
          <span>{lesson.duration}</span>
        </div>

        {showProgress && progress && progress.progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
              style={{ width: `${progress.progress}%` }}
            />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold text-sm sm:text-base line-clamp-2 mb-2">
          {lesson.title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
          {lesson.description}
        </p>
        
        {showProgress && progress && (
          <div className="mt-3 text-xs text-gray-400">
            {progress.completed ? 'Concluída' : `${Math.round(progress.progress)}% assistido`}
          </div>
        )}
      </div>
    </div>
  );
}