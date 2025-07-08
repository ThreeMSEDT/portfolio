'use client';

import { Separator } from "@/components/ui/separator";
import About from './content/about';
import Experience from './content/experience';
import Education from './content/education';
import Achievements from './content/achievements';
import Skills from './content/skills';

export default function SoftwareEngineer() {
  return (
    <div className='w-full flex items-center justify-center' >
      <div className='w-4/6 mt-24 mb-24 h-fit flex flex-col flex-wrap gap-12 items-center justify-center text-center'>
        <About />
        <Separator />
        <Experience />
        <Separator />
        <Skills />
        <Separator />
        <Education />
        <Separator />
        <Achievements />
        <Separator />
      </div>
    </div>
  );
}
