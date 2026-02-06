import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Basic",
    price: "29",
    features: ["Gym Access", "Locker Room", "Free Wifi", "1 Group Class/Month"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "49",
    features: ["All Basic Features", "Unlimited Group Classes", "Nutritional Guide", "1 Personal Training Session", "Sauna Access"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "89",
    features: ["All Standard Features", "Unlimited Personal Training", "Massage Therapy", "Exclusive Lounge Access", "Free Merchandise"],
    highlight: false,
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gym-950 px-4 md:px-8 relative">
       <div className="text-center mb-16">
          <h2 className="text-neon-red font-bold tracking-widest uppercase mb-4">Pricing Plans</h2>
          <h3 className="text-5xl font-bebas text-white">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Journey</span></h3>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 border hover:transform hover:-translate-y-2 transition-all duration-300 flex flex-col ${plan.highlight ? 'bg-zinc-900 border-neon-red shadow-[0_0_30px_rgba(220,38,38,0.2)] scale-105 z-10' : 'bg-transparent border-white/10 hover:border-white/30'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-red text-white text-xs font-bold uppercase px-4 py-1 rounded-full tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h4 className="text-2xl font-bebas text-white mb-2">{plan.name}</h4>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400 font-medium">/ month</span>
              </div>

              <div className="flex-grow mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={18} className="text-neon-red shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 ${plan.highlight ? 'bg-neon-red text-white hover:bg-red-700 hover:shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default Pricing;
