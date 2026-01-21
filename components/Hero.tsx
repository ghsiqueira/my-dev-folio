'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { staticContent } from '../data/content';

export default function Hero() {
  const { language } = useLanguage();
  const content = staticContent[language].hero;

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[60px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-cyan-400 font-semibold tracking-wide uppercase mb-4">
          {content.greeting}
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Gabriel Henrique
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {content.role} <br />
          <span className="text-sm opacity-80">{content.description}</span>
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex gap-4"
      >
        <a href="#projects" className="bg-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-500 transition-colors">
          {content.btnProjects}
        </a>
        <a href="https://github.com/ghsiqueira" target="_blank" className="p-3 bg-gray-800 rounded-full text-white hover:text-cyan-400 transition-colors">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/gabriel-siqueira-524614164" target="_blank" className="p-3 bg-gray-800 rounded-full text-white hover:text-cyan-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:gabrielh2805@gmail.com" className="p-3 bg-gray-800 rounded-full text-white hover:text-cyan-400 transition-colors">
          <Mail size={24} />
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-gray-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}