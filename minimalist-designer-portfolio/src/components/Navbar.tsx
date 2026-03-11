import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-serif italic tracking-tight">
          Studio.
        </Link>
        <div className="flex gap-12 text-sm uppercase tracking-widest font-medium">
          <Link 
            to="/" 
            className={`transition-opacity hover:opacity-100 ${location.pathname === '/' ? 'opacity-100' : 'opacity-40'}`}
          >
            Work
          </Link>
          <Link 
            to="/about" 
            className={`transition-opacity hover:opacity-100 ${location.pathname === '/about' ? 'opacity-100' : 'opacity-40'}`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
