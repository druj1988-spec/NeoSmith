import React from 'react';

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: "https://images.pexels.com/photos/3784324/pexels-photo-3784324.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Website Design",
      category: "Web Development",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "E-commerce Platform",
      category: "Development",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="bg-white py-20" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-gray-600 text-lg">
            Showcasing our latest work and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 aspect-[4/3] mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80`}></div>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm tracking-wider opacity-80 mb-2">{item.category}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}