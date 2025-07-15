import { LuMonitorCog, LuBuilding2, LuCalendar, LuMapPin } from "react-icons/lu";
import { SiAmazon } from "react-icons/si";
import { AnimatedSection, AnimatedHeader, StaggeredContainer } from "@/components/ui/animated-section";

interface ExperienceItemProps {
  title: string;
  company: string;
  location?: string;
  duration: string;
  description: string[];
  technologies: string[];
  companyIcon?: React.ReactNode;
  current?: boolean;
}

function TimelineItem({ title, company, location, duration, description, technologies, companyIcon, current, isLast }: ExperienceItemProps & { isLast?: boolean }) {
  return (
    <AnimatedSection className="relative group">
      {/* Mobile Layout - Icon at top center */}
      <div className="flex flex-col items-center sm:hidden mb-4">
        <div className={`relative z-10 flex items-center justify-center w-12 h-12 transition-all duration-300 group-hover:scale-110 ${current
          ? 'dark:bg-white border-gray-700 dark:border-gray-300'
          : ' dark:bg-gray-300 border-gray-500 dark:border-gray-500'
          }`}>
          {companyIcon ? (
            <div className={current ? "text-white dark:text-gray-900" : "text-white dark:text-gray-900"}>
              <div className="w-6 h-6">
                {companyIcon}
              </div>
            </div>
          ) : (
            <div className="w-3 h-3 bg-white dark:bg-gray-900 rounded-full"></div>
          )}
        </div>
      </div>

      {/* Desktop Layout - Timeline on left */}
      <div className="hidden sm:flex items-start">
        <div className="flex flex-col items-center mr-6">
          {/* Timeline Node */}
          <div className={`relative z-10 flex items-center justify-center w-12 h-12 transition-all duration-300 group-hover:scale-110 ${current
            ? 'dark:bg-white border-gray-700 dark:border-gray-300'
            : ' dark:bg-gray-300 border-gray-500 dark:border-gray-500'
            }`}>
            {companyIcon ? (
              <div className={current ? "text-white dark:text-gray-900" : "text-white dark:text-gray-900"}>
                <div className="w-6 h-6">
                  {companyIcon}
                </div>
              </div>
            ) : (
              <div className="w-3 h-3 bg-white dark:bg-gray-900 rounded-full"></div>
            )}
          </div>

          {/* Vertical Line */}
          {!isLast && (
            <div className="w-0.5 h-24 bg-gradient-to-b from-gray-400 to-gray-300 dark:from-gray-500 dark:to-gray-600 mt-2"></div>
          )}
        </div>

        {/* Content Card for Desktop */}
        <div className="flex-1 px-6 py-6 mb-8 relative w-full">
          {current && (
            <div className="absolute -top-3 -right-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
              Current Role
            </div>
          )}

          {/* Header */}
          <div className="mb-4">
            <div className="flex flex-row items-center justify-between mb-2 gap-4">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                <LuCalendar className="w-4 h-4" />
                <span className="font-medium">{duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <LuBuilding2 className="w-4 h-4" />
              <span className="font-semibold text-lg">{company}</span>
              {location && (
                <>
                  <span className="text-gray-400">•</span>
                  <LuMapPin className="w-4 h-4" />
                  <span>{location}</span>
                </>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 text-start">
            <ul className="space-y-3">
              {description.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Content - Below the centered icon */}
      <div className="sm:hidden px-4 pt-4 relative">
        {current && (
          <div className="absolute -top-2 -right-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
            Current Role
          </div>
        )}

        {/* Header */}
        <div className="mb-3 text-center">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full w-fit mx-auto mb-2">
            <LuCalendar className="w-3 h-3" />
            <span className="font-medium">{duration}</span>
          </div>

          <div className="flex flex-col items-center gap-1 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <LuBuilding2 className="w-3 h-3" />
              <span className="font-semibold text-base">{company}</span>
            </div>
            {location && (
              <div className="flex items-center gap-2">
                <LuMapPin className="w-3 h-3" />
                <span className="text-sm">{location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-4 text-start">
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <span className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="leading-relaxed text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 justify-center">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Experience() {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Full-Stack Engineer",
      company: "Independent",
      location: "Remote",
      duration: "11/2023 - Present",
      current: true,
      description: [
        "Built a cross-platform cryptocurrency management app with unified wallet integration across multiple exchanges",
        "Developed a browser extension suite featuring 30+ tools for developers, available on Chrome and Firefox",
        "Created an enterprise-grade SaaS platform using Next.js, FastAPI, and AWS (Amplify, AppRunner, DynamoDB, S3)",
        "Integrated Auth0 for authentication and Paddle for payment processing",
        "Built advanced features such as custom trading indicators and multi-asset backtesting for stocks, crypto, and NFTs"
      ],
      technologies: ["Next.js", "FastAPI", "AWS", "Auth0", "Paddle", "DynamoDB", "S3", "TypeScript"],
      companyIcon: <LuMonitorCog className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Software Development Engineer",
      company: "Amazon",
      location: "Amman",
      duration: "08/2022 - 10/2023",
      description: [
        "Led enhancements to the Exchange Program Control Portal, expanding its scope from 1 to 4 marketplaces",
        "Redesigned marketplace onboarding, achieving a 90% improvement in expansion efficiency",
        "Collaborated across teams to scale system architecture and support growing operational needs"
      ],
      technologies: ["Java", "AWS", "DynamoDB", "Lambda", "Python"],
      companyIcon: <SiAmazon className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Software Developer",
      company: "UniTicker",
      location: "Amman",
      duration: "08/2021 - 08/2022",
      description: [
        "Optimized infrastructure, reducing server RAM usage by 71% (from 350+ GB to under 100 GB)",
        "Improved data streaming latency from 4+ hours to under 5 seconds",
        "Refactored core market data processing, enhancing performance and maintainability"
      ],
      technologies: ["Java", "Python", "Javascript", "jQuery", "AWS", "Market Data APIs"],
      companyIcon: <LuBuilding2 className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <div className='w-full flex flex-col gap-8'>
      <AnimatedHeader className="mb-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white text-shadow-lg">
          Professional Experience
        </h2>
      </AnimatedHeader>

      <StaggeredContainer className="relative">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            {...experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </StaggeredContainer>
    </div>
  );
}