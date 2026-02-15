
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden text-brandDark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <a href="#" className="text-2xl font-bold tracking-[0.2em] text-primary">ELVARO</a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-sm font-medium tracking-widest uppercase text-brandDark">
          <a href="#collections" className="hover:text-primary transition-colors">Collections</a>
          <a href="#trending" className="hover:text-primary transition-colors">Trending</a>
          <a href="#about" className="hover:text-primary transition-colors">Experience</a>
        </div>

        {/* Icons */}
        <div className="flex-1 flex justify-end items-center space-x-6">
          <button className="text-brandDark hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <button className="hidden sm:block text-brandDark hover:text-primary transition-colors">
            <User size={20} />
          </button>
          <button className="text-brandDark hover:text-primary transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col p-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <a href="#collections" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Collections</a>
          <a href="#trending" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Trending</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Experience</a>
          <div className="pt-4 flex space-x-4 border-t border-gray-100">
             <User size={20} className="text-brandDark" />
             <span className="text-brandDark">My Account</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
