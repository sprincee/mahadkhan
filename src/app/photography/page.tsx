'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Camera, PenTool, ArrowRight, Sparkles } from 'lucide-react';

const CreativeProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Decorative elements - matching your main site style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Pulsing Spotlight Effect - similar to hero section */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite',
            filter: 'blur(40px)',
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

      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Coming Soon</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Creative Projects
          </h1>

          {/* Three dots animation - matching your style */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '75ms' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto">
            A space where <span className="text-blue-400 font-semibold">code meets creativity</span>. 
            Soon, you'll find my photography and writing projects here — capturing moments through 
            lenses and words.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Photography Card */}
            <div className="group relative bg-blue-500/5 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Camera className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Photography</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Visual stories from urban streets to natural landscapes. Exploring the world one frame at a time.
              </p>
            </div>

            {/* Writing Card */}
            <div className="group relative bg-purple-500/5 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                  <PenTool className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Writing</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Thoughts on technology, creativity, philosophy, or whatever is on my mind.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default CreativeProjectsPage;