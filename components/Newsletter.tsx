
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 bg-secondary px-6">
      <div className="max-w-5xl mx-auto rounded-[3rem] bg-white p-12 md:p-20 relative overflow-hidden shadow-2xl">
        {/* Abstract Background Decoration */}
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brandDark mb-6 leading-tight">Join the Inner Circle.</h2>
            <p className="text-lg text-gray-600 mb-0 italic">Get exclusive access to pre-launches, styling guides, and secret collections.</p>
          </div>
          
          <div>
            <form className="flex flex-col space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-brandLight border border-transparent focus:border-primary/20 px-6 py-5 rounded-2xl outline-none text-brandDark placeholder:text-gray-400 transition-all"
                />
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold tracking-widest uppercase hover:bg-opacity-90 transition-all shadow-xl shadow-primary/20">
                Subscribe Now
              </button>
              <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest mt-2">No spam. Only excellence.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
