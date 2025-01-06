import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [displayText, setDisplayText] = useState('');
  const fullName = 'Shaan Kohli';
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing effect
  useEffect(() => {
    if (isTyping) {
      if (displayText.length < fullName.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullName.slice(0, displayText.length + 1));
        }, 150); // Adjust speed here
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [displayText, isTyping, fullName]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-pink-300 via-fuchsia-200 to-purple-300">
      <div className="container mx-auto px-4 flex justify-between items-center h-12">
        <h1 
          className="text-xl m-0 leading-none relative"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          {displayText}
          <span 
            className={`absolute ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
            style={{ color: '#333' }}
          >
            |
          </span>
        </h1>
        
        <nav>
          <ul className="flex items-center gap-4 m-0 p-0">
            <li className="list-none">
              <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors duration-300 text-sm">
                About
              </a>
            </li>
            <li className="list-none">
              <a href="#projects" className="text-gray-700 hover:text-pink-500 transition-colors duration-300 text-sm">
                Projects
              </a>
            </li>
            <li className="list-none">
              <a href="#work-experience" className="text-gray-700 hover:text-pink-500 transition-colors duration-300 text-sm">
                Work Experience
              </a>
            </li>
            <li className="list-none">
              <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors duration-300 text-sm">
                Contact
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 text-gray-700 hover:text-pink-500 transition-colors duration-300" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 text-gray-700 hover:text-pink-500 transition-colors duration-300" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;