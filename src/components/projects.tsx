import type { ReactNode } from "react";
import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { ArrowRight, ArrowUpRight, GitHub, Globe, Lock } from "./icons";
import { Section, SectionHeading, SoftTag, Tag } from "./section";

export function Projects({ projects }: { projects: Dictionary["projects"] }) {
  const f = projects.featured;

  return (
    <Section id="projects" className="bg-white">
      <SectionHeading
        eyebrow={projects.eyebrow}
        title={projects.title}
        titleAccent={projects.titleAccent}
        subtitle={projects.subtitle}
      />

      {/* Featured: ClauseLens */}
      <article className="reveal card overflow-hidden p-3 sm:p-4">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-700">
                {f.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700">
                ★ {f.label}
              </span>
            </div>
            <h3 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">{f.name}</h3>
            <p className="mt-2 text-base font-semibold text-sky-600">{f.subtitle}</p>
            <p className="mt-4 leading-relaxed text-slate-600">{f.description}</p>
            <ul className="mt-5 space-y-2.5">
              {f.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              {f.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          {/* Metrics panel */}
          <div className="relative overflow-hidden rounded-2xl border border-sky-100/70 bg-[#f0f7ff] p-6 sm:rounded-3xl sm:p-8">
            <div aria-hidden className="bg-grid-agency absolute inset-0 opacity-60" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">{f.metricsTitle}</p>
              <div className="mt-6 space-y-4">
                {f.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-white bg-white/90 p-5 shadow-[0_10px_30px_rgba(14,165,233,0.08)]">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-sm font-bold text-slate-900">{m.label}</p>
                      <p className="text-sm">
                        <span className="font-semibold text-slate-400 line-through">{m.before}</span>
                        <span className="mx-2 text-slate-300">→</span>
                        <span className="text-gradient font-display text-2xl font-extrabold">{m.after}</span>
                      </p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <Bar label={f.before} value={m.beforeValue} tone="muted" />
                      <Bar label={f.after} value={m.afterValue} tone="accent" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {f.highlights.map((h) => (
                  <div key={h.label} className="rounded-xl border border-white bg-white/80 px-2 py-3">
                    <p className="font-display text-xl font-extrabold text-slate-950">{h.value}</p>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-500">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Personal & open-source projects */}
      <SubHeading>{projects.personalTitle}</SubHeading>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.personal.map((p) => (
          <article key={p.name} className="reveal card card-hover flex flex-col p-3 sm:p-4">
            {p.image ? (
              <div className="overflow-hidden rounded-2xl border border-sky-100/70 bg-[#f0f7ff] p-2.5 sm:rounded-3xl sm:p-3">
                <div className="overflow-hidden rounded-xl border border-white bg-white shadow-[0_10px_30px_rgba(14,165,233,0.12)]">
                  <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
                    <span className="flex gap-1">
                      <span className="size-2 rounded-full bg-red-400/80" />
                      <span className="size-2 rounded-full bg-amber-400/80" />
                      <span className="size-2 rounded-full bg-emerald-400/80" />
                    </span>
                    <span className="mx-auto flex items-center gap-1 text-[10px] font-bold text-slate-600">
                      <Lock width={10} height={10} className="text-sky-600" />
                      {p.image.url}
                    </span>
                  </div>
                  <div className="relative aspect-[16/8.2]">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      sizes="(min-width: 768px) 520px, 100vw"
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ) : p.bars ? (
              <div className="relative overflow-hidden rounded-2xl border border-sky-100/70 bg-[#f0f7ff] p-5 sm:rounded-3xl sm:p-6">
                <div aria-hidden className="bg-grid-agency absolute inset-0 opacity-60" />
                <div className="relative">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-sky-700">{p.bars.title}</p>
                  <div className="mt-4 space-y-2.5">
                    {p.bars.items.map((b, i) => {
                      const best = i === p.bars!.items.reduce((m, x, j, arr) => (x.value > arr[m].value ? j : m), 0);
                      return (
                        <div key={b.label} className="rounded-xl border border-white bg-white/85 px-3.5 py-2.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className={best ? "font-bold text-slate-900" : "font-medium text-slate-600"}>{b.label}</span>
                            <span className={best ? "text-gradient font-display font-extrabold" : "font-semibold text-slate-500"}>{b.display}</span>
                          </div>
                          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className={`h-full rounded-full ${best ? "bg-brand-gradient" : "bg-slate-300"}`}
                              style={{ width: `${b.value}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}

            <div className="flex flex-1 flex-col px-3 pb-3 pt-6 sm:px-4 sm:pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-700">
                  {p.category}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  {p.status}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-slate-950">{p.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <SoftTag key={t}>{t}</SoftTag>
                ))}
              </div>
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-slate-100 pt-5">
                <div className="min-w-0">
                  <p className="text-gradient font-display text-2xl font-extrabold sm:text-3xl">{p.stat.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{p.stat.label}</p>
                </div>
                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-slate-800"
                  >
                    {p.link.kind === "code" ? <GitHub width={14} height={14} /> : <Globe width={14} height={14} />}
                    {p.link.kind === "code" ? projects.viewCode : projects.visitSite}
                    <ArrowUpRight width={13} height={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Work projects */}
      <SubHeading>{projects.workTitle}</SubHeading>
      <div className="grid gap-5 md:grid-cols-3">
        {projects.others.map((p) => (
          <article key={p.name} className="reveal card card-hover flex flex-col p-6 sm:p-7">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-700">
                {p.category}
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                {p.status}
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-slate-950">{p.name}</h3>
            <p className="mt-1 text-xs font-semibold text-slate-400">{p.context}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <SoftTag key={t}>{t}</SoftTag>
              ))}
            </div>
            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-gradient font-display text-3xl font-extrabold">{p.stat.value}</p>
              <p className="mt-1 text-xs text-slate-500">{p.stat.label}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Stats band */}
      <div className="reveal mt-16 grid grid-cols-2 rounded-3xl border border-slate-200/90 bg-white p-2 shadow-[0_20px_50px_rgba(14,165,233,0.08)] lg:grid-cols-4">
        {projects.stats.map((s, i) => (
          <div
            key={s.tag}
            className={`px-4 py-6 text-center sm:px-6 ${i % 2 === 1 ? "border-l border-slate-100" : ""} ${
              i >= 2 ? "border-t border-slate-100 lg:border-t-0" : ""
            } ${i === 2 ? "lg:border-l" : ""}`}
          >
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{s.tag}</p>
            <p className="text-gradient mt-1.5 font-display text-3xl font-extrabold sm:text-4xl">{s.value}</p>
            <p className="mx-auto mt-1.5 max-w-[200px] text-xs leading-snug text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="reveal mt-12 text-center">
        <p className="text-sm font-semibold text-slate-800 sm:text-base">{projects.ctaText}</p>
        <a
          href="#contact"
          className="bg-brand-gradient group mt-5 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-105 hover:shadow-sky-400/40"
        >
          {projects.ctaButton}
          <ArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </Section>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <div className="reveal mb-6 mt-16 flex items-center gap-4">
      <h3 className="shrink-0 font-display text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">{children}</h3>
      <span className="h-px flex-1 bg-gradient-to-r from-sky-200 to-transparent" />
    </div>
  );
}

function Bar({ label, value, tone }: { label: string; value: number; tone: "muted" | "accent" }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-12 shrink-0 text-[11px] font-semibold text-slate-400">{label}</span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${tone === "accent" ? "bg-brand-gradient" : "bg-slate-300"}`}
          style={{ width: `${Math.max(value, 1)}%` }}
        />
      </div>
    </div>
  );
}
