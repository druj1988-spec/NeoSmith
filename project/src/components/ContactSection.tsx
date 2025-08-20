import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-black py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Let's create something amazing together
              </h2>
              <p className="text-gray-400 text-lg">
                Ready to bring your vision to life? Get in touch and let's discuss your next project.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                  <Mail className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">hello@oxaley.com</p>
                  <p className="text-gray-500 text-sm">Send us an email</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                  <Phone className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm">Give us a call</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">New York, NY</p>
                  <p className="text-gray-500 text-sm">Visit our office</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              
              <textarea
                placeholder="Tell us about your project"
                rows={6}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all font-medium flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}