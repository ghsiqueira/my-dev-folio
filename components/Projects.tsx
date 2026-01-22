'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Construction, Lock } from 'lucide-react';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext'; 

const hazardPattern = {
  backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, #eab308 10px, #eab308 20px)'
};

const uiText = {
  pt: {
    title: "Meus",
    titleHighlight: "Projetos",
    subtitle: "Uma mistura de aplicações em produção e experimentos futuros.",
    warning: "AVISO: Área com projetos em construção abaixo!",
    soon: "EM BREVE",
    wip: "Work in Progress...",
    live: "Live Demo"
  },
  en: {
    title: "My",
    titleHighlight: "Projects",
    subtitle: "A mix of production applications and future experiments.",
    warning: "WARNING: Construction area below!",
    soon: "COMING SOON",
    wip: "Work in Progress...",
    live: "Live Demo"
  }
};

export default function Projects() {
  const { language } = useLanguage(); 
  const t = uiText[language as keyof typeof uiText];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.title} <span className="text-cyan-400">{t.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
            <br />
            <span className="text-yellow-400 text-sm font-bold flex items-center justify-center gap-2 mt-2">
              <Construction size={16} /> {t.warning}
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const isPlanned = project.status === 'planned';
            const description = project.description[language as 'pt' | 'en'];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isPlanned 
                    ? 'bg-gray-800/40 border-yellow-500/30 hover:border-yellow-500/60' 
                    : 'bg-gray-800 border-gray-700 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10'
                }`}
              >
                {isPlanned && (
                  <>
                    <div className="h-3 w-full border-b border-black" style={hazardPattern}></div>
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <Lock size={12} /> {t.soon}
                      </div>
                    </div>
                  </>
                )}

                <div className={`relative h-48 w-full overflow-hidden ${isPlanned ? 'opacity-30 grayscale' : ''}`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                      <Code2 size={48} className={isPlanned ? "text-gray-600" : "text-gray-700"} />
                    </div>
                  )}
                  
                  {!isPlanned && (
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60" />
                  )}
                </div>

                <div className="p-6 relative">
                  <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${isPlanned ? 'text-gray-300' : 'text-white'}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1 rounded-full border ${
                          isPlanned
                            ? 'bg-gray-800 border-gray-700 text-gray-500' 
                            : 'bg-gray-900 border-gray-600 text-cyan-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {!isPlanned ? (
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          <Github size={18} />
                          Code
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                        >
                          {t.live}
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center pt-4 border-t border-gray-700/50">
                      <span className="text-xs text-yellow-500/80 font-mono flex items-center gap-2">
                        <Construction size={14} /> {t.wip}
                      </span>
                    </div>
                  )}
                </div>

                {isPlanned && <div className="h-2 w-full absolute bottom-0 border-t border-black" style={hazardPattern}></div>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}