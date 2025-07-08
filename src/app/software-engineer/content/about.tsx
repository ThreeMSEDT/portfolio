import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { LuInfo } from "react-icons/lu";

export default function About() {
  return (
    <div className='w-full flex flex-col flex-wrap gap-12 items-center justify-center'>
      <Tooltip>
        <TooltipTrigger><LuInfo className="text-8xl" /></TooltipTrigger>
        <TooltipContent>
          <p className="text-md font-bold" >About</p>
        </TooltipContent>
      </Tooltip>
      <div className="text-lg" >A software engineer with experience at Amazon and a passion for building impactful tech products.
        I&apos;ve developed cross-platform apps, including a crypto wallet manager and a browser extension suite with 20+ developer tools.
        My tech stack includes Java, FastAPI, Next.js, AWS, and more. I&apos;m comfortable building full-stack systems from the ground up.
        I&apos;m also a competitive programmer, having solved over 1,000 problems and actively contributed as a problem setter and trainer.
        I love creating efficient, scalable solutions and constantly push myself to learn, build, and ship high-quality software.</div>
    </div>
  );
}