import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import { useUserData } from '../../hooks/useUserData';
import { modules, extraContent } from '../../data/modules';
import { LessonCard } from '../LessonCard';

interface ContinuarTabProps {
  onLessonClick: (lessonId: string) => void;
}

export function ContinuarTab({ onLessonClick }: ContinuarTabProps) {
  const { getContinueWatching, progress } = useUserData();
  const continueWatching = getContinueWatching();

  const getAllLessons = () => {
    const allLessons = [...modules.flatMap(m => m.lessons), ...extraContent];
    return allLessons;
  };

  const allLessons = getAllLessons();
  const lessonsInProgress = continueWatching.map(p => 
    allLessons.find(lesson => lesson.id === p.lessonId)
  ).filter(Boolean);

  const recentlyCompleted = progress
    .filter(p => p.completed)
    .sort((a, b) => new Date(b.lastWatched).getTime() - new Date(a.lastWatched).getTime())
    .slice(0, 6)
    .map(p => allLessons.find(lesson => lesson.id === p.lessonId))
    .filter(Boolean);

  return (
    <div className="pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center space-x-3">
            <Clock className="text-purple-400" />
            <span>Continuar Assistindo</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Continue de onde parou e mantenha seu progresso de aprendizado
          </p>
        </div>

        {lessonsInProgress.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Em Progresso</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {lessonsInProgress.map((lesson) => (
                  lesson && (
                    <LessonCard
                      key={lesson.id}
                      lesson={lesson}
                      onClick={() => onLessonClick(lesson.id)}
                      showProgress={true}
                    />
                  )
                ))}
              </div>
            </div>

            {recentlyCompleted.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <TrendingUp className="text-green-400" />
                  <span>Concluídas Recentemente</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {recentlyCompleted.map((lesson) => (
                    lesson && (
                      <LessonCard
                        key={lesson.id}
                        lesson={lesson}
                        onClick={() => onLessonClick(lesson.id)}
                        showProgress={true}
                      />
                    )
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={48} className="text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Nenhuma aula em progresso</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Comece assistindo as aulas do curso para que elas apareçam aqui quando você quiser continuar
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('changeTab', { detail: 'principal' }))}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              Explorar Módulos
            </button>
          </div>
        )}

        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-xl font-bold text-white mb-4">💡 Dica de Estudo</h3>
          <p className="text-gray-300">
            Para melhor absorção do conteúdo, recomendamos assistir as aulas com intervalo de pelo menos 
            algumas horas entre elas. Isso permite que o conhecimento se consolide melhor.
          </p>
        </div>
      </div>
    </div>
  );
}