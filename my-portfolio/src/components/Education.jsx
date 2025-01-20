import React from "react";
import school from "../images/tmu.jpg";
import { motion } from "framer-motion"; // Add framer-motion for smooth animations

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 mb-16 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontFamily: "'Poppins', sans-serif" }} // Apply Poppins Font
        >
          Education
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-green-400/20">
            <div className="timeline-line"></div>
          </div>

          <div className="space-y-16">
            {/* Education Entry */}
            <div className="relative pl-24">
              <div className="timeline-node absolute left-6 top-0 -translate-x-1/2"></div>
              <div className="timeline-connector"></div>

              <div className="timeline-content text-white transition-all duration-500 hover:text-yellow-400">
                <motion.div
                  className="timeline-date text-lg font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ fontFamily: "'Poppins', sans-serif" }} // Apply Poppins Font
                >
                  2020 - 2025 (Expected Graduation)
                </motion.div>

                <div className="flex items-center gap-4 mb-4">
                  {/* Logo */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-green-500 hover:border-yellow-500 p-2 transition-all duration-300">
                    <img
                      src={school}
                      alt="Toronto Metropolitan University"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Education Info */}
                  <div className="flex-grow">
                    <h3
                      className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-600 tracking-wide"
                      style={{ fontFamily: "'Poppins', sans-serif" }} // Apply Poppins Font
                    >
                      Toronto Metropolitan University
                    </h3>
                    <div className="text-xl text-gray-300">
                      Bachelor of Science in Computer Science
                    </div>
                    <div className="text-sm text-white/70">
                      Toronto, ON, Canada
                    </div>
                  </div>
                </div>

                <motion.ul
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <li
                    className="leading-relaxed pl-4 border-l border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:text-yellow-400"
                    style={{ fontFamily: "'Poppins', sans-serif" }} // Apply Poppins Font
                  >
                    Specializing in programming, machine learning, and data science.
                  </li>
                  <li
                    className="leading-relaxed pl-4 border-l border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:text-yellow-400"
                    style={{ fontFamily: "'Poppins', sans-serif" }} // Apply Poppins Font
                  >
                    Built dynamic websites using HTML, CSS, JavaScript, and Angular.
                  </li>
                  <li
                    className="leading-relaxed pl-4 border-l border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:text-yellow-400"
                    style={{ fontFamily: "'Poppins', sans-serif" }} // Apply Poppins Font
                  >
                    Gained experience in data structures, algorithms, and problem-solving.
                  </li>
                  <li
                    className="leading-relaxed pl-4 border-l border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:text-yellow-400"
                    style={{ fontFamily: "'Poppins', sans-serif" }} // Apply Poppins Font
                  >
                    Worked on machine learning projects and data visualization techniques.
                  </li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
