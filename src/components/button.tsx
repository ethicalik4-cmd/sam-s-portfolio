import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  children: React.ReactNode;
  to?: "/" | "/projects/$slug";
  params?: { slug: string };
  href?: string;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
};

const styles = {
  primary: "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border-border bg-transparent text-foreground hover:border-primary/60 hover:bg-secondary",
  ghost: "border-transparent bg-transparent text-foreground hover:text-primary",
};

export function ButtonLink({ children, to, params, href, className, variant = "primary" }: ButtonLinkProps) {
  const classes = cn("group inline-flex h-12 items-center justify-center gap-2 rounded-sm border px-5 text-sm font-semibold transition-all duration-300", styles[variant], className);
  const content = <>{children}<ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></>;
  if (to === "/projects/$slug" && params) return <Link to={to} params={params} className={classes}>{content}</Link>;
  if (to === "/") return <Link to="/" className={classes}>{content}</Link>;
  return <a href={href} className={classes}>{content}</a>;
}
