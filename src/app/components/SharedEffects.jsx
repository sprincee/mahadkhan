'use client';
import React, { useState, useEffect } from 'react';

const SharedEffects = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate particles once
  const particles = [...Array(20)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 30 + Math.random() * 20,
    path: Math.floor(Math.random() * 4),
    delay: Math.random() * 5
  }));

  return (
    <div className="relative min-h-screen">
      {/* Particle layer - fixed position to cover entire viewport */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float${particle.path} ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Cursor gradient effect - fixed position */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none" 
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, #3b82f6, transparent 40%)`,
          willChange: 'background',
          zIndex: 2
        }}
      />

      {/* CSS for particle animations */}
      <style jsx>{`
        @keyframes float0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, 20px) rotate(120deg); }
          66% { transform: translate(20px, -30px) rotate(240deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, 40px) rotate(120deg); }
          66% { transform: translate(-30px, -20px) rotate(240deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-20px, -40px) rotate(120deg); }
          66% { transform: translate(40px, 20px) rotate(240deg); }
        }
      `}</style>

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SharedEffects;