'use client';

import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';
import { useLanguage } from '../context/LanguageContext';
import { staticContent } from '../data/content';

export default function Timeline() {
  const { language } = useLanguage();
  const data = timelineData[language]; 

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-cyan-500 pl-4">
          {staticContent[language].headers.timeline}
        </h2>

        <div className="border-l-2 border-gray-700 ml-3 space-y-12">
          {data.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8"
            >
              <span className="absolute -left-[9px] top-0 bg-gray-900 border-2 border-cyan-500 text-cyan-500 rounded-full p-1">
                <item.icon size={16} />
              </span>

              <h3 className="text-xl font-bold">{item.title}</h3>
              <span className="text-sm text-cyan-400">{item.year} • {item.company}</span>
              <p className="text-gray-400 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}