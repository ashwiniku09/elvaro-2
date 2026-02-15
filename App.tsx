
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import TrendingProducts from './components/TrendingProducts';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-secondary selection:text-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Categories Section */}
        <Categories />

        {/* Middle Impact Section - Editorial Image */}
        <section className="h-[70vh] relative overflow-hidden">
          <img 
             src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&q=80&w=1600"
             alt="Luxury Aesthetic"
             className="w-full h-full object-cover fixed top-0 left-0 -z-10"
          />
          <div className="absolute inset-0 bg-brandDark/40 flex items-center justify-center text-center p-6 backdrop-blur-[2px]">
            <div className="max-w-4xl">
              <h2 className="text-white text-5xl md:text-7xl font-serif font-bold italic mb-6">"Fashion is the armor to survive the reality of everyday life."</h2>
              <span className="text-secondary font-bold tracking-[0.4em] uppercase">— Bill Cunningham</span>
            </div>
          </div>
        </section>

        {/* Trending Products */}
        <TrendingProducts />

        {/* Value Propositions */}
        <Features />

        {/* Newsletter / Offer */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default App;
