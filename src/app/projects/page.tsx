"use client";
import { memo, useMemo, lazy, Suspense } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const ProjectCard = lazy(() => import("@/components/project-card").then(m => ({ default: m.ProjectCard })));

const BLUR_FADE_DELAY = 0.04;

const Page = memo(function Page() {
  const projects = useMemo(() => DATA.projects, []);
  
  return (
    <main className="relative flex flex-col min-h-[100dvh] space-y-10">
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  All Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Complete Work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through all my projects and work.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
              >
                <Suspense fallback={<div className="h-64 bg-muted animate-pulse rounded-lg" />}>
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
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
});

export default Page;
