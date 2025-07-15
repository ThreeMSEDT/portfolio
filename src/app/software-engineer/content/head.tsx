import { AnimatedSection, AnimatedHeader } from "@/components/ui/animated-section";

export default function Head() {
  return (
    <div className='w-full h-screen flex flex-col gap-8 items-center justify-center'>
      <AnimatedHeader className="text-center">
        <div className='text-6xl md:text-8xl text-shadow-lg text-gray-900 dark:text-white'>
          Mustafa
        </div>
      </AnimatedHeader>
      <AnimatedSection className="text-center max-w-4xl" delay={0.3}>
        <div className="font-bold text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          A Full-stack software engineer with over 4 years of experience building scalable applications across web, mobile, and cloud platforms. Proven track record at Amazon and as an independent developer delivering impactful projects with measurable outcomes. Passionate about system design, developer tools, and competitive programming.
        </div>
      </AnimatedSection>
    </div>
  );
}