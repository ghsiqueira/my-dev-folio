'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useKonamiCode } from '../hooks/useKonamiCode';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy } from 'lucide-react';

export default function LevelUp() {
  const { triggered, setTriggered } = useKonamiCode();

  useEffect(() => {
    if (triggered) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;

      const random = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        confetti({
          particleCount: 50,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: random(0.1, 0.3),
            y: Math.random() - 0.2
          }
        });
        confetti({
          particleCount: 50,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: random(0.7, 0.9),
            y: Math.random() - 0.2
          }
        });
      }, 250);

      setTimeout(() => setTriggered(false), 5000);
    }
  }, [triggered, setTriggered]);

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-yellow-500 text-black px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-3 border-4 border-white"
        >
          <Trophy size={24} />
          CHEAT CODE ACTIVATED: GOD MODE! 🎮
        </motion.div>
      )}
    </AnimatePresence>
  );
}