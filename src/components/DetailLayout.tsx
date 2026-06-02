import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export type Section = { title: string; body: ReactNode };

export function DetailLayout({
  number,
  type,
  title,
  summary,
  tags,
  sections,
  image,
}: {
  number: string;
  type: string;
  title: string;
  summary: string;
  tags: string[];
  sections: Section[];
  image?: string;
}) {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All projects
      </Link>

      {image && (
        <div className="mt-8 aspect-[21/9] overflow-hidden border border-border">
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <header className="mt-8 border-b border-border pb-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-accent">{number}</span>
          <span className="label">{type}</span>
        </div>
        <h1 className="font-display mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-wider text-foreground border border-border px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-12 space-y-12">
        {sections.map((s, i) => (
          <section key={s.title} className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-3">
              <p className="font-mono text-xs text-muted-foreground">
                §{String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display mt-1 text-lg font-semibold text-foreground">
                {s.title}
              </h2>
            </div>
            <div className="md:col-span-9 text-foreground/85 leading-relaxed text-[15px] space-y-3">
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((b) => (
        <li key={b} className="flex gap-3">
          <span className="text-accent select-none mt-1">›</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}
