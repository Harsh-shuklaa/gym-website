import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-red to-orange-600"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bebas text-white mb-6">Start Your Fitness Journey Today</h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Don't wait for tomorrow. Your future self will thank you. Get 20% off your yearly membership if you join this week!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/join" className="bg-black text-white hover:bg-gray-900 font-bold py-4 px-12 rounded-full font-bebas tracking-wider text-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg border border-transparent hover:border-white/20">
              Get Membership
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-12 rounded-full font-bebas tracking-wider text-xl transition-all duration-300 transform hover:-translate-y-1">
              Book Free Trial
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
