import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Crafting
                <br />
                narrative
                <br />
                <span className="text-gray-400">through</span>
                <br />
                design
              </h1>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                ))}
              </div>
            </div>
            
            <div className="max-w-md">
              <p className="text-gray-300 text-lg">
                We believe good design is key to building strong connections.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg aspect-square p-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
                </div>
                <div className="bg-gray-800 rounded-lg aspect-video p-4 flex items-center justify-center">
                  <div className="w-full h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gray-800 rounded-lg aspect-video p-4 flex items-center justify-center">
                  <div className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
                </div>
                <div className="bg-gray-800 rounded-lg aspect-square p-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-end mt-20">
          <button className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <span className="text-sm tracking-wider">SEE OUR PORTFOLIO</span>
          </button>
          
          <button className="group flex flex-col items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <span className="text-sm tracking-wider">SCROLL NOW</span>
            <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}