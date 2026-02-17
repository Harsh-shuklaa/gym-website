import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gym-950 pt-20 pb-10 border-t border-white/10 text-gray-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div>
            <Link to="/" className="text-4xl font-bebas text-white tracking-wider mb-6 block">D-HULK <span className="text-gym-600">GYM</span></Link>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Transform your body at Rohtak's premier fitness destination. Rated 4.9 stars by our community. Join the D-Hulk family today.
            </p>
            <div className="flex gap-4">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Youtube} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bebas text-white mb-6 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              <FooterLink to="/programs" text="Our Programs" />
              <FooterLink to="/trainers" text="Expert Trainers" />
              <FooterLink to="/pricing" text="Membership Plans" />
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/contact" text="Contact Us" />
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bebas text-white mb-6 uppercase tracking-wide">Popular Programs</h3>
            <ul className="space-y-4">
              <li className="text-sm hover:text-gym-500 transition-colors cursor-pointer">Bodybuilding</li>
              <li className="text-sm hover:text-gym-500 transition-colors cursor-pointer">CrossFit & HIIT</li>
              <li className="text-sm hover:text-gym-500 transition-colors cursor-pointer">Weight Loss</li>
              <li className="text-sm hover:text-gym-500 transition-colors cursor-pointer">Yoga & Flexibility</li>
              <li className="text-sm hover:text-gym-500 transition-colors cursor-pointer">Personal Training</li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-xl font-bebas text-white mb-6 uppercase tracking-wide">Contact Info</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-gym-600 shrink-0" />
                <span>Delhi Bypass Road, Sheila Bypass Rd, opp. Reliance Smart Store, Rohtak, Haryana 124001</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-gym-600 shrink-0" />
                <span>+91 90347 77453</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-gym-600 shrink-0" />
                <span>contact@dhulkgym.com</span>
              </li>
            </ul>
            
            <h4 className="text-white font-bold mb-3 text-sm uppercase">Newsletter</h4>
            <div className="flex relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-4 text-sm focus:outline-none focus:border-gym-600 transition-colors pr-12"
              />
              <button className="absolute right-1 top-1 bg-gym-600 hover:bg-neon-red text-white p-2 rounded-full transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 D-Hulk Gym. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon }) => (
  <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-gym-600 hover:scale-110 transition-all duration-300">
    <Icon size={18} />
  </a>
);

const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="text-sm hover:text-gym-500 transition-colors flex items-center gap-2 group">
      <span className="w-1.5 h-1.5 bg-gym-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
      {text}
    </Link>
  </li>
);

export default Footer;
