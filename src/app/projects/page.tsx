// src/app/projects/page.tsx
'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import ProjectsSection from '../components/ProjectsSection';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Navigation - Fixed at top */}
      <Navigation />
      
      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
};

export default ProjectsPage;