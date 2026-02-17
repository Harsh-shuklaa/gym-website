import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Star } from 'lucide-react';
import { images } from '../../data/images';

const trainers = [
  {
    name: "Alex Drago",
    specialty: "Strength & Conditioning",
    image: images.trainers[0],
    rating: 5.0,
  },
  {
    name: "Sarah Fit",
    specialty: "Yoga & Flexibility",
    image: images.trainers[1],
    rating: 4.9,
  },
  {
    name: "Mike Power",
    specialty: "CrossFit Expert",
    image: images.trainers[2],
    rating: 4.8,
  },
  {
    name: "Emily Core",
    specialty: "Weight Loss Coach",
    image: images.trainers[3],
    rating: 4.9,
  }
];

const Trainers = () => {
  return (
    <section className="py-24 bg-gym-900 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-neon-red font-bold tracking-widest uppercase mb-4">Team Members</h2>
            <h3 className="text-5xl font-bebas text-white">Meet Our <span className="text-stroke-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Experts</span></h3>
          </div>
          <button className="bg-transparent border border-white/20 hover:border-neon-red hover:text-neon-red text-white py-3 px-8 rounded-full font-bold uppercase tracking-wider transition-all duration-300">
            View All Trainers
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-gym-950"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"></div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-2xl font-bebas text-white">{trainer.name}</h4>
                  <div className="flex items-center gap-1 bg-gym-600/20 px-2 py-1 rounded text-xs text-neon-red font-bold backdrop-blur-sm border border-gym-600/30">
                    <Star size={12} fill="currentColor" />
                    {trainer.rating}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{trainer.specialty}</p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <SocialIcon Icon={Instagram} />
                  <SocialIcon Icon={Twitter} />
                  <SocialIcon Icon={Linkedin} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ Icon }) => (
  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-neon-red transition-colors">
    <Icon size={14} />
  </a>
);

export default Trainers;
