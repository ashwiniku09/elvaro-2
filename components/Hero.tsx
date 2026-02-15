
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-brandLight">
      {/* Background Image / Creative Element */}
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=1200" 
          alt="Modern Menswear Model"
          className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brandLight hidden lg:block"></div>
        <div className="absolute inset-0 bg-brandLight/40 lg:hidden"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase mb-4 animate-in slide-in-from-left-8 duration-700">Spring/Summer 25</h2>
          <h1 className="editorial-text text-7xl md:text-[120px] font-bold text-brandDark mb-6 font-serif tracking-tighter animate-in slide-in-from-left-12 duration-1000">
            ELVARO
          </h1>
          <p className="text-4xl md:text-5xl font-light text-brandDark/80 mb-8 italic animate-in slide-in-from-left-16 duration-1000">
            Elevate Your Style
          </p>
          <div className="flex flex-wrap gap-4 text-xs tracking-widest uppercase text-brandDark/60 mb-10 border-l-2 border-primary pl-4">
             <span>Fashion</span>
             <span className="text-primary">|</span>
             <span>Grooming</span>
             <span className="text-primary">|</span>
             <span>Tech Essentials</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white px-10 py-5 rounded-full font-bold tracking-widest uppercase hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20 flex items-center justify-center group">
              Shop Now <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="bg-transparent border border-brandDark text-brandDark px-10 py-5 rounded-full font-bold tracking-widest uppercase hover:bg-brandDark hover:text-white transition-all transform hover:-translate-y-1">
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <span className="text-[10px] tracking-[0.4em] uppercase text-brandDark">Scroll</span>
        <div className="w-[1px] h-12 bg-brandDark animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
