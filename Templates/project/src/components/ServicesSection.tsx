import React from 'react';
import { Smartphone, Globe, Palette, Code } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Creating intuitive and engaging mobile experiences that users love."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Building responsive and performant websites that drive results."
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Crafting memorable brand identities that tell your story."
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Developing tailored solutions to meet your unique needs."
    }
  ];

  return (
    <section className="bg-gray-900 py-20" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive solutions for your digital needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors h-full">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}