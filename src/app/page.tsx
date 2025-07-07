'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const options = 'Muslim  Software Engineer  Day Trader'.split('  ');
const routes = ['/muslim', '/software-engineer', '/day-trader'];

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col flex-wrap gap-4 sm:gap-6 items-center justify-center text-xl sm:text-2xl md:text-3xl text-center text-[#6b6b6b]'>
      {options.map((option, i) => (
        <Link href={routes[i]} key={i}>
          <motion.div
            className={`relative inline-block cursor-pointer
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
        </Link>
      ))}
    </div>
  );
}
