import React, { useState, useEffect } from 'react';
import { Heart, Maximize, X, Volume2, VolumeX } from 'lucide-react';
import { Lesson } from '../types';
import { useUserData } from '../hooks/useUserData';

interface VideoPlayerProps {
  lesson: Lesson;
  onClose: () => void;
}

export function VideoPlayer({ lesson, onClose }: VideoPlayerProps) {
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { updateProgress, toggleFavorite, favorites, getLessonProgress } = useUserData();

  const lessonProgress = getLessonProgress(lesson.id);
  const isFavorite = favorites.includes(lesson.id);

  useEffect(() => {
    if (lessonProgress) {
      setProgress(lessonProgress.progress);
    }
  }, [lessonProgress]);

  useEffect(() => {
    // Simulate video progress when video starts
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          updateProgress(lesson.id, 100, true);
          return 100;
        }
        updateProgress(lesson.id, newProgress);
        return newProgress;
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, [lesson.id, updateProgress]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const getYouTubeEmbedUrl = (videoUrl: string) => {
    // Handle both embed URLs and regular YouTube URLs
    let videoId = '';
    
    if (videoUrl.includes('/embed/')) {
      videoId = videoUrl.split('/embed/')[1]?.split('?')[0];
    } else if (videoUrl.includes('watch?v=')) {
      videoId = videoUrl.split('watch?v=')[1]?.split('&')[0];
    } else if (videoUrl.includes('youtu.be/')) {
      videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
    }
    
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&showinfo=0&autoplay=1${isMuted ? '&mute=1' : ''}`;
  };

  return (
    <div className={`fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 ${isFullscreen ? 'p-0' : ''}`}>
      <div className={`bg-gray-900 rounded-2xl w-full overflow-hidden ${
        isFullscreen 
          ? 'max-w-full max-h-full h-full rounded-none' 
          : 'max-w-6xl max-h-[90vh]'
      }`}>
        <div className="relative">
          <div className={`relative ${isFullscreen ? 'h-screen' : 'h-64 md:h-96 lg:h-[500px]'}`}>
            <iframe
              src={getYouTubeEmbedUrl(lesson.videoUrl)}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              title={lesson.title}
            />

            {/* Top Controls Overlay */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <button
                onClick={() => toggleFavorite(lesson.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm ${
                  isFavorite ? 'bg-red-500/80 text-white' : 'bg-black/50 text-white hover:bg-black/70'
                }`}
              >
                <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
              </button>

              <div className="flex space-x-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                >
                  <Maximize size={20} />
                </button>
                <button
                  onClick={onClose}
                  className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/30">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {!isFullscreen && (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">{lesson.title}</h2>
            <p className="text-gray-300 mb-4">{lesson.description}</p>
            
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                <span>Progresso da Aula</span>
                <span>{Math.round(progress)}% • {lesson.duration}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {progress === 100 && (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-4">
                <p className="text-green-400 font-medium flex items-center space-x-2">
                  <span>🎉</span>
                  <span>Parabéns! Aula concluída com sucesso!</span>
                </p>
              </div>
            )}

            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/20">
              <p className="text-blue-400 font-medium flex items-center space-x-2">
                <span>▶️</span>
                <span>Vídeo do YouTube carregado • Seu progresso está sendo salvo automaticamente</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}