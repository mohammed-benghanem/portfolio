import type { Dictionary } from "@/dictionaries";
import { ArrowRight, Check, Layers, Shield, Sparkles } from "./icons";
import { Eyebrow, Section } from "./section";

const pillarIcons = [Sparkles, Layers, Shield];

export function About({ about }: { about: Dictionary["about"] }) {
  return (
    <Section id="about" className="bg-white">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {about.title}
            <span className="text-gradient">{about.titleAccent}</span>
          </h2>
          {about.body.map((p) => (
            <p key={p} className="mt-5 leading-relaxed text-slate-600">
              {p}
            </p>
          ))}
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm font-medium text-slate-800">
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

        {/* Orbit graphic */}
        <div className="reveal relative mx-auto grid aspect-square w-full max-w-[400px] place-items-center">
          <div className="bg-dots-agency absolute inset-0 rounded-full opacity-60 [mask-image:radial-gradient(closest-side,black,transparent)]" />
          <div className="absolute inset-0 rounded-full border border-dashed border-sky-200" />
          <div className="animate-spin-slow absolute inset-0">
            <span className="absolute left-1/2 top-0 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 shadow-[0_0_0_6px_rgba(14,165,233,0.15)]" />
            <span className="absolute bottom-0 left-1/2 size-3.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-600 shadow-[0_0_0_6px_rgba(37,99,235,0.15)]" />
          </div>
          <div className="absolute inset-[12%] rounded-full border border-sky-100 bg-gradient-to-b from-sky-50/60 to-white/40" />
          <div className="absolute inset-[26%] rounded-full bg-sky-100/50" />
          <div className="relative flex size-[44%] flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_15px_45px_rgba(14,165,233,0.18)]">
            <span className="font-display text-xl font-bold text-slate-900 sm:text-2xl">{about.orbitTitle}</span>
            <span className="mt-1.5 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-700">
              {about.orbitBadge}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-5 md:grid-cols-3">
        {about.pillars.map((p, i) => {
          const Icon = pillarIcons[i];
          return (
            <div key={p.title} className="reveal card card-hover p-7">
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600 shadow-sm">
                <Icon width={22} height={22} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-950">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
