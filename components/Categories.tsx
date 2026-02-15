
import React from 'react';
import { CATEGORIES } from '../data';

const Categories: React.FC = () => {
  return (
    <section id="collections" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-brandDark">The Archive</h2>
            <p className="text-gray-500 mt-2">Curated selections for every facet of modern living.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer">
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandDark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-1">{cat.description}</p>
                <button className="text-white text-xs font-bold tracking-[0.2em] uppercase border-b border-white pb-1 overflow-hidden relative">
                  View Collection
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary group-hover:w-full transition-all duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
