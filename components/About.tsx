'use client';

import { motion } from 'framer-motion';
import { User, Cpu, Map, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { staticContent } from '../data/content';

export default function About() {
  const { language } = useLanguage();
  const content = staticContent[language].about;

  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-50" />
            
            <img 
              src="https://github.com/ghsiqueira.png" 
              alt="Gabriel Henrique" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-gray-800 shadow-2xl md:grayscale md:hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold text-white border-l-4 border-purple-500 pl-4">
              {content.title}
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              {content.description}
            </p>
            
            <p className="text-gray-400 leading-relaxed flex gap-3">
              <User className="shrink-0 text-purple-400" size={24} />
              {content.personal}
            </p>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mt-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Target className="text-cyan-400" size={20} />
                {content.roadmapTitle}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content.roadmapList.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}