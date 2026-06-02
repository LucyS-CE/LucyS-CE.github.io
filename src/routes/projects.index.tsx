import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Lucy Sun" },
      {
        name: "description",
        content:
          "FPGA, embedded firmware, and hardware/software co-design projects by Lucy Sun.",
      },
      { property: "og:title", content: "Projects — Lucy Sun" },
      {
        property: "og:description",
        content:
          "FPGA board communication, mini RTOS, Nios II co-design, STM32, and Linux systems projects.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="label">Index · All projects</p>
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
    </section>
  );
}
