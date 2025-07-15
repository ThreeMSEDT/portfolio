import { Medal } from "@/components/ui/medal";
import { AnimatedSection, AnimatedHeader } from "@/components/ui/animated-section";

export default function Achievements() {
  return (
    <div className='w-full flex flex-col gap-8'>
      <AnimatedHeader className="mb-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white text-shadow-lg">
          Achievements
        </h2>
      </AnimatedHeader>
      <AnimatedSection className="w-full flex flex-wrap gap-4" delay={0.2}>
        <div className="flex-1 flex flex-col gap-2" >
          <div className="relative">
            <Medal place={10} className="absolute -top-1 -left-1 text-2xl sm:text-3xl md:text-4xl z-10" />
            <div className="text-4xl sm:text-6xl md:text-8xl text-shadow-lg font-bold" >
              10<span className="text-base sm:text-xl md:text-2xl" >th</span>
            </div>
          </div>
          <div className="text-base" >
            place Jordanian Collegiate Programming Contest 2020
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2" >
          <div className="relative">
            <Medal place={2} className="absolute -top-1 -left-1 text-2xl sm:text-3xl md:text-4xl z-10" />
            <div className="text-4xl sm:text-6xl md:text-8xl text-shadow-lg font-bold" >
              2<span className="text-base sm:text-xl md:text-2xl" >nd</span>
            </div>
          </div>
          <div className="text-base" >
            place Jordanian University Collegiate Programming Contest 2020
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2" >
          <div className="relative">
            <Medal place={17} className="absolute -top-1 -left-1 text-2xl sm:text-3xl md:text-4xl z-10" />
            <div className="text-4xl sm:text-6xl md:text-8xl text-shadow-lg font-bold" >
              17<span className="text-base sm:text-xl md:text-2xl" >th</span>
            </div>
          </div>
          <div className="text-base" >
            place Jordanian Collegiate Programming Contest 2019
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2" >
          <div className="relative">
            <Medal place={3} className="absolute -top-1 -left-1 text-2xl sm:text-3xl md:text-4xl z-10" />
            <div className="text-4xl sm:text-6xl md:text-8xl text-shadow-lg font-bold" >
              3<span className="text-base sm:text-xl md:text-2xl" >rd</span>
            </div>
          </div>
          <div className="text-base" >
            place Jordanian University Collegiate Programming Contest 2019
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}