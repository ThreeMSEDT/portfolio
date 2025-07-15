import { AnimatedSection, AnimatedHeader } from "@/components/ui/animated-section";

export default function Education() {
  return (
    <div className='w-full flex flex-col gap-8'>
      <AnimatedHeader className="mb-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white text-shadow-lg">
          Education
        </h2>
      </AnimatedHeader>
      <div className="space-y-8">
        <AnimatedSection className="flex flex-col gap-3 items-center text-center" delay={0.2}>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            BSc in Computing, Computer Science
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span>University of Jordan | 2017 - 2021 | GPA: 3.66 / 4</span>
          </div>
          <div className="text-gray-700 dark:text-gray-300 max-w-2xl">
            Active contributor to programming competitions as participant, problem writer, judge, and trainer.
          </div>
        </AnimatedSection>
        <AnimatedSection className="flex flex-col gap-3 items-center text-center" delay={0.4}>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Scientific Specialization
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span>Salah AlDeen High School | 2015 - 2017 | 89.9%</span>
          </div>
          <div className="text-gray-700 dark:text-gray-300 max-w-2xl">
            Ninth in the batch. Top 1% in my school. Top 10% in my country.
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}