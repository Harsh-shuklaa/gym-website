import React from 'react';
import Hero from '../components/features/Hero';
import Programs from '../components/features/Programs';
import Trainers from '../components/features/Trainers';
import Pricing from '../components/features/Pricing';
import Testimonials from '../components/features/Testimonials';
import CTABanner from '../components/features/CTABanner';

const Home = () => {
  return (
    <main>
      <Hero />
      <Programs />
      <Trainers />
      <Pricing />
      <Testimonials />
      <CTABanner />
    </main>
  );
};

export default Home;
