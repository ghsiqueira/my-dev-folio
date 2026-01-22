'use client';

import { useEffect, useState } from 'react';

export function useKonamiCode() {
  const [triggered, setTriggered] = useState(false);
  
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
    'b', 'v'
  ];

  useEffect(() => {
    let cursor = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[cursor]) {
        cursor++;
        
        if (cursor === konamiCode.length) {
          setTriggered(true);
          cursor = 0;
        }
      } else {
        cursor = 0; 
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { triggered, setTriggered };
}