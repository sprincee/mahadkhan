'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Calendar, Sparkles } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const scrollOffset = 50;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Perform scroll only once
          if (!hasScrolled) {
            window.scrollTo({
              top: window.scrollY + scrollOffset,
              behavior: 'smooth'
            });
            setHasScrolled(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [hasScrolled, scrollOffset]);

  type Project = {
    id: number;
    title: string;
    date: string;
    description: string;
    longDescription: string;
    tech: string[];
    features: string[];
    github: string;
    live: string | null;
    color: 'blue' | 'orange' | 'green' | 'purple';
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'PoliView',
      date: 'May 2025',
      description: 'Built a legislative tracking platform enabling users to stay informed on vital U.S. legislation.',
      longDescription: 'A comprehensive platform that connects citizens with their government by providing real-time updates on congressional activities and legislation tracking.',
      tech: ['React.js', 'Next.js', 'TypeScript', 'Supabase', 'Vercel', 'Congress.gov API', 'Axios', 'Framer'],
      features: [
        'Real-time legislative tracking',
        'User-friendly interface for civic engagement',
        'Integration with official Congress.gov data'
      ],
      github: 'https://github.com/sprincee/politcalview',
      live: 'https://politcalview.vercel.app', 
      color: 'blue'
    },
    {
      id: 2,
      title: 'Flame',
      date: 'Oct. 2024',
      description: 'Developed an AI-powered thumbnail generator for creatives using OpenAI\'s DALL-E.',
      longDescription: 'An innovative tool that leverages AI to help content creators generate eye-catching thumbnails, streamlining their creative workflow.',
      tech: ['React.js', 'Next.js', 'TypeScript', 'Firebase', 'Vercel', 'OpenAI (DALL-E)', 'Axios', 'Tailwind CSS'],
      features: [
        'AI-powered thumbnail generation',
        'Firebase Authentication for secure access',
        'Responsive UI with Tailwind CSS'
      ],
      github: 'https://github.com/sprincee/Flame3', 
      live: 'https://flame3.vercel.app', 
      color: 'orange'
    },
    {
      id: 3,
      title: 'QuranQuest',
      date: 'Dec. 2023',
      description: 'Designed and implemented an educational web-app used by 60+ students at a local mosque.',
      longDescription: 'An interactive educational platform that makes learning engaging and accessible for students during winter break programs.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Flask (Python)'],
      features: [
        'Interactive learning modules',
        'Student progress tracking',
        'Community-focused design'
      ],
      github: 'https://github.com/sprincee/QuranQuest', 
      live: null,
      color: 'green'
    },
    {
      id: 4,
      title: 'EnchantmentPLUS',
      date: 'Aug. 2023',
      description: 'Programmed a Minecraft mod that revamped the enchantment system, deployed on a server with 100+ peak users.',
      longDescription: 'A comprehensive Minecraft modification that enhances the vanilla enchantment system with new mechanics and features.',
      tech: ['Java', 'Forge API', 'Spigot API', 'Blockbench', 'GIMP'],
      features: [
        'Custom enchantment mechanics',
        'Multiplayer server compatibility',
        'Visual assets created with Blockbench',
        'GitHub not available.'
      ],
      github: 'https://github.com/sprincee', 
      live: null,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: 'blue' | 'orange' | 'green' | 'purple') => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        hoverBorder: 'hover:border-blue-500/40',
        text: 'text-blue-400',
        glow: 'rgba(59, 130, 246, 0.5)'
      },
      orange: {
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        hoverBorder: 'hover:border-orange-500/40',
        text: 'text-orange-400',
        glow: 'rgba(251, 146, 60, 0.5)'
      },
      green: {
        bg: 'bg-green-500/10',
        border: 'border-green-500/20',
        hoverBorder: 'hover:border-green-500/40',
        text: 'text-green-400',
        glow: 'rgba(34, 197, 94, 0.5)'
      },
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        hoverBorder: 'hover:border-purple-500/40',
        text: 'text-purple-400',
        glow: 'rgba(168, 85, 247, 0.5)'
      }
    };
    return colors[color];
  };
  

  return (
    <section id="projects" className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* Subtle gradient orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              Projects
            </h2>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '75ms' }}></div>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
              </div>
              <p className="text-gray-400 text-xl tracking-wider uppercase">What I've Built</p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const colors = getColorClasses(project.color);
              return (
                <div
                  key={project.id}
                  className={`group relative transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div 
                    className={`relative ${colors.bg} ${colors.border} border rounded-xl p-6 ${colors.hoverBorder} transition-all duration-300 h-full`}
                    style={{
                      boxShadow: hoveredProject === project.id ? `0 0 30px ${colors.glow}` : 'none'
                    }}
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 ${colors.bg} rounded-lg`}>
                          <Sparkles className={`w-5 h-5 ${colors.text}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-gray-500 text-sm mt-1">
                            <Calendar className="w-3 h-3" />
                            <span>{project.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Links */}
                      <div className="flex items-center space-x-3">
                        <a
                          href={project.github}
                          className="p-2 bg-black/50 rounded-lg hover:bg-blue-500/20 transition-all duration-300"
                          title="View on GitHub"
                        >
                          <Github className="w-4 h-4 text-gray-400 hover:text-white" />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            className="p-2 bg-black/50 rounded-lg hover:bg-blue-500/20 transition-all duration-300"
                            title="View Live Demo"
                          >
                            <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {hoveredProject === project.id ? project.longDescription : project.description}
                    </p>

                    {/* Features (shown on hover) */}
                    <div className={`space-y-2 mb-4 overflow-hidden transition-all duration-500 ${
                      hoveredProject === project.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className={`w-1 h-1 ${colors.bg} rounded-full`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 bg-black/50 text-gray-300 rounded-full text-xs font-mono ${colors.border} ${colors.hoverBorder} hover:text-white transition-all duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Hover indicator */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 ${colors.bg} transform origin-left transition-transform duration-300 ${
                      hoveredProject === project.id ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-gray-400 text-lg mb-6">
              Interested in seeing more? Check out my GitHub for additional projects and contributions.
            </p>
            <a
              href="https://github.com/sprincee" 
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500/10 rounded-lg border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/20 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 group-hover:text-white transition-colors duration-300">
                View All Projects
              </span>
              <ExternalLink className="w-4 h-4 text-blue-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;