import type { ReactNode } from "react";
import { Sparkles } from "./icons";

type HeadingProps = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50/90 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-700 shadow-xs">
      <Sparkles width={13} height={13} className="text-sky-500" />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, titleAccent, subtitle, align = "center" }: HeadingProps) {
  const centered = align === "center";
  return (
    <div className={`reveal ${centered ? "mx-auto mb-14 max-w-3xl text-center sm:mb-20" : "mb-8"}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
        <span className="text-gradient">{titleAccent}</span>
      </h2>
      {subtitle && (
        <p className={`mt-4 text-sm leading-relaxed text-slate-600 sm:text-base ${centered ? "mx-auto max-w-2xl" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

export function Section({ id, children, className = "", glow = false }: SectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden py-24 lg:py-32 ${className}`}>
      {glow && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-sky-200/35 blur-[140px]" />
          <div className="absolute -right-32 top-2/3 h-[480px] w-[480px] rounded-full bg-cyan-200/30 blur-[140px]" />
        </div>
      )}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-xs">
      <span className="size-1.5 rounded-full bg-sky-500" />
      {children}
    </span>
  );
}

export function SoftTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
      {children}
    </span>
  );
}
