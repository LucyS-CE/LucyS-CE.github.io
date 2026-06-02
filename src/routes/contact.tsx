import { createFileRoute } from "@tanstack/react-router";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lucy Sun" },
      {
        name: "description",
        content: "Get in touch with Lucy Sun — email, GitHub, LinkedIn.",
      },
      { property: "og:title", content: "Contact — Lucy Sun" },
      {
        property: "og:description",
        content: "Get in touch with Lucy Sun — email, GitHub, LinkedIn.",
      },
    ],
  }),
  component: Contact,
});

const CHANNELS = [
  {
    label: "Email",
    value: "lucy.sun@uwaterloo.ca",
    href: "mailto:lucy.sun@uwaterloo.ca",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/lucysun",
    href: "https://github.com/",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lucysun",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
];

function Contact() {
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
                <div className="border border-border p-2.5">
                  <c.icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="label">{c.label}</p>
                  <p className="font-mono text-sm text-foreground mt-1">{c.value}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 font-mono text-xs text-muted-foreground">
        Update the email and handle URLs in <code className="text-foreground">src/routes/contact.tsx</code>.
      </p>
    </section>
  );
}
