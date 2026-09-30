import { profile, type Dictionary } from "@/dictionaries";
import { BrandMark } from "./brand";
import { ArrowRight, Briefcase, Check, Download, GraduationCap, Languages, Layers, MapPin, Shield, Sparkles, Zap } from "./icons";
import { Eyebrow, Section } from "./section";

const pillarIcons = [Sparkles, Layers, Shield];

const factIcons = {
  goal: Sparkles,
  location: MapPin,
  role: Briefcase,
  education: GraduationCap,
  languages: Languages,
  availability: Zap,
} as const;

export function About({ about }: { about: Dictionary["about"] }) {
  return (
    <Section id="about" className="bg-white">
      <div aria-hidden className="bg-dots-agency pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_50%_60%_at_80%_30%,black,transparent)]" />

      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="reveal lg:pt-6">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {about.title}
            <span className="text-gradient">{about.titleAccent}</span>
          </h2>
          <div className="mt-6 border-l-2 border-sky-200 pl-5">
            {about.body.map((p, i) => (
              <p key={p} className={`leading-relaxed ${i === 0 ? "text-lg font-medium text-slate-800" : "mt-4 text-slate-600"}`}>
                {p}
              </p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-3 text-sm font-medium text-slate-800"
              >
                <Check width={18} height={18} className="mt-px shrink-0 text-sky-500" />
                {h}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="bg-brand-gradient group mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-md shadow-sky-500/25 transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-400/35"
          >
            {about.cta}
            <ArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* At a glance */}
        <aside className="reveal relative">
          <div aria-hidden className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-sky-100/80 via-white to-cyan-100/60 blur-sm" />
          <div className="card relative overflow-hidden p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <BrandMark size={44} />
                <div>
                  <p className="font-display text-lg font-bold text-slate-950">{profile.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">{about.glanceTitle}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                <span className="pulse-dot relative size-1.5 rounded-full bg-emerald-500 text-emerald-500" />
                {about.glanceBadge}
              </span>
            </div>

            <ul className="mt-7 divide-y divide-slate-100">
              {about.facts.map((f) => {
                const Icon = factIcons[f.icon as keyof typeof factIcons];
                return (
                  <li key={f.label} className="flex items-center gap-4 py-3.5 first:pt-0">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600">
                      <Icon width={18} height={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">{f.label}</span>
                      <span className="block text-sm font-semibold text-slate-800">{f.value}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 rounded-2xl bg-[#f0f7ff] p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-sky-700">{about.cvTitle}</p>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {(["en", "fr"] as const).map((l) => (
                  <a
                    key={l}
                    href={profile.cv[l]}
                    download={`Mohammed_Benghanem_CV_${l.toUpperCase()}.pdf`}
                    className="group flex items-center justify-center gap-2 rounded-xl border border-white bg-white px-3 py-2.5 text-sm font-bold text-slate-900 shadow-xs transition-all hover:border-sky-300 hover:text-blue-600"
                  >
                    <Download width={15} height={15} className="text-sky-500" />
                    {l === "en" ? about.cvEn : about.cvFr}
                    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-500 group-hover:bg-sky-50 group-hover:text-sky-700">
                      {l.toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-20 grid gap-5 md:grid-cols-3">
        {about.pillars.map((p, i) => {
          const Icon = pillarIcons[i];
          return (
            <div key={p.title} className="reveal card card-hover group relative overflow-hidden p-7">
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600 shadow-sm">
                  <Icon width={22} height={22} />
                </span>
                <span className="font-display text-4xl font-bold text-sky-200">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-950">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
              <span aria-hidden className="bg-brand-gradient absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
