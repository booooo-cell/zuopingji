import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] bg-muted overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/designer/800/1000?grayscale" 
              alt="Profile" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <div className="lg:col-span-7">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl font-serif italic mb-12"
          >
            Design is <br /> thinking made <br /> visual.
          </motion.h1>
          
          <div className="space-y-12 max-w-xl">
            <p className="text-xl leading-relaxed text-black/80">
              I am a multidisciplinary designer based in the digital landscape. My work explores the intersection of minimalism, typography, and structural integrity.
            </p>
            
            <p className="text-base leading-relaxed text-black/60">
              With over 5 years of experience in branding and digital design, I've helped startups and established brands define their visual voice. I believe that good design is not just how it looks, but how it functions and communicates.
            </p>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-black/5">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-4">Services</h3>
                <ul className="text-sm space-y-2">
                  <li>Brand Identity</li>
                  <li>UI/UX Design</li>
                  <li>Editorial Design</li>
                  <li>Typography</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-4">Contact</h3>
                <ul className="text-sm space-y-2">
                  <li>hello@studio.com</li>
                  <li>@studio_design</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
