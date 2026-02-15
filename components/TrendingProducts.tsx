
import React from 'react';
import { PRODUCTS } from '../data';
import { Plus, Heart } from 'lucide-react';

const TrendingProducts: React.FC = () => {
  return (
    <section id="trending" className="py-24 bg-brandLight px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">Most Wanted</span>
          <h2 className="text-5xl font-serif font-bold text-brandDark mt-2 italic">Trending Now</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-gray-200">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-3 bg-white text-brandDark rounded-full shadow-md hover:bg-secondary hover:text-white transition-colors">
                    <Heart size={18} />
                  </button>
                </div>

                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] bg-white/90 backdrop-blur-md text-brandDark py-4 rounded-xl font-bold tracking-widest uppercase text-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center hover:bg-primary hover:text-white">
                  <Plus size={16} className="mr-2" /> Add to Cart
                </button>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-gray-400 font-bold">{product.category}</span>
                  <h3 className="text-lg font-medium text-brandDark group-hover:text-primary transition-colors mt-1">{product.name}</h3>
                </div>
                <p className="text-lg font-bold text-brandDark">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-primary/5 text-primary border border-primary/20 px-12 py-4 rounded-full font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
