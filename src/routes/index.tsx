import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

// ───────────────────────────────────────────────────────────
// EDIT ME — quick site copy you may want to change often
// ───────────────────────────────────────────────────────────
const AVAILABILITY = "Available · Fall 2026";
const GITHUB_URL = "https://github.com/LucyS-CE";
// ───────────────────────────────────────────────────────────


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucy Sun — FPGA & Embedded Systems Engineer" },
      {
        name: "description",
        content:
          "Computer Engineering at the University of Waterloo. FPGA, embedded systems, firmware, and hardware/software co-design.",
      },
      { property: "og:title", content: "Lucy Sun — FPGA & Embedded Systems Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio: FPGA board communication, mini RTOS on ARM Cortex-M, Nios II HW/SW co-design.",
      },
    ],
  }),
  component: Index,
});

const EXPERIENCE = [
  {
    role: "Embedded Systems Intern",
    company: "Shenzhen Dahuan Robotics Technology Co., Ltd.",
    dates: "Jan 2026 — Apr 2026",
    bullets: [
      "FPGA-based board-level communication: SPI, UART/RS485, SERDES, 8b/10b, FIFO.",
      "Logic-analyzer waveform debugging for multi-sensor robotic systems.",
    ],
  },
  {
    role: "Research & Development Assistant",
    company: "Wizard Technology (Shanghai)",
    dates: "May 2024 — Aug 2024",
    bullets: [
      "Cadence Virtuoso simulation, Linux CAD setup, MATLAB data processing, AI-assisted layout automation.",
    ],
  },
  {
    role: "Senior Process Mechanical Designer",
    company: "Canadian Nuclear Laboratories",
    dates: "Sep 2023 — Dec 2023",
    bullets: ["Engineering database updates, field walkdowns, AutoCAD drawing checks."],
  },
  {
    role: "Microsoft Azure / AI Project Member",
    company: "University of Waterloo",
    dates: "May 2022 — Aug 2022",
    bullets: ["Trained machine learning models on Azure as part of a student research team."],
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-9">
              <p className="label flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {AVAILABILITY}
              </p>
              <h1 className="font-display mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground leading-[0.95]">
                Lucy Sun<span className="text-accent">.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed">
                Computer Engineering @ University of Waterloo. I design and verify systems where
                <span className="text-foreground"> silicon meets software</span> — FPGAs, RTOS
                kernels, and the protocols that let boards talk.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs">
                {["FPGA", "Embedded Systems", "Firmware", "HW/SW Co-design"].map((t, i) => (
                  <span key={t} className="flex items-center gap-3">
                    {i > 0 && <span className="text-border">/</span>}
                    <span className="text-foreground">{t}</span>
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-foreground/85 transition-colors"
                >
                  <FileText className="h-4 w-4" /> Resume
                </Link>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
                >
                  <Mail className="h-4 w-4" /> Email
                </Link>
              </div>
            </div>

            <div className="md:col-span-3 hidden md:block">
              <div className="border border-border bg-card p-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                <div className="text-accent">// status</div>
                <div className="mt-2">loc: Waterloo, ON</div>
                <div>edu: UW '27</div>
                <div>focus: HDL · C</div>
                <div className="mt-2 text-accent">// stack</div>
                <div>SystemVerilog</div>
                <div>C / ARM Asm</div>
                <div>Quartus · Vivado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="label">§ 01 · Selected work</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            All projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
          {PROJECTS.map((p) => (
            <div key={p.slug} className="bg-background">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-accent">↳</span>
          More experiments, coursework, and code live on
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground underline decoration-accent/40 underline-offset-4 hover:decoration-accent transition-colors"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          — check there for full project history.
        </p>
      </section>

      {/* Experience */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10">
            <p className="label">§ 02 · Track record</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Experience
            </h2>
          </div>

          <ol className="space-y-px bg-border border border-border">
            {EXPERIENCE.map((e) => (
              <li key={e.role + e.company} className="bg-background p-6 md:p-8">
                <div className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <p className="font-mono text-xs text-muted-foreground">{e.dates}</p>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {e.role}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{e.company}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="text-accent select-none">›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="border border-border p-10 md:p-14 bg-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="label">Open to opportunities</p>
            <h3 className="font-display mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              Looking for FPGA / embedded coops & full-time roles.
            </h3>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-foreground/85 transition-colors"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
