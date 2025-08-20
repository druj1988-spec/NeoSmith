import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-gray-100 py-20" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              At oxaley—we believe that design is not just about appearance but also{' '}
              <span className="text-gray-500">about creating immersive and</span>{' '}
              <span className="inline-flex items-center gap-2">
                <span className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-gray-900"></div>
                  ))}
                </span>
              </span>
              <span className="text-gray-500">meaningful—experiences.</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm tracking-wider text-gray-600 font-medium">
                ABOUT US
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                We combine creativity and technology to deliver results that not only meet but exceed expectations every time.
              </p>
              
              <button className="group flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all">
                LEARN MORE
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}