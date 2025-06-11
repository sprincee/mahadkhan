// src/app/writing/page.tsx
'use client';

import Navigation from '../components/Navigation';

const WritingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C3930] via-[#3F4F44] to-[#2C3930]">
      {/* Navigation */}
      <Navigation />
      
      {/* Writing Content */}
      <main className="pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center text-[#DCD7C9]">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                WRITING
              </h1>
              <p className="text-xl text-[#A27B5C] mb-8 font-mono">
                THOUGHTS, INSIGHTS & CREATIVE EXPRESSION
              </p>
              <p className="text-lg text-[#DCD7C9]/70 max-w-2xl mx-auto leading-relaxed">
                Coming soon... This will house my articles, blog posts, 
                technical writing, and creative pieces.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WritingPage;