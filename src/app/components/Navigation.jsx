'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About', href: '#about', type: 'scroll' },
    { id: 'projects', label: 'Projects', href: '/projects', type: 'link' },
    { id: 'creative', label: 'Creative Projects', href: '/photography', type: 'link' },
    { id: 'contact', label: 'Contact', href: '#contact', type: 'scroll' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-lg border-b border-blue-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="px-8 md:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="group flex items-center space-x-2"
          >
            {/* Decorative element */}
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300 delay-75"></div>
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-300 delay-150"></div>
            </div>
            <span className="text-white text-xl font-bold tracking-tight group-hover:text-blue-400 transition-colors duration-300">
              MK
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                className="relative group text-gray-300 hover:text-white transition-colors duration-300 text-sm tracking-wider"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-full h-px bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="/resume.pdf"
              className="ml-4 px-6 py-2 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500 hover:text-white transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors duration-300 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-4 border-t border-blue-500/20">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block text-gray-300 hover:text-white hover:pl-4 transition-all duration-300 text-sm tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="block w-fit mt-4 px-6 py-2 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500 hover:text-white transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;