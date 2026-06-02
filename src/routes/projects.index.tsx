import { CornerDownRight, Github } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

const GITHUB_URL = "https://github.com/LucyS-CE";

export default function ProjectsIndex() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="label">All projects</p>
      <h1 className="font-display mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
        Projects<span className="text-accent">.</span>
      </h1>
      <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
        Selected work across FPGA design, embedded firmware, and systems programming. Detail
        pages exist for the strongest three — others are documented as cards.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 gap-px bg-border border border-border">
        {PROJECTS.map((p) => (
          <div key={p.slug} className="bg-background">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1">
        <CornerDownRight className="h-4 w-4 text-accent shrink-0" strokeWidth={1.75} />
        <span>More experiments, coursework, and code live on</span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-foreground underline decoration-accent/40 underline-offset-4 hover:decoration-accent transition-colors"
        >
          <Github className="h-3.5 w-3.5" /> GitHub
        </a>
        <span>— check there for full project history.</span>
      </p>
    </section>
  );
}
