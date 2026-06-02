import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <article className="group relative h-full border border-border bg-card p-6 transition-colors hover:border-foreground/40">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-accent">{project.number}</span>
          <span className="label">{project.type}</span>
        </div>
        {project.hasDetail ? (
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        ) : (
          <span className="font-mono text-[10px] text-muted-foreground">card only</span>
        )}
      </div>

      <h3 className="font-display mt-5 text-xl font-semibold leading-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-1.5 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    </article>
  );

  if (!project.hasDetail) return inner;
  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }} className="block h-full">
      {inner}
    </Link>
  );
}
