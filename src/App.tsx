import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./routes/index";
import Contact from "./routes/contact";
import Resume from "./routes/resume";
import ProjectsIndex from "./routes/projects.index";
import ProjectDetail from "./routes/projects.$slug";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-base font-semibold tracking-tight text-foreground">
          Lucy Sun<span className="text-accent">.</span>
        </Link>
        <nav className="flex items-center gap-1 font-mono text-xs">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `rounded-sm px-3 py-1.5 transition-colors ${
                  isActive
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Lucy Sun · Built with intent.</p>
        <p>FPGA · Embedded · Firmware · HW/SW Co-design</p>
      </div>
    </footer>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="label">Error 404</p>
        <h1 className="font-display mt-4 text-6xl font-semibold text-foreground">Not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          That route isn&rsquo;t wired up. Check the URL or head back home.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/85"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<ProjectsIndex />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
