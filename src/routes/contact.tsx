import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const CHANNELS = [
  {
    label: "Email",
    value: "g33sun@uwaterloo.ca",
    href: "mailto:g33sun@uwaterloo.ca",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/LucyS-CE",
    href: "https://github.com/LucyS-CE",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/guoxiaoqingsun",
    href: "https://www.linkedin.com/in/guoxiaoqingsun/",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <p className="label">Channels</p>
      <h1 className="font-display mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
        Get in touch<span className="text-accent">.</span>
      </h1>
      <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
        Best reached by email. I&rsquo;m most interested in FPGA, embedded firmware, and
        hardware/software co-design opportunities.
      </p>

      <ul className="mt-10 border border-border divide-y divide-border bg-card">
        {CHANNELS.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 p-6 hover:bg-secondary/60 transition-colors"
            >
              <div className="flex items-center gap-5">
                <div className="border border-border p-2 md:p-2.5">
                  <c.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" />
                </div>
                <div>
                  <p className="label">{c.label}</p>
                  <p className="font-mono text-xs md:text-sm text-foreground mt-1 break-all">{c.value}</p>
                </div>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
