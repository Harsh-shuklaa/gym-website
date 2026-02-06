import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
    {
      name: "Basic",
      price: "29",
      features: ["Gym Access", "Locker Room", "Free Wifi", "1 Group Class/Month"],
      notIncluded: ["Personal Training", "Sauna", "Nutrition Plan"],
      highlight: false,
    },
    {
      name: "Standard",
      price: "49",
      features: ["All Basic Features", "Unlimited Group Classes", "Nutritional Guide", "1 Personal Training Session", "Sauna Access"],
      notIncluded: ["Unlimited PT", "Massage"],
      highlight: true,
    },
    {
      name: "Premium",
      price: "89",
      features: ["All Standard Features", "Unlimited Personal Training", "Massage Therapy", "Exclusive Lounge Access", "Free Merchandise"],
      notIncluded: [],
      highlight: false,
    }
  ];

const Pricing = () => {
    return (
        <div className="pt-20 bg-gym-950 min-h-screen">
            <section className="py-20 text-center bg-zinc-900 border-b border-white/5">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bebas text-white mb-4">Membership <span className="text-neon-red">Plans</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Invest in your health with transparent pricing. No hidden fees.
                    </p>
                </div>
            </section>

             <section className="py-20 container mx-auto px-4">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div 
                        key={plan.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative rounded-2xl p-8 border flex flex-col ${plan.highlight ? 'bg-zinc-900 border-neon-red shadow-[0_0_30px_rgba(220,38,38,0.2)] md:scale-105 z-10' : 'bg-transparent border-white/10'}`}
                        >
                            <h4 className="text-2xl font-bebas text-white mb-2">{plan.name}</h4>
                            <div className="mb-6 flex items-baseline gap-1">
                                <span className="text-5xl font-bold text-white">${plan.price}</span>
                                <span className="text-gray-400 font-medium">/ month</span>
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 mb-8 ${plan.highlight ? 'bg-neon-red text-white hover:bg-red-700' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                                Select Plan
                            </button>

                            <div className="flex-grow space-y-4">
                                {plan.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                    <Check size={18} className="text-neon-red shrink-0" />
                                    <span>{feature}</span>
                                </div>
                                ))}
                                 {plan.notIncluded.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                    <X size={18} className="shrink-0" />
                                    <span>{feature}</span>
                                </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                 </div>
             </section>
        </div>
    );
};

export default Pricing;
