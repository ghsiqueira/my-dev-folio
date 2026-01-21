'use client';

import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 text-sm font-bold text-white hover:border-cyan-500 transition-colors flex items-center gap-2"
    >
      <span className={language === 'pt' ? 'text-cyan-400' : 'text-gray-500'}>PT</span>
      <div className="w-8 h-4 bg-gray-700 rounded-full relative">
        <motion.div
          className="w-4 h-4 bg-white rounded-full absolute top-0"
          animate={{ x: language === 'en' ? 16 : 0 }}
        />
      </div>
      <span className={language === 'en' ? 'text-cyan-400' : 'text-gray-500'}>EN</span>
    </button>
  );
}