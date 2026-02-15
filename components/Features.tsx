
import React from 'react';
import { Award, Feather, ShieldCheck, Truck } from 'lucide-react';

const Features: React.FC = () => {
  const items = [
    {
      icon: <Award className="text-primary" size={32} />,
      title: "Premium Quality",
      desc: "Only the finest materials sourced from ethical producers worldwide."
    },
    {
      icon: <Feather className="text-primary" size={32} />,
      title: "Modern Design",
      desc: "Minimalist aesthetics paired with futuristic functionality."
    },
    {
      icon: <ShieldCheck className="text-primary" size={32} />,
      title: "Trusted Products",
      desc: "Each item is rigorously tested to ensure lifetime durability."
    },
    {
      icon: <Truck className="text-primary" size={32} />,
      title: "Fast Delivery",
      desc: "Global shipping with white-glove treatment and real-time tracking."
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-brandLight transition-colors group">
              <div className="mb-6 p-4 bg-primary/5 rounded-2xl group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brandDark mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
