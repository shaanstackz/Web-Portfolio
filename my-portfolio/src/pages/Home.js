// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;