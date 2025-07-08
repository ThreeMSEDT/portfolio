import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { LuGraduationCap } from "react-icons/lu";

export default function Education() {
  return (
    <div className='w-full flex flex-col flex-wrap gap-8 items-center justify-between text-base'>
      <div className="mb-4" >
        <Tooltip>
          <TooltipTrigger><LuGraduationCap className="text-6xl md:text-8xl" /></TooltipTrigger>
          <TooltipContent>
            <p className="text-md font-bold" >Education</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex flex-col gap-2 items-center justify-between" >
        <div className="text-xl sm:text-2xl md:text-3xl" >
          BSc in Computing, Computer Science
        </div>
        <div className="flex gap-2 text-sm" >
          <span>University of Jordan | 2017 - 2021 | GPA: 3.66 / 4</span>
        </div>
        <div>
          Active contributor to programming competitions as participant, problem writer, judge, and trainer.
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-between" >
        <div className="text-xl sm:text-2xl md:text-3xl" >
          Scientific Specialization
        </div>
        <div className="flex gap-2 text-sm" >
          <span>Salah AlDeen High School | 2015 - 2017 | 89.9%</span>
        </div>
        <div>
          Ninth in the batch. Top 1% in my school. Top 10% in my country.
        </div>
      </div>
    </div>
  );
}