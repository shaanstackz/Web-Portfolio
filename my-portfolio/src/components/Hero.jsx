import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../images/shaan.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I'm Shaan";
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing effect
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [text]);

  // Blinking cursor effect
  useEffect(() => {
    if (isTypingComplete) {
      const interval = setInterval(() => {
        setCursorVisible((prev) => !prev);
      }, 530);
      return () => clearInterval(interval);
    }
  }, [isTypingComplete]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2 space-y-8">
          {/* Animated Title */}
          <h2 className="text-5xl font-bold text-gray-900 relative">
            {text}
            <span 
              className={`absolute ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
            >
              |
            </span>
          </h2>
          
          <p className="text-xl text-gray-800 max-w-2xl leading-relaxed">
            A passionate fourth-year computer science student specializing in full-stack development
            and object-oriented design. I transform complex problems into elegant solutions.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-2.5 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1">
              View Projects
            </button>
            <button className="px-6 py-2.5 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1">
              Download Resume
            </button>
          </div>
            
          <div className="flex gap-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-800 hover:text-pink-500 transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-800 hover:text-pink-500 transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-gray-800 hover:text-pink-500 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>

          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
            <span role="img" aria-label="rocket" className="text-2xl">🚀</span>
            <span className="text-lg text-gray-800">Open to Opportunities</span>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
        <img 
            src={profileImg}
            alt="Shaan"
            className="rounded-full w-80 h-80 object-cover border-4 border-white shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;