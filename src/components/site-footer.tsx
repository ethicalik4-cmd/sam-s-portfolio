import { Github, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return <footer className="border-t border-border bg-surface-deep">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
      <div><Link to="/" className="font-display text-2xl font-bold">SAM<span className="text-primary">.</span></Link><p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">Engineering dependable digital products for ambitious teams. Built with clarity, care, and momentum.</p></div>
      <div><p className="mb-4 font-mono text-xs uppercase text-primary">Navigate</p><div className="grid gap-3 text-sm text-muted-foreground"><a href="/#about">About</a><a href="/#services">Services</a><a href="/#projects">Projects</a><a href="/#contact">Contact</a></div></div>
      <div><p className="mb-4 font-mono text-xs uppercase text-primary">Connect</p><div className="flex gap-3"><a aria-label="GitHub" href="https://github.com" className="flex size-10 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"><Github className="size-4" /></a><a aria-label="LinkedIn" href="https://linkedin.com" className="flex size-10 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"><Linkedin className="size-4" /></a><a aria-label="X" href="https://x.com" className="flex size-10 items-center justify-center border border-border font-mono text-sm transition-colors hover:border-primary hover:text-primary">X</a></div></div>
    </div>
    <div className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between lg:px-8"><span>© 2026 Sam. All rights reserved.</span><span>Designed & engineered with intent.</span></div></div>
  </footer>;
}
