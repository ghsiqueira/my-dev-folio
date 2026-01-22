'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { staticContent } from '../data/content';

export default function Footer() {
  const { language } = useLanguage();
  const content = staticContent[language].footer;

  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-20 pb-10">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {content.title}
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
          {content.subtitle}
        </p>
        
        <a 
          href="mailto:gabrielh2805@gmail.com"
          className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-cyan-900/20 hover:scale-105"
        >
          <Mail size={20} />
          {content.cta}
        </a>

        <div className="flex justify-center gap-6 mt-16 mb-12">
          <a 
            href="https://github.com/ghsiqueira" 
            target="_blank"
            className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/gabriel-siqueira-524614164" 
            target="_blank"
            className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="text-gray-600 text-sm border-t border-gray-800 pt-8">
          <p>{content.rights}</p>
          <p className="mt-2 text-xs">© {new Date().getFullYear()} Gabriel Henrique</p>
        </div>

      </div>
    </footer>
  );
}