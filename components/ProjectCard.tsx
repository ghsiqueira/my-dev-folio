'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Plus } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  repoLink: string;
  previewLink?: string;
  Icon: any;
  onClick: () => void; 
}

export default function ProjectCard({ title, description, tags, repoLink, previewLink, Icon, onClick }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick} 
      className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex flex-col h-full cursor-pointer relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="p-3 bg-gray-900 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
            <Icon size={24} />
        </div>
        
        <div className="flex gap-2">
            <a 
              href={repoLink} 
              target="_blank" 
              onClick={(e) => e.stopPropagation()} 
              title="Código" 
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
                <Github size={20} />
            </a>
            
            {previewLink && (
                <a 
                  href={previewLink} 
                  target="_blank" 
                  onClick={(e) => e.stopPropagation()}
                  title="Online" 
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-700 rounded-lg transition-colors"
                >
                    <ExternalLink size={20} />
                </a>
            )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-900 text-cyan-200 rounded-full border border-gray-700">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500">
        <Plus size={16} />
      </div>
    </motion.div>
  );
}