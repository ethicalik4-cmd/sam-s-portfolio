import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/button";

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isHome = pathname === "/";
  const homeHref = (hash: string) => isHome ? hash : `/${hash}`;

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
      <Link to="/" className="flex items-center gap-3" aria-label="SAM home">
        <span className="flex size-8 items-center justify-center rounded-sm border border-primary/50 bg-primary/10 font-mono text-sm font-bold text-primary">S</span>
        <span className="font-display text-lg font-bold tracking-wide">SAM<span className="text-primary">.</span></span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
        {navItems.map(([label, hash]) => <a key={label} href={homeHref(hash)} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
      </nav>
      <div className="hidden md:block"><ButtonLink href={homeHref("#contact")} className="h-10 px-4">Start a project</ButtonLink></div>
      <button type="button" onClick={() => setOpen(!open)} className="flex size-10 items-center justify-center text-foreground md:hidden" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
      <div className="flex flex-col gap-1">{navItems.map(([label, hash]) => <a key={label} href={homeHref(hash)} onClick={() => setOpen(false)} className="border-b border-border py-4 text-lg">{label}</a>)}<a href={homeHref("#contact")} onClick={() => setOpen(false)} className="mt-4 flex h-12 items-center justify-center rounded-sm bg-primary font-semibold text-primary-foreground">Start a project</a></div>
    </nav>}
  </header>;
}
