'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import About from './content/about';
import Experience from './content/experience';
import Education from './content/education';
import Achievements from './content/achievements';

const options = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Achievements', 'Resume'];

export default function SoftwareEngineer() {
  const content = [
    <About key='about' />,
    <Experience key='experience' />,
    <div key="skills">Skills content coming soon...</div>,
    <div key="projects">Projects content coming soon...</div>,
    <Education key='education' />,
    <Achievements key='achievements'/>,
    <div key="resume">Resume content coming soon...</div>
  ];

  const [hoveredOption, setHoveredOption] = useState<number>(0);

  return (
    <div className='w-full h-full flex flex-wrap gap-8 items-center justify-center'>
      <div className='flex-1 flex flex-col flex-wrap items-center justify-center gap-4 sm:gap-6 text-base sm:text-xl md:text-2xl text-[#6b6b6b]'>
        {options.map((option, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHoveredOption(i)}
            className={`relative cursor-pointer w-fit
              hover:text-[#252525]
              hover:[text-shadow:0_2px_4px_rgba(0,0,0,0.2)]
              before:content-[''] before:absolute before:bottom-0 before:left-0
              before:h-[2px] before:w-full before:bg-[#252525]
              before:rounded-full
              before:origin-center
              before:scale-x-0
              before:transition-transform before:duration-300
              hover:before:scale-x-100`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.2,
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            {option}
          </motion.div>
        ))}
      </div>
      <div className="flex-2 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={hoveredOption}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {content[hoveredOption]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
