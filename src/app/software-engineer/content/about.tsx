import { AnimatedSection, AnimatedHeader } from "@/components/ui/animated-section";

export default function About() {
  return (
    <div className='w-full flex flex-col gap-8'>
      <AnimatedHeader className="mb-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white text-shadow-lg">
          About
        </h2>
      </AnimatedHeader>
      <AnimatedSection className="text-center max-w-4xl mx-auto">
        <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          A software engineer with experience at Amazon and a passion for building impactful tech products.
          I&apos;ve developed cross-platform apps, including a crypto wallet manager and a browser extension suite with 30+ developer tools.
          My tech stack includes Java, FastAPI, Next.js, AWS, and more. I&apos;m comfortable building full-stack systems from the ground up.
          I&apos;m also a competitive programmer, having solved over 1,500 problems and actively contributed as a problem setter and trainer.
          I love creating efficient, scalable solutions and constantly push myself to learn, build, and ship high-quality software.
        </div>
      </AnimatedSection>
    </div>
  );
}