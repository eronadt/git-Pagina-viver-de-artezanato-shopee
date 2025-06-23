import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === 'artesanato@gmail.com' && password === 'vender123') {
      localStorage.setItem('isLoggedIn', 'true');
      setError('');
      setShowWelcome(true);
      
      setTimeout(() => {
        onLogin();
      }, 3000);
    } else {
      setError('❌ Email ou senha inválidos');
    }
  };

  useEffect(() => {
    // Check if user is already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
      onLogin();
    }
  }, [onLogin]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 flex items-center justify-center p-4">
      <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-2xl border border-purple-500/20">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Acesso ao Portal
          </h2>
          <p className="text-gray-300">
            Artesanato Shopee
          </p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 mb-4 text-center">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/20">
          <h3 className="text-white font-semibold mb-2">🔑 Dados de Acesso:</h3>
          <p className="text-gray-300 text-sm mb-1">
            <strong>Email:</strong> artesanato@gmail.com
          </p>
          <p className="text-gray-300 text-sm">
            <strong>Senha:</strong> vender123
          </p>
        </div>
      </div>

      {showWelcome && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-2xl z-50 animate-pulse border border-purple-400">
          <div className="text-center">
            <p className="font-bold text-lg mb-1">
              🎉 Seja bem-vinda ao Portal!
            </p>
            <p className="text-sm opacity-90">
              🚀 Bora faturar com o que você ama fazer!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}