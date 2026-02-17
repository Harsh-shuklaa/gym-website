// Import all images here
// Managing them in one file makes it easier to swap them out

// Hero & Backgrounds
import heroBg from '../assets/images/hero.jpg';
import aboutBg from '../assets/images/about-bg.jpg';
import ctaBg from '../assets/images/cta-bg.jpg';
import location from '../assets/images/location.jpg';

// Programs
import program1 from '../assets/images/program-1.jpg';
import program2 from '../assets/images/program-2.jpg';
import program3 from '../assets/images/program-3.jpg';
import program4 from '../assets/images/program-2.jpg';
import program5 from '../assets/images/program-1.jpg';
import program6 from '../assets/images/program-6.jpg';

// Trainers
import trainer1 from '../assets/images/trainer-1.jpg';
import trainer2 from '../assets/images/trainer-2.jpg';
import trainer3 from '../assets/images/trainer-1.jpg';
import trainer4 from '../assets/images/trainer-4.jpg';

// Export object
export const images = {
    hero: heroBg,
    about: aboutBg,
    cta: ctaBg,
    location: location,
    programs: [program1, program2, program3, program4, program5, program6],
    trainers: [trainer1, trainer2, trainer3, trainer4]
};
