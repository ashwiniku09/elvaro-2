
import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brandDark text-white pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-[0.2em] mb-8">ELVARO</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs italic mb-8">
              "Style is a way to say who you are without having to speak."
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 hover:bg-primary transition-colors rounded-full"><Instagram size={20} /></a>
              <a href="#" className="p-3 bg-white/5 hover:bg-primary transition-colors rounded-full"><Twitter size={20} /></a>
              <a href="#" className="p-3 bg-white/5 hover:bg-primary transition-colors rounded-full"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 border-l-2 border-secondary pl-4">Collections</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Seasonal Edit</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Grooming Kits</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Smart Wearables</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Limited Drop</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 border-l-2 border-secondary pl-4">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">The Brand Story</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 border-l-2 border-secondary pl-4">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] tracking-[0.2em] uppercase text-gray-500 font-bold">
          <p>&copy; {new Date().getFullYear()} ELVARO Luxury Store. All Rights Reserved.</p>
          <div className="mt-8 md:mt-0 flex items-center space-x-12">
            <span>Designed with precision</span>
            <button 
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-white hover:text-secondary transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
