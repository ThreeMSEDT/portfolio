"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

export default function Head() {
  const email = "Mustafa.I.Alsheikh@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  return (
    <div className='w-full flex flex-col flex-wrap gap-8 items-center justify-center'>
      <div className='text-6xl md:text-8xl text-shadow-lg' >
        I&apos;m Mustafa
      </div>
      <div className='text-base' >
        <span><Tooltip>
          <TooltipTrigger onClick={handleCopy} style={{ cursor: 'pointer' }}>{email}</TooltipTrigger>
          <TooltipContent>
            <p className="text-md font-bold" >Copy</p>
          </TooltipContent>
        </Tooltip> | Amman, Jordan</span>
      </div>
      <div className="font-bold" >
        Full-stack software engineer with over 4 years of experience building scalable applications across web, mobile, and cloud platforms. Proven track record at Amazon and as an independent developer delivering impactful projects with measurable outcomes. Passionate about system design, developer tools, and competitive programming.
      </div>
    </div>
  );
}