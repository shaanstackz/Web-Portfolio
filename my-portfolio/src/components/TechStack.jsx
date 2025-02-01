import React from 'react';
import { motion } from 'framer-motion';
import reactLogo from '../images/react.svg';
import javascriptLogo from '../images/javascript.svg';
import nodejsLogo from '../images/nodejs.svg';
import cssLogo from '../images/css.svg';
import htmlLogo from '../images/html.svg';
import tailwindLogo from '../images/tailwindcss.svg';
const TechStack = () => {
  const techStackData = [
    { name: "React", logo: reactLogo, category: "Frontend" },
    { name: "JavaScript", logo: javascriptLogo, category: "Language" },
    { name: "Node.js", logo: nodejsLogo, category: "Backend" },
    { name: "CSS3", logo: cssLogo, category: "Frontend" },
    { name: "HTML5", logo: htmlLogo, category: "Frontend" },
    { name: "Tailwind CSS", logo: tailwindLogo, category: "Framework" },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-16 text-white">
          Tools and Technologies
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStackData.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 flex flex-col items-center text-center hover:bg-gray-800 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-white text-sm font-medium mb-1">{tech.name}</h3>
              <p className="text-gray-400 text-xs">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;