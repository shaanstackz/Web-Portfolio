import React, { useEffect } from 'react';

const MatrixBackground = () => {
  useEffect(() => {
    const initializeMatrix = () => {
      const background = document.createElement('div');
      background.className = 'code-background';
      document.body.prepend(background);

      // Use brighter colors
      const chars = '0123456789ABCDEF';
      const createColumns = () => {
        background.innerHTML = '';
        const columns = Math.floor(window.innerWidth / 10); // More dense columns
        
        for (let i = 0; i < columns; i++) {
          const column = document.createElement('div');
          column.className = 'code-column';
          column.style.left = i * 10 + 'px'; // Closer spacing
          column.style.animationDuration = 8 + Math.random() * 10 + 's'; // Slower animation
          column.style.color = '#00FFFF'; // Light cyan for bright effect
          column.style.textShadow = '0 0 10px #00FFFF, 0 0 20px #00FFFF'; // Glowing text effect

          let columnText = '';
          const length = 25 + Math.floor(Math.random() * 35); // More characters
          for (let j = 0; j < length; j++) {
            columnText += chars[Math.floor(Math.random() * chars.length)] + '\n';
          }
          column.textContent = columnText;
          
          background.appendChild(column);
        }
      };

      createColumns();
      window.addEventListener('resize', createColumns);
      
      return () => {
        window.removeEventListener('resize', createColumns);
        if (background && background.parentNode) {
          background.parentNode.removeChild(background);
        }
      };
    };

    const cleanup = initializeMatrix();
    return cleanup;
  }, []);

  return null;
};

export default MatrixBackground;
