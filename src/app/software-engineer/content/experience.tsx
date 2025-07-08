export default function Experience() {
  return (
    <div className='w-full flex flex-col flex-wrap gap-8 text-base'>
      <div className="flex flex-col gap-2 items-center justify-center" >
        <div className="text-xl sm:text-2xl md:text-3xl" >
          Full-Stack Engineer
        </div>
        <div className="flex gap-2 text-sm" >
          <span>11/2023 - Present</span>
        </div>
        <div>
          Developed and launched multiple full-stack applications, including a cross-platform cryptocurrency wallet manager, a browser extension suite with 20+ developer tools, and a SaaS platform for custom trading indicators and backtesting across various assets.
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center" >
        <div className="text-xl sm:text-2xl md:text-3xl" >
          Software Development Engineer
        </div>
        <div className="flex gap-2 text-sm" >
          <span>Amazon</span>
          |
          <span>08/2022 - 10/2023</span>
        </div>
        <div>
          Led the enhancement and redesign of the Exchange program control portal, enabling cross-team collaboration, expanding program reach from 1 to 4 marketplaces, and improving portal expansion efficiency by 90% through scalable system architecture.
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center" >
        <div className="text-xl sm:text-2xl md:text-3xl" >
          Software Developer
        </div>
        <div className="flex gap-2 text-sm" >
          <span>UniTicker</span>
          |
          <span>08/2021 - 08/2022</span>
        </div>
        <div>
          Drove major system improvements, reducing server RAM by 71% (350+ GB to &lt; 100 GB) and data processing delays from 4+ hours to &lt; 5 seconds, while refactoring for better performance.
        </div>
      </div>
    </div>
  );
}