import React, { useState } from 'react';
import { User, Globe, MessageSquare, Camera, Save, BarChart3, LogOut } from 'lucide-react';
import { useUserData } from '../../hooks/useUserData';

interface ConfiguracoesTabProps {
  onLogout: () => void;
}

export function ConfiguracoesTab({ onLogout }: ConfiguracoesTabProps) {
  const { profile, setProfile, progress } = useUserData();
  const [formData, setFormData] = useState({
    name: profile.name,
    language: profile.language
  });
  const [feedback, setFeedback] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSaveProfile = () => {
    setProfile({ ...profile, ...formData });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the feedback to a server
    console.log('Feedback submitted:', feedback);
    setFeedback('');
    alert('Obrigado pelo seu feedback! Sua opinião é muito importante para nós.');
  };

  const handleLogout = () => {
    if (confirm('Tem certeza que deseja sair?')) {
      onLogout();
    }
  };

  const completedLessons = progress.filter(p => p.completed).length;
  const totalLessons = 35; // 7 modules × 5 lessons each
  const completionRate = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="pt-20 pb-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center space-x-3">
              <User className="text-purple-400" />
              <span>Configurações</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Personalize sua experiência de aprendizado e acompanhe seu progresso
            </p>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Sair</span>
          </button>
        </div>

        <div className="space-y-8">
          {/* Estatísticas de Progresso */}
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <BarChart3 size={28} className="text-purple-400" />
              <span>Seu Progresso no Curso</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{totalLessons}</div>
                <div className="text-gray-300">Aulas Disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{completedLessons}</div>
                <div className="text-gray-300">Aulas Concluídas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{completionRate}%</div>
                <div className="text-gray-300">Progresso Total</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                <span>Progresso do Curso</span>
                <span>{completionRate}% concluído</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-4 rounded-full transition-all duration-300"
                  style={{ width: `${completionRate}%` }}
                />
              </div>
            </div>

            {completionRate === 100 && (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4">
                <p className="text-green-400 font-medium text-center">
                  🎉 Parabéns! Você concluiu todo o curso! Agora é hora de colocar em prática!
                </p>
              </div>
            )}
          </div>

          {/* Perfil */}
          <div className="bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <User size={24} className="text-purple-400" />
              <span>Perfil do Usuário</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 font-medium mb-2">Foto do Perfil</label>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {formData.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                    <Camera size={16} />
                    <span>Alterar Foto</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSaveProfile}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
              >
                <Save size={16} />
                <span>Salvar Perfil</span>
              </button>
            </div>

            {showSuccess && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                <p className="text-green-400">✅ Perfil salvo com sucesso!</p>
              </div>
            )}
          </div>

          {/* Idioma */}
          <div className="bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <Globe size={24} className="text-blue-400" />
              <span>Idioma</span>
            </h2>
            
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="language"
                  value="pt"
                  checked={formData.language === 'pt'}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value as 'pt' | 'en' })}
                  className="w-4 h-4 text-purple-600"
                />
                <span className="text-white">Português (Brasil)</span>
              </label>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="language"
                  value="en"
                  checked={formData.language === 'en'}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value as 'pt' | 'en' })}
                  className="w-4 h-4 text-purple-600"
                />
                <span className="text-white">English</span>
              </label>
            </div>
          </div>

          {/* Feedback */}
          <div className="bg-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <MessageSquare size={24} className="text-green-400" />
              <span>Feedback / Contato</span>
            </h2>
            
            <form onSubmit={handleSubmitFeedback} className="space-y-4">
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Sua mensagem, sugestão ou dúvida:
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  placeholder="Conte-nos como podemos melhorar o curso, tire suas dúvidas ou compartilhe seus resultados..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
              >
                <MessageSquare size={16} />
                <span>Enviar Feedback</span>
              </button>
            </form>
          </div>

          {/* Dicas de Sucesso */}
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl p-6 border border-yellow-500/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <span>💡</span>
              <span>Dicas para Maximizar seu Aprendizado</span>
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Assista as aulas em ordem sequencial para melhor compreensão</li>
              <li>• Pratique cada técnica antes de avançar para o próximo módulo</li>
              <li>• Use o botão de favoritos para marcar aulas importantes</li>
              <li>• Revise o conteúdo regularmente para fixar o conhecimento</li>
              <li>• Compartilhe seus resultados conosco através do feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}