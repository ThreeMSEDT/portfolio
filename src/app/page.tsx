'use client';

import { motion } from 'framer-motion';
import { megrim } from './fonts';

const letters = ['3', 'M', 'S', 'E', 'D', 'T']

export default function Home() {
  return (
    <div className={`w-full h-full flex items-center justify-center gap-24 text-9xl ${megrim.className}`} >
      {letters.map((char, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.5, ease: 'easeOut' }}
        >
          {char}
        </motion.div>
      ))}
    </div>
  );
}
