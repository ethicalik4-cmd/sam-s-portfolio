import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Boxes, Braces, CloudCog, Code2, Database, Layers3, Quote, ServerCog, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/button";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "SAM — Software Engineering for Ambitious Ideas" },
    { name: "description", content: "SAM designs and engineers modern websites, web applications, APIs, and custom software that move businesses forward." },
    { property: "og:title", content: "SAM — Software Engineering for Ambitious Ideas" },
    { property: "og:description", content: "Modern websites, platforms, APIs, and custom software engineered for scale." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const services = [
  { icon: Code2, title: "Web Development", text: "Fast, responsive websites and web applications engineered around real user needs." },
  { icon: ServerCog, title: "Backend Systems", text: "Secure Python systems and APIs built for reliability, scale, and clean operations." },
  { icon: Layers3, title: "Full-Stack Products", text: "Complete digital products, from the first interaction to the infrastructure beneath it." },
  { icon: Braces, title: "API Development", text: "Well-documented REST APIs and integrations that keep systems working as one." },
  { icon: Boxes, title: "Custom Software", text: "Purpose-built tools shaped around your workflows, teams, and competitive advantage." },
  { icon: Database, title: "Data Solutions", text: "Dependable data architecture that stays clear, available, and ready for what comes next." },
];
const testimonials = [
  { quote: "Sam translated a complex operational problem into software our entire team understood from day one. The quality of thought showed in every detail.", name: "Maya Chen", role: "COO, Northstar Freight" },
  { quote: "They did more than ship features. They challenged assumptions, simplified the product, and gave us a foundation we can confidently scale.", name: "Jon Bell", role: "Founder, Ledgerline" },
  { quote: "The rare engineering partner who moves quickly without creating tomorrow's problems. Clear communication, excellent craft, zero drama.", name: "Priya Raman", role: "VP Product, Orbital Labs" },
];

function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary"><span className="h-px w-8 bg-primary" />{children}</p>; }

function Index() {
  const [testimonial, setTestimonial] = useState(0);
  const [sent, setSent] = useState(false);
  return <div className="min-h-screen overflow-hidden bg-background text-foreground">
    <SiteHeader />
    <main>
      <section className="relative min-h-[92vh] border-b border-border pt-18 grid-overlay">
        <div className="mx-auto grid min-h-[calc(92vh-4.5rem)] max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
          <div className="relative z-10 animate-rise">
            <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary"><span className="size-2 bg-primary shadow-[0_0_16px_var(--primary)]" />Independent software engineering studio</p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.04] sm:text-7xl lg:text-8xl">We build software that moves <span className="text-gradient">ideas forward.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">SAM partners with ambitious teams to design and engineer websites, platforms, APIs, and custom software that perform beautifully at scale.</p>
            <div className="mt-10 flex flex-wrap gap-3"><ButtonLink href="#projects">View projects</ButtonLink><ButtonLink href="#contact" variant="outline">Contact us</ButtonLink></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl animate-rise-delayed" aria-label="Live engineering system visual">
            <div className="absolute -inset-8 bg-primary/5 blur-3xl" />
            <div className="relative border border-border bg-surface/90 p-4 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-border pb-3"><div className="flex gap-1.5"><span className="size-2 rounded-full bg-error"/><span className="size-2 rounded-full bg-warning"/><span className="size-2 rounded-full bg-success"/></div><span className="font-mono text-[10px] text-muted-foreground">sam / systems / deploy</span></div>
              <div className="grid gap-4 py-5 sm:grid-cols-[1.15fr_.85fr]">
                <div className="font-mono text-xs leading-7 text-muted-foreground"><p><span className="text-violet">const</span> <span className="text-cyan">product</span> = await build(&#123;</p><p className="pl-5">strategy: <span className="text-mint">&quot;clear&quot;</span>,</p><p className="pl-5">engineering: <span className="text-mint">&quot;robust&quot;</span>,</p><p className="pl-5">experience: <span className="text-mint">&quot;human&quot;</span>,</p><p>&#125;);</p><p className="mt-3 text-success">✓ production ready</p></div>
                <div className="grid grid-cols-2 gap-2"><Metric mini value="99.9%" label="uptime"/><Metric mini value="42ms" label="response"/><Metric mini value="A+" label="security"/><Metric mini value="24/7" label="observed"/></div>
              </div>
              <div className="flex items-end gap-1 border-t border-border pt-4">{[34,50,42,72,62,85,68,91,82,100,88,96].map((h,i)=><span key={i} className="flex-1 bg-primary/60" style={{height:`${h/2}px`}} />)}</div>
            </div>
            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 border border-border bg-background px-4 py-3 shadow-xl"><ShieldCheck className="size-5 text-success"/><div><p className="font-mono text-[10px] uppercase text-muted-foreground">System status</p><p className="text-xs font-semibold">All systems operational</p></div></div>
          </div>
        </div>
        <a href="#about" aria-label="Scroll to about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground lg:block"><ArrowDown className="size-5 animate-bounce"/></a>
      </section>

      <section id="about" className="scroll-mt-18 border-b border-border py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2"><div><SectionLabel>About SAM</SectionLabel><h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Engineering is only valuable when it solves the <span className="text-primary">right problem.</span></h2></div><div className="space-y-5 text-base leading-8 text-muted-foreground"><p>SAM is a software engineering studio for organizations that care about both outcomes and craft. We turn complex requirements into focused, maintainable products.</p><p>Our work balances thoughtful user experience with serious technical foundations. No unnecessary complexity. No fragile shortcuts. Just software designed to keep earning its place.</p><div className="flex items-center gap-3 pt-2 text-sm font-semibold text-foreground"><Sparkles className="size-4 text-primary"/>Strategy, design, and engineering — one accountable team.</div></div></div>
        <div className="mt-16 grid grid-cols-2 border-l border-t border-border lg:grid-cols-4"><Metric value="10+" label="Projects delivered"/><Metric value="5+" label="Core technologies"/><Metric value="100%" label="Commitment"/><Metric value="24/7" label="Innovation mindset"/></div>
      </div></section>

      <section id="services" className="scroll-mt-18 border-b border-border bg-surface-deep py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionLabel>Capabilities</SectionLabel><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="max-w-2xl font-display text-4xl font-semibold sm:text-5xl">From the first system sketch to production.</h2><p className="max-w-md text-sm leading-7 text-muted-foreground">A focused set of engineering capabilities for building products that are useful now and adaptable later.</p></div><div className="mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">{services.map((service,index)=><article key={service.title} className="group min-h-64 border-b border-r border-border p-7 transition-colors hover:bg-secondary"><div className="flex items-center justify-between"><service.icon className="size-7 text-primary"/><span className="font-mono text-xs text-muted-foreground">0{index+1}</span></div><h3 className="mt-12 font-display text-xl font-semibold">{service.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{service.text}</p></article>)}</div></div></section>

      <section id="projects" className="scroll-mt-18 py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionLabel>Selected work</SectionLabel><h2 className="max-w-3xl font-display text-4xl font-semibold sm:text-5xl">Products engineered to make a measurable difference.</h2><div className="mt-16 space-y-20">{projects.map((project,index)=><article key={project.slug} className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16"><Link to="/projects/$slug" params={{slug:project.slug}} className={`relative block overflow-hidden border border-border bg-surface ${index%2 ? "lg:order-2" : ""}`}><div className="absolute inset-0 z-10 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10"/><img src={project.image} alt={project.imageAlt} width={1280} height={800} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"/></Link><div className={index%2 ? "lg:order-1" : ""}><div className="flex items-center gap-4 font-mono text-xs text-primary"><span>{project.number}</span><span className="h-px w-12 bg-border"/><span>CASE STUDY</span></div><h3 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">{project.title}</h3><p className="mt-3 text-lg text-foreground/80">{project.kicker}</p><p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.technologies.map(tech=><span key={tech} className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase text-muted-foreground">{tech}</span>)}</div><Link to="/projects/$slug" params={{slug:project.slug}} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore case study <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></Link></div></article>)}</div></div></section>

      <section id="testimonials" className="scroll-mt-18 border-y border-border bg-surface-deep py-24"><div className="mx-auto max-w-5xl px-5 text-center lg:px-8"><SectionLabel>Client perspective</SectionLabel><Quote className="mx-auto size-9 text-primary"/><blockquote className="mx-auto mt-8 max-w-4xl font-display text-2xl leading-relaxed sm:text-4xl">“{testimonials[testimonial].quote}”</blockquote><p className="mt-8 font-semibold">{testimonials[testimonial].name}</p><p className="mt-1 text-sm text-muted-foreground">{testimonials[testimonial].role}</p><div className="mt-8 flex justify-center gap-2">{testimonials.map((_,i)=><button key={i} type="button" onClick={()=>setTestimonial(i)} aria-label={`Show testimonial ${i+1}`} className={`h-1 transition-all ${i===testimonial ? "w-10 bg-primary" : "w-5 bg-border"}`}/>)}</div></div></section>

      <section id="contact" className="scroll-mt-18 py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><SectionLabel>Start a conversation</SectionLabel><h2 className="font-display text-4xl font-semibold sm:text-5xl">Have an idea worth building?</h2><p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">Tell us where you want to go. We’ll bring technical clarity, honest perspective, and the engineering to get you there.</p><div className="mt-10 space-y-6"><div><p className="font-mono text-[10px] uppercase text-primary">Email</p><a href="mailto:hello@sam.dev" className="mt-1 block text-lg">hello@sam.dev</a></div><div><p className="font-mono text-[10px] uppercase text-primary">Availability</p><p className="mt-1 text-lg">Taking on select projects</p></div></div></div>
      <form onSubmit={(e)=>{e.preventDefault();setSent(true);}} className="grid gap-5 border border-border bg-surface p-6 sm:grid-cols-2 sm:p-8">{sent ? <div className="col-span-full flex min-h-96 flex-col items-center justify-center text-center"><span className="flex size-14 items-center justify-center border border-success/40 bg-success/10"><ShieldCheck className="size-7 text-success"/></span><h3 className="mt-6 font-display text-2xl font-semibold">Message received.</h3><p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">Thanks for reaching out. We’ll review your note and get back to you shortly.</p><button type="button" onClick={()=>setSent(false)} className="mt-6 text-sm font-semibold text-primary">Send another message</button></div> : <><Field label="Name" name="name" placeholder="Your name"/><Field label="Email" name="email" type="email" placeholder="you@company.com"/><div className="sm:col-span-2"><Field label="Subject" name="subject" placeholder="What are you building?"/></div><label className="sm:col-span-2"><span className="mb-2 block font-mono text-[10px] uppercase text-muted-foreground">Message</span><textarea name="message" required rows={6} placeholder="A little context about the project, goals, and timing..." className="w-full resize-none border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"/></label><button type="submit" className="group sm:col-span-2 flex h-12 items-center justify-center gap-2 bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Send message <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></button></>}</form></div></section>
    </main><SiteFooter />
  </div>;
}

function Metric({ value, label, mini=false }: {value:string;label:string;mini?:boolean}) { if(mini) return <div className="border border-border bg-background/60 p-3"><p className="font-mono text-lg font-bold text-foreground">{value}</p><p className="mt-1 text-[9px] uppercase text-muted-foreground">{label}</p></div>; return <div className="border-b border-r border-border p-6 sm:p-8"><p className="font-display text-3xl font-semibold text-primary sm:text-4xl">{value}</p><p className="mt-2 text-xs text-muted-foreground">{label}</p></div>; }
function Field({label,name,type="text",placeholder}:{label:string;name:string;type?:string;placeholder:string}) {return <label><span className="mb-2 block font-mono text-[10px] uppercase text-muted-foreground">{label}</span><input name={name} type={type} required placeholder={placeholder} className="h-12 w-full border border-input bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"/></label>}
