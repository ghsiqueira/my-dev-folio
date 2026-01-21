'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion'; 
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { staticContent } from '../data/content';

export default function Projects() {
  const { language } = useLanguage();
  const data = projectsData[language];
  
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-4">
          {staticContent[language].headers.projects}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              repoLink={project.repoLink}
              previewLink={project.previewLink}
              Icon={project.icon}
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}