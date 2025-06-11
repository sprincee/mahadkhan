'use client';

import React, { useState, useEffect } from 'react';
import { Code, Database } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C/C++', 'SQL', 'Bash', 'R'],
    frameworks: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'MongoDB', 'Git', 'Firebase', 'Vercel', 'Azure']
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-black relative overflow-hidden flex flex-col justify-start pt-1"
    >




      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Left Aligned */}
          <div
            className={`mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">About</h2>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: '75ms' }}
                ></div>
                <div
                  className="w-3 h-3 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: '150ms' }}
                ></div>
              </div>
              <p className="text-gray-400 text-xl tracking-wider uppercase">Who I Am</p>
            </div>
          </div>

          {/* Education & Introduction */}
          <div
            className={`grid lg:grid-cols-2 gap-12 mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-6">
              <div className="group">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  University of Maryland
                </h3>
                <p className="text-gray-300 text-lg">Bachelor of Information Science</p>
                <p className="text-gray-500">Minor in Mathematics</p>
              </div>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Software engineer passionate about building scalable web applications and crafting exceptional
                user experiences. I thrive at the intersection of design and development, where creativity meets
                technical excellence.
              </p>
            </div>

            {/* Decorative element */}
            <div className="hidden lg:flex items-center justify-center mt-[-150px]">
              <div className="relative">
                <div className="text-blue-500/10 text-[150px] font-bold select-none animate-pulse">{'{}'}</div>
                <div className="absolute inset-0 blur-2xl bg-blue-500/5"></div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Languages */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Code className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Languages</h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-black/50 text-gray-300 rounded-full text-xs font-mono border border-blue-500/20 hover:border-blue-500/40 hover:text-white transition-all duration-300 cursor-default"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          transform: hoveredSkill === skill ? 'translateY(-2px)' : 'translateY(0)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Frameworks & Tools */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Database className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Frameworks & Tools</h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-black/50 text-gray-300 rounded-full text-xs font-mono border border-blue-500/20 hover:border-blue-500/40 hover:text-white transition-all duration-300 cursor-default"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          transform: hoveredSkill === skill ? 'translateY(-2px)' : 'translateY(0)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;