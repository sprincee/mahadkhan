'use client';
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredWord, setHoveredWord] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Split name for individual letter animations
  const firstName = "Mahad".split('');
  const lastName = "Khan".split('');

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Pulsing Spotlight Effect - Centered on Name */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute left-8 md:left-16 lg:left-24 top-1/2 transform -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.15) 40%, transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite',
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute left-8 md:left-16 lg:left-24 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 60%)',
            animation: 'pulse 4s ease-in-out infinite 0.5s',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>

      {/* Framing lines - 90 degree angle on the right side with glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 right-8 md:right-16 lg:right-24 w-px h-[75%] bg-blue-500/40"
          style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
        />
        <div 
          className="absolute bottom-8 md:bottom-16 lg:bottom-24 right-8 md:right-16 lg:right-24 w-[35%] md:w-[35%] h-px bg-blue-500/40"
          style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-7xl">
          {/* Main Content - Left Aligned */}
          <div className="space-y-8">
            {/* Animated Name with letter hover effects */}
            <div className="overflow-hidden">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none">
                <div className={`transition-all duration-1000 transform ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}>
                  {firstName.map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block hover:text-blue-400 hover:-translate-y-2 transition-all duration-300 cursor-default"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
                <div className={`transition-all duration-1000 transform ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`} style={{ transitionDelay: '200ms' }}>
                  {lastName.map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block hover:text-blue-400 hover:-translate-y-2 transition-all duration-300 cursor-default"
                      style={{ transitionDelay: `${(index + 5) * 50}ms` }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </h1>
            </div>

            {/* Animated role indicator */}
            <div className={`flex items-center space-x-4 transition-all duration-1000 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '75ms' }}></div>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
              </div>
              <p className="text-gray-400 text-xl tracking-widest uppercase relative overflow-hidden group">
                <span className="relative z-10">Software Engineer</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </p>
            </div>

            {/* Description with interactive highlights */}
            <div className={`max-w-2xl space-y-4 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '500ms' }}>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                I build solutions that bridge creativity and code, focusing on 
                <span 
                  className="text-blue-400 font-semibold mx-2 relative group cursor-default"
                  onMouseEnter={() => setHoveredWord('elegant')}
                  onMouseLeave={() => setHoveredWord(null)}
                >
                  elegant user experiences
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform origin-left transition-transform duration-300 ${
                    hoveredWord === 'elegant' ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </span> 
                and 
                <span 
                  className="text-white font-semibold mx-2 relative group cursor-default"
                  onMouseEnter={() => setHoveredWord('robust')}
                  onMouseLeave={() => setHoveredWord(null)}
                >
                  robust architectures
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                    hoveredWord === 'robust' ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </span>.
              </p>
              <p className="text-gray-500 hover:text-gray-400 transition-colors duration-300">Based in Maryland.</p>
            </div>

            {/* Interactive elements section */}
            <div className={`flex flex-wrap gap-8 items-center pt-8 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '700ms' }}>
              {/* Social Links with magnetic hover effect */}
              <div className="flex gap-6">
                {[
                  { name: 'GitHub', label: 'GitHub', href: 'https://github.com/sprincee' },
                  { name: 'LinkedIn', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mahad-skhan/' }
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group relative overflow-hidden"
                  >
                    <div className="px-6 py-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300 border border-blue-500/20 group-hover:border-blue-500/40">
                      <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                        {social.label}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA with ripple effect */}
              <a
                href="/projects"
                className="group relative px-8 py-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white rounded-lg"></div>
                <span className="relative z-10 text-black font-semibold tracking-wide flex items-center gap-2">
                  View My Work
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-0 h-0 bg-blue-100 rounded-full group-hover:w-96 group-hover:h-96 transition-all duration-500 ease-out"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;