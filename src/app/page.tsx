'use client';

import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import BackgroundElements from './components/BackgroundElements';

const LandingPage = () => {
  return (
    
      <div className="min-h-screen bg-gradient-to-br from-[#2C3930] via-[#3F4F44] to-[#2C3930] relative">
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ContactSection />
        </main>

        {/* Background Elements */}
        <BackgroundElements />
      </div>
    
  );
};

export default LandingPage;