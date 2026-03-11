import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Project } from '../constants';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className="group"
    >
      <Link to={`/project/${project.id}`} className="block overflow-hidden bg-muted aspect-[4/5] relative">
        <motion.img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </Link>
      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-serif italic">{project.title}</h3>
          <p className="text-xs uppercase tracking-widest text-black/40 mt-1">{project.category}</p>
        </div>
        <span className="text-xs font-mono text-black/30">{project.year}</span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
