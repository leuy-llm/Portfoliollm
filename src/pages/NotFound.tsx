import React, { useState, useEffect } from 'react';

export const NotFound = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(glitchInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-bounce"
          style={{ ...parallaxStyle, animationDelay: '0s', animationDuration: '3s' }}
        />
        <div 
          className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-45 opacity-20 animate-pulse"
          style={{ ...parallaxStyle, animationDelay: '1s' }}
        />
        <div 
          className="absolute bottom-32 left-40 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 animate-ping"
          style={{ ...parallaxStyle, animationDelay: '2s' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Glitch effect container */}
        <div className="relative mb-8">
          {/* Main 404 text */}
          <h1 
            className={`text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 select-none transition-all duration-200 ${
              glitchActive ? 'animate-pulse' : ''
            }`}
            style={{
              filter: glitchActive ? 'hue-rotate(180deg) contrast(150%)' : 'none',
              textShadow: glitchActive ? '2px 2px 0px #ff00ff, -2px -2px 0px #00ffff' : 'none'
            }}
          >
            404
          </h1>
          
          {/* Glitch overlay */}
          {glitchActive && (
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-red-500 opacity-70 animate-pulse">
              404
            </div>
          )}
        </div>

        {/* Animated subtitle */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide animate-fade-in">
            Oops! This page has vanished into the
          </p>
          {/* <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 animate-pulse">
            Digital Void
          </p> */}
        </div>

        {/* Interactive button */}
        <button  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50 hover:shadow-2xl active:scale-95 overflow-hidden" onClick={() => window.history.back()}
        >
          {/* Button background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Button content */}
          <span className="relative z-10 flex items-center space-x-2">
            <span>Return to Safety</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          
          {/* Button shine effect */}
          <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-1000" />
        </button>

        {/* Floating help text */}
        <p className="mt-8 text-white/60 text-sm animate-bounce" style={{ animationDelay: '2s' }}>
          Don't worry, even the best explorers get lost sometimes ✨
        </p>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* CSS animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
