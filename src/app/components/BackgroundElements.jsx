// src/app/components/BackgroundElements.jsx
'use client';

import React from 'react';

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2C3930]/10 to-transparent">
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 215, 201, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 215, 201, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#A27B5C]/40 rounded-full animate-ping" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#DCD7C9]/30 rounded-full animate-pulse" />
      <div 
        className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#3F4F44]/40 rounded-full animate-ping" 
        style={{animationDelay: '1s'}}
      />
      <div 
        className="absolute top-1/3 left-3/4 w-1 h-1 bg-[#A27B5C]/30 rounded-full animate-pulse" 
        style={{animationDelay: '2s'}}
      />
      <div 
        className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#DCD7C9]/20 rounded-full animate-ping" 
        style={{animationDelay: '3s'}}
      />
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#2C3930]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#2C3930]/30 to-transparent" />
    </div>
  );
};

export default BackgroundElements;