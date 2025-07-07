export default function Experience() {
  return (
    <div className='w-full h-full flex flex-col flex-wrap gap-4 text-base'>
      <div className="flex flex-col gap-2" >
        <div className="text-xl sm:text-2xl md:text-3xl" >
          Full-Stack Engineer
        </div>
        <div className="flex gap-2 text-sm" >
          <span>Nov • 2024 - Present</span>
        </div>
        <div>
          Developed and launched multiple full-stack applications, including a cross-platform cryptocurrency wallet manager, a browser extension suite with 20+ developer tools, and a SaaS platform for custom trading indicators and backtesting across various assets.
        </div>
      </div>
      <div className="flex flex-col gap-2" >
        <div className="text-xl sm:text-2xl md:text-3xl" >
          Software Development Engineer
        </div>
        <div className="flex gap-2 text-sm" >
          <span>Amazon</span>
          |
          <span>Aug • 2022 - Oct • 2023</span>
        </div>
        <div>
          Led the enhancement and redesign of the Exchange program control portal, enabling cross-team collaboration, expanding program reach from 1 to 4 marketplaces, and improving portal expansion efficiency by 90% through scalable system architecture.
        </div>
      </div>
      <div className="flex flex-col gap-2" >
        <div className="text-xl sm:text-2xl md:text-3xl" >
          Software Developer
        </div>
        <div className="flex gap-2 text-sm" >
          <span>UniTicker</span>
          |
          <span>Aug • 2022 - Aug • 2022</span>
        </div>
        <div>
          Drove major system improvements, reducing server RAM by 71% (350+ GB to &lt; 100 GB) and data processing delays from 4+ hours to &lt; 5 seconds, while refactoring for better performance.
        </div>
      </div>
    </div>
  );
}