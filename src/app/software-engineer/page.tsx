'use client';

import { motion } from 'framer-motion';
import About from './content/about';
import Experience from './content/experience';
import Education from './content/education';
import Achievements from './content/achievements';
import Skills from './content/skills';
import Head from './content/head';

export default function SoftwareEngineer() {
  return (
    <div className='w-full flex flex-col items-center justify-center' >
      <motion.div
        className='w-4/6 mb-32 flex flex-col flex-wrap gap-24 items-center justify-center text-center'
      >
        <Head />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
      </motion.div>
    </div>
  );
}