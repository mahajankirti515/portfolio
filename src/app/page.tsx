"use client";
import { memo, useMemo, lazy, Suspense, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Icons } from "@/components/icons";
import OnekoCat from "@/components/OnekoCat";
import { ChevronDown, ChevronUp } from "lucide-react";

// Lazy load heavy components
const ProjectCard = lazy(() => import("@/components/project-card").then(m => ({ default: m.ProjectCard })));
const ResumeCard = lazy(() => import("@/components/resume-card").then(m => ({ default: m.ResumeCard })));
const TracingBeam = lazy(() => import("@/components/ui/tracing-beam").then(m => ({ default: m.TracingBeam })));
import SeeMoreButton from "@/components/SeeMoreButton";

const BLUR_FADE_DELAY = 0.02;

// Memoized components
const MemoizedBlurFadeText = memo(BlurFadeText);
const MemoizedBlurFade = memo(BlurFade);
const MemoizedBadge = memo(Badge);
const MemoizedAvatar = memo(Avatar);

const { useState: useStateHook } = { useState };

// Memoized sections
const HeroSection = memo(function HeroSection() {
  const firstName = useMemo(() => DATA.name.split(" ")[0], []);
  
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <MemoizedBlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${firstName} 👋`}
            />
            <MemoizedBlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
          <MemoizedBlurFade delay={BLUR_FADE_DELAY}>
            <MemoizedAvatar className="size-28 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="scale-150" loading="lazy" />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </MemoizedAvatar>
          </MemoizedBlurFade>
        </div>
      </div>
    </section>
  );
});

const AboutSection = memo(function AboutSection() {
  const scrollToSection = useMemo(() => (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section id="about">
      <MemoizedBlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </MemoizedBlurFade>
      <MemoizedBlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          <p>
            I specialize in building AI agents and automation flows with n8n, including RAG, image AI, and WhatsApp/Telegram bots. With strong experience in React and Next.js, I build clean and scalable web apps.
          </p>
          <p>
            My goal is to create products where AI automation removes manual work and improves business efficiency. Currently working at{" "}
            <a 
              href="#work" 
              className="underline underline-offset-4 hover:text-foreground transition-colors cursor-pointer"
              onClick={scrollToSection('work')}
            >
              Eulogik
            </a>
            {" "}and building exciting{" "}
            <a 
              href="#projects" 
              className="underline underline-offset-4 hover:text-foreground transition-colors cursor-pointer"
              onClick={scrollToSection('projects')}
            >
              projects
            </a>
            .
          </p>
          <p>
            I regularly practice coding challenges on{" "}
            <a 
              href="https://leetcode.com/u/mahajankirti515" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              LeetCode
            </a>
            {" "}and{" "}
            <a 
              href="https://www.codechef.com/users/kirti515" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              CodeChef
            </a>
            {" "}to sharpen my problem-solving skills.
          </p>
        </div>
      </MemoizedBlurFade>
    </section>
  );
});

const WorkSection = memo(function WorkSection() {
  const workItems = useMemo(() => DATA.work, []);
  
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <MemoizedBlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </MemoizedBlurFade>
        {workItems.map((work, id) => (
          <MemoizedBlurFade
            key={work.company}
            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
          >
            <Suspense fallback={null}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${(work as any).end ?? "Present"}`}
                description={work.description}
              />
            </Suspense>
          </MemoizedBlurFade>
        ))}
      </div>
    </section>
  );
});

const EducationSection = memo(function EducationSection() {
  const [showAll, setShowAll] = useState(false);
  const educationItems = useMemo(() => DATA.education, []);
  const displayedEducation = useMemo(() => showAll ? educationItems : educationItems.slice(0, 1), [showAll, educationItems]);
  
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <MemoizedBlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Education</h2>
        </MemoizedBlurFade>
        {displayedEducation.map((education, id) => (
          <MemoizedBlurFade
            key={education.school}
            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
          >
            <Suspense fallback={null}>
              <ResumeCard
                href={(education as any).href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </Suspense>
          </MemoizedBlurFade>
        ))}
        {educationItems.length > 1 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto"
          >
            {showAll ? (
              <>
                Show less <ChevronUp className="size-4" />
              </>
            ) : (
              <>
                Show {educationItems.length - 1} more <ChevronDown className="size-4" />
              </>
            )}
          </button>
        )}
      </div>
    </section>
  );
});

const SkillsSection = memo(function SkillsSection() {
  const skills = useMemo(() => DATA.skills, []);
  
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <MemoizedBlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </MemoizedBlurFade>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, id) => (
            <MemoizedBlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <MemoizedBadge>{skill}</MemoizedBadge>
            </MemoizedBlurFade>
          ))}
        </div>
      </div>
    </section>
  );
});

const ProjectsSection = memo(function ProjectsSection() {
  const projects = useMemo(() => DATA.projects.slice(0, 4), []);
  
  return (
    <section id="projects">
      <Suspense fallback={null}>
        <TracingBeam>
          <div className="space-y-12 w-full py-12">
            <MemoizedBlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </MemoizedBlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {projects.map((project, id) => (
                <MemoizedBlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <Suspense fallback={null}>
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </Suspense>
                </MemoizedBlurFade>
              ))}
            </div>
            <div className="w-full flex justify-center mt-8">
              <SeeMoreButton href="/projects" />
            </div>
          </div>
        </TracingBeam>
      </Suspense>
    </section>
  );
});

const ContactSection = memo(function ContactSection() { return (
  <section id="contact">
    <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
      <MemoizedBlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Want to chat? Reach out to me through any of these platforms:
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://wa.me/917987311916"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              prefetch={false}
            >
              <Icons.whatsapp className="size-4" />
              WhatsApp
            </Link>
            <Link
              href="mailto:mahajankirti515@gmail.com"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              prefetch={false}
            >
              <Icons.email className="size-4" />
              Email
            </Link>
          </div>
        </div>
      </MemoizedBlurFade>
    </div>
  </section>
); });

const Page = memo(function Page() {
  return (
    <main className="relative flex flex-col min-h-[100dvh] space-y-10">
      <OnekoCat />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
});

export default Page;
