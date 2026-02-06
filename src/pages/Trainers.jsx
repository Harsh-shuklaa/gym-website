import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Star, Calendar } from 'lucide-react';

const trainers = [
  {
    name: "Alex Drago",
    specialty: "Strength & Conditioning",
    bio: "Alex has over 10 years of experience in bodybuilding and strength training. He has coached multiple state-level champions.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
    rating: 5.0,
    experience: "10 Years"
  },
  {
    name: "Sarah Fit",
    specialty: "Yoga & Flexibility",
    bio: "Sarah is a certified Yoga instructor who specializes in flexibility and mobility. Her classes are perfect for stress relief.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    experience: "8 Years"
  },
  {
    name: "Mike Power",
    specialty: "CrossFit Expert",
    bio: "Mike is a former military trainer who brings intensity and discipline to every session. Expert in HIIT and functional fitness.",
    image: "https://images.unsplash.com/photo-1533681904393-9ab6eea9e72e?q=80&w=1974&auto=format&fit=crop",
    rating: 4.8,
    experience: "6 Years"
  },
  {
    name: "Emily Core",
    specialty: "Weight Loss Coach",
    bio: "Emily helps clients transform their bodies through sustainable nutrition and effective workout plans.",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1974&auto=format&fit=crop",
    rating: 4.9,
    experience: "9 Years"
  },
  {
    name: "John Steel",
    specialty: "Powerlifting",
    bio: "Focuses on the big three: Squat, Bench, Deadlift. John will help you reach new PRs safely.",
    image: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    experience: "5 Years"
  },
  {
    name: "Lisa Swift",
    specialty: "Cardio & Endurance",
    bio: "Marathon runner and triathlon coach. Lisa will help you build stamina that lasts.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    rating: 4.9,
    experience: "7 Years"
  }
];

const Trainers = () => {
    return (
        <div className="pt-20 bg-gym-950 min-h-screen">
             <section className="py-20 bg-black relative">
                 <div className="absolute inset-0 opacity-40">
                     <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" alt="Trainers" className="w-full h-full object-cover" />
                </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-gym-950 to-transparent"></div>
                 <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bebas text-white mb-4">Expert <span className="text-neon-red">Trainers</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Learn from the best. Our certified experts are here to guide you every step of the way.
                    </p>
                </div>
            </section>

             <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trainers.map((trainer, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-neon-red/50 transition-all group"
                        >
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                                <div className="absolute bottom-4 right-4 bg-white/90 text-black px-3 py-1 rounded font-bold text-xs flex items-center gap-1">
                                    <Star size={12} fill="currentColor" className="text-orange-500" /> {trainer.rating}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bebas text-white mb-1">{trainer.name}</h3>
                                <p className="text-neon-red text-sm font-bold uppercase tracking-wider mb-4">{trainer.specialty}</p>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {trainer.bio}
                                </p>
                                
                                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                                     <div className="flex gap-3">
                                        <Instagram size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                                        <Twitter size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                                     </div>
                                     <button className="bg-gym-600 hover:bg-neon-red text-white text-xs font-bold py-2 px-4 rounded uppercase tracking-wider transition-colors">
                                        Book Now
                                     </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
             </section>
        </div>
    );
};

export default Trainers;
