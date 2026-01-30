'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  'ทำเว็บไซต์',
  'เว็บแอพ', 
  'ระบบหลังบ้าน',
  'สร้างแบรนด์ออนไลน์'
];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500); // เปลี่ยนคำทุก 2.5 วินาที

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
      <span>เราช่วยคุณ</span>
      <br className="sm:hidden" />
      <span className="relative inline-flex min-w-[200px] sm:min-w-[280px] md:min-w-[340px] h-[1.2em] overflow-hidden align-bottom ml-0 sm:ml-3">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuad - smooth และทันสมัย
            }}
            className="absolute left-0 whitespace-nowrap text-emerald-500"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
