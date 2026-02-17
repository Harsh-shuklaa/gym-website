import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Jessica Parker",
    role: "Member since 2023",
    feedback: "The vibes at D-Hulk Gym are unmatched! The trainers are super supportive and the equipment is top-notch. I've lost 15kg in 6 months and never felt better.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Pro Athlete",
    feedback: "As a professional athlete, I need facilities that can keep up with my training. D-Hulk Gym has everything I need for strength and conditioning. Highly recommended!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Yoga Enthusiast",
    feedback: "The group classes are amazing. The instructors bring so much energy. It’s the highlight of my day!",
    image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1780&auto=format&fit=crop",
    rating: 4.5,
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((curr) => (curr + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((curr) => (curr - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-red/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-neon-red font-bold tracking-widest uppercase mb-4">Testimonials</h2>
          <h3 className="text-5xl font-bebas text-white">Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Stories</span></h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12">
             <Quote className="absolute top-8 left-8 text-white/10 w-16 h-16 rotate-180" />
            
            <div className="relative overflow-hidden min-h-[300px] flex items-center">
              <AnimatePresence mode='wait'>
                <motion.div 
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-neon-red shadow-lg mb-6">
                    <img src={testimonials[current].image} alt={testimonials[current].name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex gap-1 mb-6 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill={i < Math.floor(testimonials[current].rating) ? "currentColor" : "none"} className={i >= Math.floor(testimonials[current].rating) ? "text-gray-600" : ""} />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-gray-200 italic mb-8 leading-relaxed max-w-2xl">
                    "{testimonials[current].feedback}"
                  </p>

                  <h4 className="text-2xl font-bebas text-white">{testimonials[current].name}</h4>
                  <p className="text-neon-red text-sm font-bold uppercase tracking-wider">{testimonials[current].role}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-12">
              <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 bg-black/50 hover:bg-neon-red hover:border-neon-red text-white flex items-center justify-center transition-all">
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-12">
              <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 bg-black/50 hover:bg-neon-red hover:border-neon-red text-white flex items-center justify-center transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)} 
                className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-neon-red w-8' : 'bg-gray-700 hover:bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
