import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            Oxaley
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
              Project
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#contact" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              CONTACT US
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}