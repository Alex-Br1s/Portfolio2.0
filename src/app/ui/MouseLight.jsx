

import React, { useEffect, useState } from 'react';

const MouseLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => document.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
    id="mouse-light"
    style={{
      position: 'fixed',
      width: '120px',
      height: '120px',
      backgroundColor: 'transparent',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: '9999',
      top: `${mousePosition.y - 50}px`,
      left: `${mousePosition.x - 50}px`,
      boxShadow: '0 0 200px 40px #193968', 
      filter: 'blur(50px)', 
    }}
  />
  );
};

export default MouseLight;
