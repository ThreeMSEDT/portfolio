import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { BiLogoCPlusPlus, BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaAws, FaFigma, FaGitAlt, FaGithub, FaJava, FaJira, FaPython, FaReact } from "react-icons/fa";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { LuPocketKnife } from "react-icons/lu";
import { SiSpring, SiNextdotjs, SiFastapi, SiJquery, SiTailwindcss, SiDaisyui, SiPaddle } from "react-icons/si";

export default function Skills() {
  return (
    <div className="flex flex-col flex-wrap gap-12 items-center justify-center" >
      <Tooltip>
        <TooltipTrigger><LuPocketKnife className="text-6xl md:text-8xl" /></TooltipTrigger>
        <TooltipContent>
          <p className="text-md font-bold" >Skills</p>
        </TooltipContent>
      </Tooltip>
      <div className='w-full flex flex-col items-center justify-center flex-wrap gap-4 sm:gap-8 text-lg sm:text-3xl md:text-4xl'>
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center justify-center" >
          <Tooltip>
            <TooltipTrigger><BiLogoCPlusPlus /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >C++</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><FaDartLang /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >Dart</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><FaJava /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >Java</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><BiLogoJavascript /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >JavaScript</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><BiLogoTypescript /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >TypeScript</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><FaPython /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >Python</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center justify-center" >
          <Tooltip>
            <TooltipTrigger><SiSpring /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >Spring</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><FaReact /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >React</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><SiNextdotjs /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >Next.js</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><FaFlutter /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >Flutter</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><SiFastapi /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >FastAPI</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><SiJquery /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >jQuery</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><SiTailwindcss /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >Tailwind CSS</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><SiDaisyui /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >daisyUI</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center justify-center" >
          <Tooltip>
            <TooltipTrigger><FaAws /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >AWS</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><FaFigma /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >Figma</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><FaJira /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >Jira</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><FaGitAlt /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >Git</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><FaGithub /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >GitHub</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger><SiPaddle /></TooltipTrigger>
            <TooltipContent>
              <p className="text-md font-bold" >Paddle</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}