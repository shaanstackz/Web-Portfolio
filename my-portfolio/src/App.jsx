import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import WorkExperience from "./components/WorkExperience";

import "./styles/App.css"; // Import your styles
import MatrixBackground from './components/MatrixBackground';
import "aos/dist/aos.css"; // AOS styles
import AOS from "aos";

AOS.init(); // Initialize AOS animations

const App = () => {
  return (
    <>
    
      <Header />
      <Hero />
      <Education />
      <Portfolio />
      <WorkExperience />
      <MatrixBackground />
    </>
  );
};

export default App;
