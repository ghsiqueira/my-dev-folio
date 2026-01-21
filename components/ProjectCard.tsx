'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  repoLink: string;
  previewLink?: string; 
  Icon: any;
}

export default function ProjectCard({ title, description, tags, repoLink, previewLink, Icon }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-gray-900 rounded-lg text-cyan-400">
            <Icon size={24} />
        </div>
        
        <div className="flex gap-3">
            <a href={repoLink} target="_blank" title="Ver Código" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
            </a>
            
            {previewLink && (
                <a href={previewLink} target="_blank" title="Ver Projeto Online" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                </a>
            )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-900 text-cyan-200 rounded-full border border-gray-700">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}