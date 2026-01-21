'use client';

import { motion } from 'framer-motion';
import { X, CheckCircle, Github, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }} 
        onClick={onClose}
        className="absolute inset-0 bg-black/90"
        style={{ willChange: 'opacity' }} 
      />

      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }} 
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }} 
        className="relative bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl"
        style={{ willChange: 'transform, opacity' }} 
      >
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-800/50 hover:bg-gray-700 rounded-full text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gray-800 rounded-xl text-cyan-400 shrink-0">
              <project.icon size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="px-2 py-1 text-xs font-medium bg-cyan-900/20 text-cyan-300 rounded-md border border-cyan-900/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 text-gray-300">
            
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/30">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                🎯 O Desafio
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">{project.details?.problem}</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                💡 A Solução
              </h3>
              <p className="leading-relaxed">{project.details?.solution}</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Principais Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.details?.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row gap-4">
            <a 
              href={project.repoLink} 
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl transition-all font-medium border border-gray-700"
            >
              <Github size={20} />
              Ver Código
            </a>
            
            {project.previewLink && (
              <a 
                href={project.previewLink} 
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-xl transition-all font-medium shadow-lg shadow-cyan-900/20"
              >
                <ExternalLink size={20} />
                Acessar Projeto
              </a>
            )}
          </div>

        </div>
      </motion.div>
    </div>
  );
}