import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { LuFileUser } from "react-icons/lu";

export default function Resume() {
  return (
    <div className='w-full flex flex-col flex-wrap gap-8 items-center justify-between text-base'>
      <div className="mb-4" >
        <Tooltip>
          <TooltipTrigger>
            <a href="/Mustafa Alsheikh Resume.pdf" target="_blank" rel="noopener noreferrer">
              <LuFileUser className="text-6xl md:text-8xl" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-md font-bold" >Open Resume</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}