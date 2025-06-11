// src/app/components/GeometricShape.jsx
'use client';

import React, { useState, useEffect } from 'react';

const GeometricShape = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
      <div 
        className="relative transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        {/* Main cube */}
        <div className="w-48 sm:w-64 h-48 sm:h-64 transform rotate-12 hover:rotate-45 transition-transform duration-1000 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-br from-[#A27B5C]/60 to-[#A27B5C]/80 transform skew-y-6 shadow-2xl backdrop-blur-sm rounded-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#3F4F44]/50 to-[#2C3930]/60 transform -skew-y-6 translate-x-4 translate-y-4 shadow-2xl backdrop-blur-sm rounded-lg"></div>
        </div>
        
        {/* Floating orbs */}
        <div className="absolute -top-12 sm:-top-16 -right-12 sm:-right-16 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-[#A27B5C]/50 to-[#A27B5C]/70 rounded-full blur-sm animate-pulse"></div>
        
        {/* Additional floating elements */}
        <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-[#3F4F44]/40 to-[#2C3930]/50 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="absolute top-1/4 -left-12 w-6 h-6 bg-gradient-to-br from-[#DCD7C9]/30 to-[#A27B5C]/30 rounded-full blur-sm animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
};

export default GeometricShape;