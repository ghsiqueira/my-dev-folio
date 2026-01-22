'use client';

import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { language } = useLanguage();
  const data = skillsData[language];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-4"
        >
          {language === 'en' ? 'Tech Stack' : 'Minhas Ferramentas'}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-900 rounded-lg text-cyan-400 group-hover:text-white group-hover:bg-cyan-600 transition-colors">
                  <group.icon size={20} />
                </div>
                <h3 className="font-bold text-white">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-xs font-medium bg-gray-900 text-gray-300 rounded-md border border-gray-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}