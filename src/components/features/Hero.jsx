import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 z-20 relative pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-neon-red font-bold tracking-widest uppercase mb-4 text-lg">
              Welcome to the Revolution
            </h2>
            <h1 className="text-6xl md:text-8xl font-bebas text-white leading-tight mb-6">
              Transform Your <span className="text-stroke-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Body</span> <br />
              Transform Your <span className="text-neon-red">Life</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Join the elite fitness community. World-class equipment, expert trainers, and a vibe that fuels your ambition. Start your journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/join" className="bg-neon-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full font-bebas tracking-wider text-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(220,38,38,0.6)] flex items-center justify-center gap-2">
                Join Now
              </Link>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-10 rounded-full font-bebas tracking-wider text-xl transition-all duration-300 flex items-center justify-center gap-3 group">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={14} className="text-black ml-1 fill-black" />
                </div>
                Watch Video
              </button>
            </div>

            <div className="mt-16 flex gap-12 border-t border-white/10 pt-8">
              <Stat number="5000+" label="Members" />
              <Stat number="30+" label="Expert Trainers" />
              <Stat number="24/7" label="Access" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ number, label }) => (
  <div>
    <h3 className="text-3xl font-bebas text-white">{number}</h3>
    <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
  </div>
);

export default Hero;
