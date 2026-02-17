import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Heart, Zap, Clock, Users, ArrowRight } from 'lucide-react';
import { images } from '../data/images.js';

const programs = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Build muscle and power with our advanced strength equipment and free weights area. Our expert trainers will guide you through compound movements and isolation exercises.',
    benefits: ['Increase Muscle Mass', 'Boost Metabolism', 'Improve Bone Density'],
    image: images.programs[0]
  },
  {
    icon: Activity,
    title: 'CrossFit & HIIT',
    description: 'High-intensity interval training to burn calories and boost endurance fast. A combination of functional movements performed at high intensity.',
    benefits: ['Burn Calories Fast', 'Improve Endurance', 'Full Body Workout'],
    image: images.programs[1]
  },
  {
    icon: Heart,
    title: 'Cardio Fitness',
    description: 'State-of-the-art treadmills, ellipticals, and rowers for heart health. dedicated zones for low and high intensity cardio sessions.',
    benefits: ['Improve Heart Health', 'Reduce Stress', 'Boost Energy'],
    image: images.programs[2]
  },
  {
    icon: Zap,
    title: 'Weight Loss Program',
    description: 'Specialized programs designed to help you shed pounds effectively and sustainably. Includes nutritional guidance and regular progress tracking.',
    benefits: ['Sustainable Results', 'Nutritional Support', 'Regular Tracking'],
    image: images.programs[3]
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'Join Zumba, Yoga, and Spin classes. Sweat together, grow together. Our group classes are designed to be fun and effective.',
    benefits: ['Community Vibe', 'Motivating Instructors', 'Variety of Styles'],
    image: images.programs[4]
  },
  {
    icon: Clock,
    title: 'Personal Training',
    description: 'One-on-one coaching to reach your specific fitness goals with expert guidance. Custom workout plans tailored to your body and goals.',
    benefits: ['Personalized Plan', 'Expert Guidance', 'Faster Results'],
    image: images.programs[5]
  }
];
    
const Programs = () => {
    return (
        <div className="pt-20 bg-gym-950 min-h-screen">
             <section className="py-20 bg-black relative">
                 <div className="absolute inset-0 opacity-40">
                     <img src={images.programs[0]} alt="Programs" className="w-full h-full object-cover" />
                </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-gym-950 to-transparent"></div>
                 <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bebas text-white mb-4">Our <span className="text-neon-red">Programs</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Designed for results. Built for you. Choose the path that fits your goals.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 gap-12">
                    {programs.map((program, index) => (
                         <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-8 bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/10 hover:border-neon-red/50 transition-all group"
                        >
                            <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                                <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-8 md:w-3/5 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-4">
                                     <div className="w-12 h-12 bg-gym-600 rounded-lg flex items-center justify-center text-white">
                                        <program.icon size={24} />
                                    </div>
                                    <h3 className="text-3xl font-bebas text-white">{program.title}</h3>
                                </div>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {program.description}
                                </p>
                                
                                <div className="mb-8">
                                    <h4 className="text-sm font-bold uppercase text-neon-red mb-3 tracking-wider">Key Benefits</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {program.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="self-start text-white font-bold uppercase tracking-wider flex items-center gap-2 hover:text-neon-red transition-colors group-hover:translate-x-2 duration-300">
                                    Join Program <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Programs;
