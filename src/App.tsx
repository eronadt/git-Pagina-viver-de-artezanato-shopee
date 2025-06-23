import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { VideoPlayer } from './components/VideoPlayer';
import { LoginPage } from './components/LoginPage';
import { PrincipalTab } from './components/tabs/PrincipalTab';
import { ContinuarTab } from './components/tabs/ContinuarTab';
import { MaisConteudosTab } from './components/tabs/MaisConteudosTab';
import { ConfiguracoesTab } from './components/tabs/ConfiguracoesTab';
import { modules, extraContent } from './data/modules';
import { Lesson } from './types';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('principal');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    // Check if user is already logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail);
    };

    window.addEventListener('changeTab', handleTabChange as EventListener);
    return () => window.removeEventListener('changeTab', handleTabChange as EventListener);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setActiveTab('principal');
    setSelectedLesson(null);
  };

  const handleLessonClick = (lessonId: string) => {
    const allLessons = [...modules.flatMap(m => m.lessons), ...extraContent];
    const lesson = allLessons.find(l => l.id === lessonId);
    if (lesson) {
      setSelectedLesson(lesson);
    }
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'principal':
        return <PrincipalTab onLessonClick={handleLessonClick} />;
      case 'continuar':
        return <ContinuarTab onLessonClick={handleLessonClick} />;
      case 'mais-conteudos':
        return <MaisConteudosTab onLessonClick={handleLessonClick} />;
      case 'configuracoes':
        return <ConfiguracoesTab onLogout={handleLogout} />;
      default:
        return <PrincipalTab onLessonClick={handleLessonClick} />;
    }
  };

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="min-h-screen">
        {renderActiveTab()}
      </main>

      {selectedLesson && (
        <VideoPlayer
          lesson={selectedLesson}
          onClose={() => setSelectedLesson(null)}
        />
      )}
    </div>
  );
}

export default App;