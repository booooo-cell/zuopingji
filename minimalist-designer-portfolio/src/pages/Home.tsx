import React from 'react';
import { motion } from 'motion/react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 px-6 max-w-7xl mx-auto"
    >
      <header className="mb-32">
        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-[12vw] md:text-[8vw] font-serif italic leading-[0.9] tracking-tighter mb-8"
        >
          Visual <br /> Designer.
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-md text-lg text-black/60 leading-relaxed"
        >
          Crafting minimalist digital experiences and timeless brand identities with a focus on structural clarity and geometric precision.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
