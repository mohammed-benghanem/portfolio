import type { Dictionary } from "@/dictionaries";
import { Briefcase } from "./icons";
import { Section, SectionHeading, Tag } from "./section";

export function Experience({ experience }: { experience: Dictionary["experience"] }) {
  return (
    <Section id="experience" glow className="bg-gradient-to-b from-white via-slate-50/60 to-white">
      <SectionHeading
        eyebrow={experience.eyebrow}
        title={experience.title}
        titleAccent={experience.titleAccent}
        subtitle={experience.subtitle}
      />

      <ol className="relative mx-auto max-w-4xl">
        {/* Timeline rail */}
        <span
          aria-hidden
          className="absolute bottom-6 left-[19px] top-6 w-0.5 rounded-full bg-gradient-to-b from-blue-600 via-sky-300 to-transparent sm:left-[23px]"
        />
        {experience.items.map((job) => (
          <li key={job.company} className="reveal relative pb-10 pl-14 last:pb-0 sm:pl-20">
            <span
              aria-hidden
              className={`absolute left-0 top-6 flex size-10 items-center justify-center rounded-xl border shadow-sm sm:size-12 ${
                job.current
                  ? "bg-brand-gradient border-transparent text-white shadow-sky-500/30"
                  : "border-sky-100 bg-white text-sky-600"
              }`}
            >
              <Briefcase width={18} height={18} />
            </span>

            <article className="card card-hover p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-700">
                  {job.company}
                </span>
                {job.current ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    {experience.currentLabel}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">{job.role}</h3>
              <p className="mt-1 text-sm font-semibold text-slate-500">{job.period}</p>

              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
