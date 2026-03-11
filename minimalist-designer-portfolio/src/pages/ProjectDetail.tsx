import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../constants';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 px-6 max-w-7xl mx-auto"
    >
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium opacity-40 hover:opacity-100 transition-opacity mb-12"
      >
        <ArrowLeft size={14} /> Back to Work
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-serif italic mb-6"
          >
            {project.title}
          </motion.h1>
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-2">Category</h3>
              <p className="text-sm">{project.category}</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-2">Year</h3>
              <p className="text-sm">{project.year}</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-2">Description</h3>
              <p className="text-base leading-relaxed text-black/70">{project.description}</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-2">Scope</h3>
              <ul className="text-sm space-y-1">
                {project.details.map(detail => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-12">
          <motion.div 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="bg-muted aspect-video overflow-hidden"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-2 gap-12">
             <img 
              src={`https://picsum.photos/seed/${project.id}-1/800/1000`} 
              alt="Detail 1" 
              referrerPolicy="no-referrer"
              className="w-full aspect-[3/4] object-cover bg-muted"
            />
             <img 
              src={`https://picsum.photos/seed/${project.id}-2/800/1000`} 
              alt="Detail 2" 
              referrerPolicy="no-referrer"
              className="w-full aspect-[3/4] object-cover bg-muted"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
