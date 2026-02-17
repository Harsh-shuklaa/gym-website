import { motion } from 'framer-motion';
import { Dumbbell, Activity, Heart, Zap, Clock, Users } from 'lucide-react';
import { images } from '../../data/images';

const programs = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Build muscle and power with our advanced strength equipment and free weights area.',
    image: images.programs[0]
  },
  {
    icon: Activity,
    title: 'CrossFit & HIIT',
    description: 'High-intensity interval training to burn calories and boost endurance fast.',
    image: images.programs[1]
  },
  {
    icon: Heart,
    title: 'Cardio Fitness',
    description: 'State-of-the-art treadmills, ellipticals, and rowers for heart health.',
    image: images.programs[2]
  },
  {
    icon: Zap,
    title: 'Weight Loss',
    description: 'Specialized programs designed to help you shed pounds effectively and sustainably.',
    image: images.programs[3]
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'Join Zumba, Yoga, and Spin classes. Sweat together, grow together.',
    image: images.programs[4]
  },
  {
    icon: Clock,
    title: 'Personal Training',
    description: 'One-on-one coaching to reach your specific fitness goals with expert guidance.',
    image: images.programs[5]
  }
];

const Programs = () => {
  return (
    <section className="py-24 bg-gym-950 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-red/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-neon-red font-bold tracking-widest uppercase mb-4">Our Programs</h2>
          <h3 className="text-5xl font-bebas text-white">Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Premium Services</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 hover:border-neon-red/50 transition-all duration-500"
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 z-0">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[320px]">
                <div className="w-14 h-14 bg-gym-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-red transition-colors duration-300 shadow-lg">
                  <program.icon className="text-white w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bebas text-white mb-3 group-hover:text-neon-red transition-colors">{program.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                  {program.description}
                </p>
                <button className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span className="text-neon-red">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
