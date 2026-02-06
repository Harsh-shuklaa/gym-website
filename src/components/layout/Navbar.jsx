import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gym-950/80 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gym-600 rounded-lg group-hover:bg-neon-red transition-colors duration-300">
            <Dumbbell className="text-white w-6 h-6" />
          </div>
          <span className="text-3xl font-bebas text-white tracking-wider">FIT<span className="text-gym-600 group-hover:text-neon-red transition-colors">LIFE</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm tracking-widest font-semibold uppercase hover:text-neon-red transition-colors duration-300 ${location.pathname === link.path ? 'text-neon-red' : 'text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/join" className="bg-gym-600 hover:bg-neon-red text-white text-sm font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(255,0,60,0.6)] transform hover:-translate-y-1">
            Join Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-neon-red transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gym-950/95 backdrop-blur-xl border-t border-white/10 absolute w-full left-0 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bebas tracking-wide text-white hover:text-neon-red transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/join" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-gym-600 text-white font-bold py-3 px-10 rounded-full font-bebas tracking-wider text-lg"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
