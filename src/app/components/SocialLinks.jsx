// src/app/components/SocialLinks.jsx
'use client';

import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const SocialLinks = ({ variant = 'horizontal' }) => {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:mahadsuhaibkhan@gmail.com',
      icon: Mail,
      external: false,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/your-profile', // Update with your actual LinkedIn
      icon: Linkedin,
      external: true,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/your-username', // Update with your actual GitHub
      icon: Github,
      external: true,
    },
  ];

  const baseClasses = "flex items-center space-x-2 text-[#DCD7C9] hover:text-[#A27B5C] transition-all duration-300 group";
  const containerClasses = variant === 'horizontal' 
    ? "flex justify-center space-x-8 flex-wrap gap-4" 
    : "flex flex-col space-y-4";

  return (
    <div className={containerClasses}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className={baseClasses}
            target={link.external ? '_blank' : '_self'}
            rel={link.external ? 'noopener noreferrer' : ''}
            aria-label={`Connect with me on ${link.name}`}
          >
            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-mono text-sm">{link.name}</span>
            {link.external && (
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;