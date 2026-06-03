import { Download, FileText, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <p className="label">Document</p>
      <h1 className="font-display mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
        Resume<span className="text-accent">.</span>
      </h1>
      <p className="mt-5 text-muted-foreground leading-relaxed">
        Latest CV — Computer Engineering, FPGA and embedded systems focus.
      </p>

      <div className="mt-10 border border-border bg-card p-8">
        <div className="flex items-start gap-4">
          <div className="border border-border p-3">
            <FileText className="h-6 w-6 text-accent" />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-base md:text-xl font-semibold break-words">Lucy_Sun_Resume.pdf</h2>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              PDF · Updated {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Lucy_Sun_Resume.pdf"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-foreground/85 transition-colors"
          >
            <Download className="h-4 w-4" /> Download PDF
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors"
          >
            <ExternalLink className="h-4 w-4" /> Open in new tab
          </a>
        </div>

        <p className="mt-6 font-mono text-xs text-muted-foreground">
          Note: To update the resume, replace <code className="text-foreground">resume.pdf</code> in the <code className="text-foreground">/public</code> folder.
        </p>
      </div>
    </section>
  );
}
