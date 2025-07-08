'use client';

import { motion } from 'framer-motion';
import { Separator } from "@/components/ui/separator";
import About from './content/about';
import Experience from './content/experience';
import Education from './content/education';
import Achievements from './content/achievements';
import Skills from './content/skills';
import Head from './content/head';

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
    }
  }
};

const separatorVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2
    }
  }
};

export default function SoftwareEngineer() {
  return (
    <div className='w-full flex flex-col items-center justify-center' >
      <motion.div
        className='w-4/6 my-32 flex flex-col flex-wrap gap-12 items-center justify-center text-center'
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Head />
        </motion.div>
        <div></div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <About />
        </motion.div>

        <motion.div
          variants={separatorVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Separator />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Experience />
        </motion.div>

        <motion.div
          variants={separatorVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Separator />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          variants={separatorVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Separator />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Education />
        </motion.div>

        <motion.div
          variants={separatorVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Separator />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Achievements />
        </motion.div>

        <motion.div
          variants={separatorVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Separator />
        </motion.div>
      </motion.div>
    </div>
  );
}