import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Zap } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20 bg-gym-950 min-h-screen">
            {/* Header */}
            <section className="relative py-20 bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                     <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" alt="Gym" className="w-full h-full object-cover" />
                </div>
                 <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bebas text-white mb-6"
                    >
                        About <span className="text-neon-red">FitLife</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        More than just a gym. We are a community dedicated to pushing limits and breaking barriers.
                    </p>
                </div>
            </section>

             {/* Story Section */}
             <section className="py-20 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=2072&auto=format&fit=crop" alt="Our Story" className="rounded-2xl shadow-2xl border border-white/10" />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-neon-red font-bold tracking-widest uppercase mb-4">Our Story</h2>
                        <h3 className="text-4xl font-bebas text-white mb-6">Building Stronger <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Lives</span> since 2010</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Founded on the belief that fitness should be accessible, empowering, and transformative, FitLife started as a small garage gym. Today, we stand as a premier fitness destination with state-of-the-art facilities across the country.
                        </p>
                         <p className="text-gray-300 leading-relaxed mb-8">
                            Our mission is simple: To provide the best equipment, expert guidance, and a supportive environment where anyone can achieve their fitness goals, regardless of their starting point.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <Feature icon={Award} title="Award Winning" desc="Best Gym 2024" />
                            <Feature icon={Users} title="Expert Trainers" desc="Certified Coaches" />
                            <Feature icon={Globe} title="Community" desc="5000+ Members" />
                            <Feature icon={Zap} title="Equipment" desc="World Class" />
                        </div>
                    </div>
                </div>
             </section>
        </div>
    );
};

const Feature = ({ icon: Icon, title, desc }) => (
    <div className="flex items-start gap-3">
        <div className="p-2 bg-gym-600/20 rounded-lg text-neon-red">
            <Icon size={24} />
        </div>
        <div>
            <h4 className="font-bebas text-xl text-white">{title}</h4>
            <p className="text-sm text-gray-400">{desc}</p>
        </div>
    </div>
);

export default About;
