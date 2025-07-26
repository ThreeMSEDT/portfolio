import { AnimatedSection, AnimatedHeader } from "@/components/ui/animated-section";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Head() {
  return (
    <div className='w-full h-screen flex flex-col gap-4 items-center justify-center'>
      <AnimatedHeader className="text-center">
        <div className='text-6xl md:text-8xl text-shadow-lg text-gray-900 dark:text-white'>
          Mustafa
        </div>
      </AnimatedHeader>
      <AnimatedSection className="flex gap-6 mt-4" delay={0.5}>
        <a
          href="https://linkedin.com/in/mustafa-alsheikh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/0x99M"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:scale-110 transform"
        >
          <FaGithub />
        </a>
      </AnimatedSection>
      <AnimatedSection className="text-center max-w-4xl mt-4" delay={0.3}>
        <div className="font-bold text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          A Full-stack software engineer with over 4 years of experience building scalable applications across web, mobile, and cloud platforms. Proven track record at Amazon and as an independent developer delivering impactful projects with measurable outcomes. Passionate about system design, developer tools, and competitive programming.
        </div>
      </AnimatedSection>
    </div>
  );
}