import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { images  } from '../data/images.js';

const Contact = () => {
    return (
        <div className="pt-20 bg-gym-950 min-h-screen">
             <section className="py-20 bg-black relative">
                <div className="absolute inset-0 bg-neon-red/5"></div>
                 <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bebas text-white mb-4">Get In <span className="text-neon-red">Touch</span></h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have questions? Ready to start? Visit us or drop a message.
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                     {/* Contact Info */}
                     <div className="space-y-8">
                        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10">
                            <h3 className="text-3xl font-bebas text-white mb-6">Contact Info</h3>
                             <div className="space-y-6">
                                <InfoItem icon={MapPin} title="Location" text="Delhi Bypass Road, Sheila Bypass Rd, opp. Reliance Smart Store, Rohtak, Haryana 124001 (Code: VJV9+2C)" />
                                <InfoItem icon={Phone} title="Phone" text="+91 90347 77453" />
                                <InfoItem icon={Mail} title="Email" text="contact@dhulkgym.com" />
                                <InfoItem icon={Clock} title="Opening Hours" text="Open 24 Hours / 7 Days a Week" />
                             </div>
                        </div>

                        {/* Location Image */}
                        <div className="h-full min-h-[400px] bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img 
                                src={images.location} 
                                alt="D-Hulk Gym Location" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                                <div>
                                    <h4 className="text-white font-bebas text-2xl mb-2">D-Hulk Gym Rohtak</h4>
                                    <p className="text-gray-300">Above Hellios Eye Hospital</p>
                                </div>
                            </div>
                        </div>
                     </div>

                     {/* Form */}
                     <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-3xl font-bebas text-white mb-6">Send Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup label="First Name" />
                                <InputGroup label="Last Name" />
                            </div>
                            <InputGroup label="Email Address" type="email" />
                            <InputGroup label="Phone Number" />
                            
                            <div>
                                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wide font-bold">Message</label>
                                <textarea rows="4" className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neon-red transition-colors"></textarea>
                            </div>

                            <button className="w-full bg-neon-red hover:bg-red-700 text-white font-bold py-4 rounded-lg font-bebas tracking-wider text-xl transition-all duration-300 flex items-center justify-center gap-2">
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                     </div>
                </div>
            </section>
        </div>
    );
};

const InfoItem = ({ icon: Icon, title, text }) => (
    <div className="flex items-start gap-4">
        <div className="p-3 bg-neon-red/10 rounded-lg text-neon-red">
            <Icon size={20} />
        </div>
        <div>
            <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1">{title}</h4>
            <p className="text-gray-400">{text}</p>
        </div>
    </div>
);

const InputGroup = ({ label, type = "text" }) => (
    <div>
        <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wide font-bold">{label}</label>
        <input type={type} className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neon-red transition-colors" />
    </div>
);

export default Contact;
