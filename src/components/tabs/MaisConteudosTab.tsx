import React from 'react';
import { Sparkles, Star } from 'lucide-react';
import { extraContent } from '../../data/modules';
import { LessonCard } from '../LessonCard';
import { useUserData } from '../../hooks/useUserData';

interface MaisConteudosTabProps {
  onLessonClick: (lessonId: string) => void;
}

export function MaisConteudosTab({ onLessonClick }: MaisConteudosTabProps) {
  const { favorites } = useUserData();
  
  const favoriteContent = extraContent.filter(lesson => 
    favorites.includes(lesson.id)
  );

  return (
    <div className="pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center space-x-3">
            <Sparkles className="text-yellow-400" />
            <span>Mais Conteúdos</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Conteúdos extras para aprofundar seus conhecimentos e aumentar suas vendas
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Conteúdos Extras</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {extraContent.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                onClick={() => onLessonClick(lesson.id)}
                showProgress={true}
              />
            ))}
          </div>
        </div>

        {favoriteContent.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <Star className="text-yellow-400" fill="currentColor" />
              <span>Seus Favoritos</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteContent.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  onClick={() => onLessonClick(lesson.id)}
                  showProgress={true}
                />
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-500/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <span>💰</span>
              <span>Estratégias Avançadas</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Aprenda técnicas avançadas de precificação, upsell e cross-sell para maximizar seus lucros.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Precificação psicológica</li>
              <li>• Bundles que vendem</li>
              <li>• Estratégias de frete</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <span>🎯</span>
              <span>Atendimento Premium</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Transforme compradores em clientes fiéis com atendimento de excelência.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Scripts de atendimento</li>
              <li>• Gestão de reclamações</li>
              <li>• Pós-venda eficiente</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}