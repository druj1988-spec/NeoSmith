import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl">Oxaley</h3>
            <p className="text-gray-400 text-sm">
              Crafting narrative through design. Building meaningful experiences that connect brands with their audiences.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Github size={16} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-medium">Services</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Web Design</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Mobile Apps</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Brand Identity</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Development</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-medium">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Our Team</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Careers</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-medium">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Blog</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Case Studies</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2024 Oxaley. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}