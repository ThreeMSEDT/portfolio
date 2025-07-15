import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { LuFileUser } from "react-icons/lu";
import { AnimatedSection, AnimatedHeader } from "@/components/ui/animated-section";

export default function Resume() {
  return (
    <div className='w-full flex flex-col gap-8'>
      <AnimatedHeader className="mb-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white text-shadow-lg">
          Resume
        </h2>
      </AnimatedHeader>
      <AnimatedSection className="flex flex-col items-center gap-4">
        <Tooltip>
          <TooltipTrigger>
            <a href="/Mustafa Alsheikh Resume.pdf" target="_blank" rel="noopener noreferrer">
              <LuFileUser className="text-6xl md:text-8xl hover:scale-110 transition-transform duration-300 text-gray-700 dark:text-gray-300" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-md font-bold">Open Resume</p>
          </TooltipContent>
        </Tooltip>
        <p className="text-gray-600 dark:text-gray-400 text-center">
          Click to view my complete resume
        </p>
      </AnimatedSection>
    </div>
  );
}