import React, { useState, useRef, useEffect } from 'react';
import { Download, ChevronLeft, ChevronRight, Gift } from 'lucide-react';
import { modules } from '../../data/modules';
import { ModuleCard } from '../ModuleCard';
import { ModuleDetail } from '../ModuleDetail';

interface PrincipalTabProps {
  onLessonClick: (lessonId: string) => void;
}

export function PrincipalTab({ onLessonClick }: PrincipalTabProps) {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToModule = (index: number) => {
    if (scrollContainerRef.current) {
      const moduleWidth = 350; // Width of each module card + gap
      const scrollPosition = index * (moduleWidth + 24); // 24px gap
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentModuleIndex(index);
    }
  };

  const handlePrevModule = () => {
    if (currentModuleIndex > 0) {
      scrollToModule(currentModuleIndex - 1);
    }
  };

  const handleNextModule = () => {
    if (currentModuleIndex < modules.length - 1) {
      scrollToModule(currentModuleIndex + 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const moduleWidth = 350 + 24; // card width + gap
        const newIndex = Math.round(scrollLeft / moduleWidth);
        setCurrentModuleIndex(Math.min(newIndex, modules.length - 1));
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  if (selectedModule) {
    const module = modules.find(m => m.id === selectedModule);
    if (module) {
      return (
        <ModuleDetail
          module={module}
          onBack={() => setSelectedModule(null)}
          onLessonClick={onLessonClick}
        />
      );
    }
  }

  return (
    <div className="pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Download Buttons Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <a
            href="https://drive.google.com/uc?export=download&id=1nXfPDQy87FYibSAC-xF2lw98oyCEmYpL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Download size={24} />
            <span>📚 Baixar o eBook Vivendo de Artesanato na Shopee</span>
          </a>

          <a
            href="https://drive.google.com/drive/folders/1ZQ2nnnQUpRHbtYzGe1YlhZkK93o2w8zk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-green-400"
          >
            <Gift size={24} />
            <span>🎁 Baixe seus Bônus Aqui</span>
          </a>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Aprenda a Vender Artesanato na Shopee
          </h1>
          <p className="text-gray-300 text-lg">
            Curso completo para transformar seu hobby em um negócio lucrativo
          </p>
        </div>

        <div className="mb-8 relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Módulos do Curso</h2>
            
            {/* Module Counter */}
            <div className="hidden sm:flex items-center space-x-4 text-gray-300">
              <span className="text-sm">
                {currentModuleIndex + 1} de {modules.length}
              </span>
              <div className="flex space-x-1">
                {modules.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToModule(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentModuleIndex 
                        ? 'bg-purple-500 w-6' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating Navigation Buttons */}
          <button
            onClick={handlePrevModule}
            disabled={currentModuleIndex === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg ${
              currentModuleIndex === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:scale-110'
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNextModule}
            disabled={currentModuleIndex === modules.length - 1}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg ${
              currentModuleIndex === modules.length - 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:scale-110'
            }`}
          >
            <ChevronRight size={20} />
          </button>

          {/* Modules Carousel */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {modules.map((module, index) => (
              <div 
                key={module.id} 
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0"
              >
                <ModuleCard
                  module={module}
                  onClick={() => setSelectedModule(module.id)}
                />
              </div>
            ))}
          </div>

          {/* Mobile Module Counter */}
          <div className="sm:hidden flex justify-center mt-4">
            <div className="flex items-center space-x-4 text-gray-300">
              <span className="text-sm">
                {currentModuleIndex + 1} de {modules.length}
              </span>
              <div className="flex space-x-1">
                {modules.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToModule(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentModuleIndex 
                        ? 'bg-purple-500 w-4' 
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">🚀 Sua Jornada de Sucesso</h3>
          <p className="text-gray-300 mb-6">
            Siga nossa metodologia comprovada e transforme seu artesanato em uma fonte de renda consistente.
            Cada módulo foi cuidadosamente planejado para construir sobre o conhecimento anterior.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
              <h4 className="text-white font-semibold mb-2">Configure sua Loja</h4>
              <p className="text-gray-400 text-sm">Do zero ao profissional em poucos passos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
              <h4 className="text-white font-semibold mb-2">Cadastre Produtos</h4>
              <p className="text-gray-400 text-sm">Produtos irresistíveis que vendem sozinhos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
              <h4 className="text-white font-semibold mb-2">Venda e Lucre</h4>
              <p className="text-gray-400 text-sm">Estratégias para vendas consistentes</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-green-500/20">
            <h4 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
              <span>💰</span>
              <span>Resultados Comprovados</span>
            </h4>
            <p className="text-gray-300 text-sm">
              Mais de 1.000 artesãs já transformaram seus negócios com nossa metodologia.
              Aumente suas vendas em até 300% nos primeiros 90 dias.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-blue-500/20">
            <h4 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
              <span>🎯</span>
              <span>Suporte Completo</span>
            </h4>
            <p className="text-gray-300 text-sm">
              Acesso vitalício ao conteúdo, atualizações gratuitas e comunidade exclusiva 
              de artesãs empreendedoras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}