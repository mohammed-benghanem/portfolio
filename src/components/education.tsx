import type { ReactNode } from "react";
import type { Dictionary } from "@/dictionaries";
import { Award, GraduationCap, Languages } from "./icons";
import { Section, SectionHeading } from "./section";

export function Education({ education }: { education: Dictionary["education"] }) {
  return (
    <Section id="education" className="bg-white">
      <SectionHeading eyebrow={education.eyebrow} title={education.title} titleAccent={education.titleAccent} />

      <div className="grid gap-5 md:grid-cols-2">
        {education.items.map((e, i) => (
          <div key={e.degree} className="reveal card card-hover p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="flex size-12 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600">
                <GraduationCap width={22} height={22} />
              </span>
              <span className="font-display text-4xl font-bold text-sky-200">0{i + 1}</span>
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-sky-700">{e.period}</p>
            <h3 className="mt-2 font-display text-lg font-bold leading-snug text-slate-950 sm:text-xl">{e.degree}</h3>
            <p className="mt-1.5 text-sm text-slate-500">{e.school}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="reveal card p-6 sm:p-8">
          <CardTitle icon={<Award width={18} height={18} />} title={education.certificationsTitle} />
          <ul className="space-y-3">
            {education.certifications.map((c) => (
              <li key={c.name} className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3 text-sm">
                <span className="font-medium text-slate-800">{c.name}</span>
                <span className="shrink-0 rounded-md border border-sky-200 bg-white px-2 py-0.5 text-[11px] font-bold text-sky-700">
                  {c.issuer}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal card p-6 sm:p-8">
          <CardTitle icon={<Languages width={18} height={18} />} title={education.languagesTitle} />
          <ul className="space-y-5">
            {education.languages.map((l) => (
              <li key={l.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-800">{l.name}</span>
                  <span className="text-slate-500">{l.level}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="bg-brand-gradient h-full rounded-full" style={{ width: `${l.value}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function CardTitle({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="flex size-10 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600">{icon}</span>
      <h3 className="font-display text-lg font-bold text-slate-950">{title}</h3>
    </div>
  );
}
