import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects, getProject } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => { const project = getProject(params.slug); if (!project) throw notFound(); return project; },
  head: ({ loaderData }) => { const title = loaderData ? `${loaderData.title} Case Study — SAM` : "Project Not Found — SAM"; const description = loaderData?.description ?? "The requested SAM software engineering case study could not be found."; return { meta: [{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:type",content:"article"},{name:"twitter:card",content:"summary_large_image"}]}; },
  component: ProjectCaseStudy,
  notFoundComponent: () => <div className="min-h-screen bg-background text-foreground"><SiteHeader/><main className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center"><p className="font-mono text-xs text-primary">404 / PROJECT</p><h1 className="mt-4 font-display text-5xl font-semibold">Case study not found.</h1><Link to="/" className="mt-8 text-primary">Return to SAM</Link></main><SiteFooter/></div>,
});

function ProjectCaseStudy() {
  const project = Route.useLoaderData();
  const currentIndex = projects.findIndex(p=>p.slug===project.slug);
  const next = projects[(currentIndex+1)%projects.length] ?? project;
  return <div className="min-h-screen bg-background text-foreground"><SiteHeader/><main>
    <section className="grid-overlay border-b border-border pt-18"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"><Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="size-4"/>Back to projects</Link><div className="mt-14 grid gap-10 lg:grid-cols-[1fr_.55fr] lg:items-end"><div><p className="font-mono text-xs uppercase tracking-widest text-primary">{project.number} / Case study</p><h1 className="mt-5 font-display text-5xl font-semibold sm:text-7xl">{project.title}</h1><p className="mt-5 text-xl text-foreground/80 sm:text-2xl">{project.kicker}</p></div><p className="text-base leading-8 text-muted-foreground">{project.description}</p></div><div className="mt-14 overflow-hidden rounded-lg border border-border bg-muted"><img src={project.image} alt={project.imageAlt} width={1280} height={800} className="aspect-[16/8] w-full rounded-lg object-cover text-transparent"/></div></div></section>
    <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8"><div><p className="font-mono text-xs uppercase tracking-widest text-primary">Project foundation</p><div className="mt-8 flex flex-wrap gap-2">{project.technologies.map(t=><span key={t} className="border border-border px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground">{t}</span>)}</div></div><div className="grid gap-12 md:grid-cols-2"><div><h2 className="font-display text-2xl font-semibold">The challenge</h2><p className="mt-5 text-sm leading-8 text-muted-foreground">{project.challenge}</p></div><div><h2 className="font-display text-2xl font-semibold">The solution</h2><p className="mt-5 text-sm leading-8 text-muted-foreground">{project.solution}</p></div></div></div></section>
    <section className="bg-surface-deep py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="font-mono text-xs uppercase tracking-widest text-primary">Measured outcomes</p><div className="mt-10 grid border-l border-t border-border md:grid-cols-3">{project.outcomes.map(o=><div key={o.label} className="border-b border-r border-border p-8"><CheckCircle2 className="size-5 text-success"/><p className="mt-10 font-display text-4xl font-semibold">{o.value}</p><p className="mt-2 text-sm text-muted-foreground">{o.label}</p></div>)}</div></div></section>
    <section className="border-t border-border py-20"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 sm:flex-row sm:items-end lg:px-8"><div><p className="font-mono text-xs uppercase text-primary">Next case study</p><h2 className="mt-3 font-display text-3xl font-semibold">{next.title}</h2></div><Link to="/projects/$slug" params={{slug:next.slug}} className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">View project <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></Link></div></section>
  </main><SiteFooter/></div>;
}
