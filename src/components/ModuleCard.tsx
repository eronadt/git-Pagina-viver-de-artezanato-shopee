import React from 'react';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Module } from '../types';
import { useUserData } from '../hooks/useUserData';

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
}

export function ModuleCard({ module, onClick }: ModuleCardProps) {
  const { progress } = useUserData();
  
  const completedLessons = module.lessons.filter(lesson => 
    progress.find(p => p.lessonId === lesson.id)?.completed
  ).length;
  
  const totalLessons = module.lessons.length;
  const progressPercent = (completedLessons / totalLessons) * 100;

  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group min-w-[300px] sm:min-w-[350px]"
    >
      <div className={`w-full h-32 bg-gradient-to-r ${module.color} rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
        <BookOpen size={48} className="text-white" />
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
        {module.title}
      </h3>
      
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
        {module.description}
      </p>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <span>{completedLessons} de {totalLessons} aulas</span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`bg-gradient-to-r ${module.color} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-purple-400 font-medium">
          {completedLessons === totalLessons ? 'Concluído' : 'Continuar'}
        </span>
        <ChevronRight size={20} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}