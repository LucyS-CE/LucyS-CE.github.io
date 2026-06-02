import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, showImage = true }: { project: Project; showImage?: boolean }) {
  const inner = (
    <article className="group relative h-full border border-border bg-card transition-colors hover:border-foreground/40 overflow-hidden">
      {showImage && (
        <div className="aspect-[16/9] overflow-hidden border-b border-border">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
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
      </div>

      <div className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    </article>
  );

  if (!project.hasDetail) return inner;
  return (
    <Link to={`/projects/${project.slug}`} className="block h-full">
      {inner}
    </Link>
  );
}
