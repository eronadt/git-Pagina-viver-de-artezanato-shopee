import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Module } from '../types';
import { LessonCard } from './LessonCard';

interface ModuleDetailProps {
  module: Module;
  onBack: () => void;
  onLessonClick: (lessonId: string) => void;
}

export function ModuleDetail({ module, onBack, onLessonClick }: ModuleDetailProps) {
  return (
    <div className="pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </button>

        <div className={`w-full h-48 bg-gradient-to-r ${module.color} rounded-2xl mb-8 flex items-center justify-center`}>
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{module.title}</h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl">{module.description}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Aulas do Módulo</h2>
          <p className="text-gray-400">
            {module.lessons.length} aulas • Duração estimada: {
              module.lessons.reduce((total, lesson) => {
                const [minutes, seconds] = lesson.duration.split(':').map(Number);
                return total + minutes + (seconds / 60);
              }, 0)
            } minutos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {module.lessons.map((lesson, index) => (
            <div key={lesson.id} className="relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center z-10">
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>
              <LessonCard
                lesson={lesson}
                onClick={() => onLessonClick(lesson.id)}
                showProgress={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}