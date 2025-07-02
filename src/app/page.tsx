'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const header = 'MUSTAFA'.split('');
const subheader = 'Muslim  Software Engineer  Day Trader'.split('  ');
const routes = ['/muslim', '/software-engineer', '/day-trader'];

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col gap-8 items-center justify-center' >
      <div className='flex gap-4 items-center justify-center text-9xl'>
        {header.map((char, i) => (
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
      <div className='flex gap-4 items-center justify-center text-xl text-center text-[#AEAEAE]'>
        {subheader.map((part, i) => (
          <Link href={routes[i]} key={i}>
            <motion.div
              className="cursor-pointer hover:text-[#E3E3E3]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: header.length * 0.2 + i * 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              {part}
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
