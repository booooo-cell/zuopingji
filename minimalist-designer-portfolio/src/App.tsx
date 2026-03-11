/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatedRoutes />
        <footer className="py-12 px-6 border-t border-black/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/30">
              © 2024 Studio. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
              <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
              <a href="#" className="hover:opacity-50 transition-opacity">Twitter</a>
              <a href="#" className="hover:opacity-50 transition-opacity">Behance</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
