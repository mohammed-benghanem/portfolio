import Image from "next/image";
import { marquee, profile, type Dictionary, type Locale } from "@/dictionaries";
import { ArrowRight, Code, Download, GitHub, LinkedIn, Network, Search, TrendingDown } from "./icons";

export function Hero({ hero, lang }: { hero: Dictionary["hero"]; lang: Locale }) {
  const c = hero.cards;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-grid-agency absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_40%,black,transparent)]" />
        <div className="absolute right-[-10%] top-10 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-sky-200/50 via-cyan-100/40 to-blue-200/30 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-100/50 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* Copy */}
          <div className="hero-in text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 shadow-xs">
              <span className="pulse-dot relative size-2 rounded-full bg-emerald-500 text-emerald-500" />
              {hero.availability}
            </div>

            <h1 className="mt-6 font-display text-[2.1rem] font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.6rem]">
              {hero.headlineStart}
              <span className="relative inline-block">
                <span className="text-gradient relative z-10">{hero.headlineAccent}</span>
                <span className="absolute -bottom-1 left-0 -z-0 h-2.5 w-full -rotate-1 rounded-sm bg-sky-200/60 sm:h-3" />
              </span>
              {hero.headlineEnd}
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:mt-6 sm:text-base lg:mx-0 lg:text-lg">
              {hero.intro}
            </p>

            <div className="relative z-20 mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-3.5 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md sm:w-auto"
              >
                {hero.ctaPrimary}
                <ArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.cv[lang]}
                download={`Mohammed_Benghanem_CV_${lang.toUpperCase()}.pdf`}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
              >
                <Download width={15} height={15} className="text-sky-500" />
                {hero.ctaSecondary}
              </a>
              <span className="hidden items-center gap-2 sm:flex">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex size-11 items-center justify-center rounded-full border border-sky-200 bg-white text-slate-600 shadow-xs transition-all hover:border-sky-400 hover:text-blue-600"
                >
                  <LinkedIn width={16} height={16} />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex size-11 items-center justify-center rounded-full border border-sky-200 bg-white text-slate-600 shadow-xs transition-all hover:border-sky-400 hover:text-blue-600"
                >
                  <GitHub width={16} height={16} />
                </a>
              </span>
            </div>
          </div>

          {/* Portrait with floating result cards */}
          <div className="hero-in relative">
            <div className="relative mx-auto flex max-w-[500px] items-center justify-center md:min-h-[560px]">
              <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
                <div className="size-[380px] rounded-full border border-emerald-300/40 lg:size-[400px]" />
                <div className="absolute inset-[-45px] rounded-full border border-dashed border-sky-200/70" />
                <div className="absolute inset-[-90px] rounded-full border border-slate-200/60" />
              </div>

              {/* Portrait */}
              <div className="relative z-10">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-600/25 via-sky-400/20 to-cyan-400/25 blur-xl" />
                <div className="relative rounded-full bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 p-[3px] shadow-[0_20px_50px_rgba(14,165,233,0.25)]">
                  <div className="rounded-full bg-white p-2">
                    <div className="relative size-60 overflow-hidden rounded-full sm:size-72">
                      <Image
                        src={profile.photo}
                        alt={profile.name}
                        fill
                        priority
                        sizes="(min-width: 640px) 288px, 240px"
                        className="scale-[1.04] object-cover"
                      />
                    </div>
                  </div>
                </div>
                <span className="absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-slate-950 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  <span className="size-1.5 rounded-full bg-cyan-400" />
                  {hero.role}
                </span>
              </div>

              {/* Top-left: RAG */}
              <div className="animate-float-slow absolute -left-2 top-0 z-20 hidden w-44 rounded-2xl border border-sky-100 bg-white/95 p-3.5 text-left shadow-xl backdrop-blur-md md:block lg:-left-8">
                <span className="flex items-center gap-1 text-[11px] font-bold text-sky-700">
                  <Search width={12} height={12} className="text-sky-500" /> {c.rag.label}
                </span>
                <div className="mt-2 flex items-end justify-between">
                  <span className="font-display text-3xl font-extrabold text-slate-950">{c.rag.badge}</span>
                </div>
                <span className="mt-1 inline-block rounded-md border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  {c.rag.sub}
                </span>
                <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-sky-100">
                  <div className="bg-brand-gradient h-full w-[95%] rounded-full" />
                </div>
              </div>

              {/* Top-right: agents */}
              <div className="animate-float absolute -right-2 top-0 z-20 hidden min-w-[170px] rounded-2xl bg-emerald-300 p-4 text-left text-slate-950 shadow-xl md:block lg:-right-4">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-800">
                  <Network width={12} height={12} className="text-emerald-800" /> {c.agents.label}
                </span>
                <div className="mt-1 font-display text-2xl font-extrabold leading-none">{c.agents.value}</div>
                <div className="mt-2 inline-block rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-slate-900 shadow-xs">
                  {c.agents.pill}
                </div>
              </div>

              {/* Bottom-left: fine-tuning */}
              <div className="animate-float absolute -left-4 bottom-0 z-30 hidden text-left md:block lg:-left-10">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-3 py-1 shadow-md">
                  <span className="text-[11px] tracking-wider text-amber-400">★</span>
                  <span className="text-[10px] font-bold text-white">{c.finetune.pill}</span>
                </div>
                <div className="min-w-[180px] rounded-2xl bg-amber-300 p-4 text-slate-950 shadow-xl">
                  <div className="flex items-center gap-3">
                    <TrendingDown width={24} height={24} />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-800">{c.finetune.label}</div>
                      <div className="font-display text-lg font-extrabold leading-tight">{c.finetune.value}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom-right: full-stack */}
              <div className="animate-float-slow absolute -right-2 -bottom-2 z-30 hidden w-48 rounded-2xl border border-sky-100 bg-white p-3.5 text-left shadow-2xl md:block lg:-right-6">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[11px] font-bold text-slate-900">
                    <Code width={12} height={12} className="text-blue-600" /> {c.stack.label}
                  </span>
                  <span className="rounded-md border border-sky-200 bg-sky-50 px-1.5 py-0.5 text-[10px] font-bold text-sky-700">
                    {c.stack.badge}
                  </span>
                </div>
                <div className="mt-2.5 grid grid-cols-3 gap-1.5">
                  <span className="h-7 rounded-lg bg-gradient-to-br from-blue-100 to-sky-50" />
                  <span className="h-7 rounded-lg bg-gradient-to-br from-cyan-100 to-sky-50" />
                  <span className="h-7 rounded-lg bg-gradient-to-br from-emerald-100 to-sky-50" />
                </div>
                <div className="mt-2 text-[10px] font-semibold text-emerald-600">{c.stack.sub}</div>
              </div>
            </div>

            {/* Mobile: 2×2 cards under the portrait */}
            <div className="mt-10 grid grid-cols-2 gap-2.5 text-left md:hidden">
              <div className="rounded-2xl border border-sky-100 bg-white/95 p-3 shadow-sm">
                <div className="text-[10px] font-bold text-sky-700">{c.rag.label}</div>
                <div className="font-display text-lg font-extrabold text-slate-950">{c.rag.badge}</div>
                <div className="text-[10px] text-slate-500">{c.rag.sub}</div>
              </div>
              <div className="rounded-2xl bg-amber-300 p-3 text-slate-950 shadow-sm">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-800">{c.finetune.label}</div>
                <div className="font-display text-[15px] font-extrabold leading-tight">{c.finetune.value}</div>
                <div className="text-[10px] font-medium text-slate-800">{c.finetune.pill}</div>
              </div>
              <div className="rounded-2xl bg-emerald-300 p-3 text-slate-950 shadow-sm">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-800">{c.agents.label}</div>
                <div className="font-display text-[15px] font-extrabold leading-tight">{c.agents.value}</div>
                <div className="text-[10px] font-medium text-slate-800">{c.agents.pill}</div>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-white/95 p-3 shadow-sm">
                <div className="text-[10px] font-bold text-slate-900">{c.stack.label}</div>
                <div className="font-display text-[15px] font-extrabold text-slate-950">{c.stack.badge}</div>
                <div className="text-[10px] font-semibold text-emerald-600">{c.stack.sub}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-16 border-t border-slate-200/80 pt-8 sm:mt-20 sm:pt-10">
          <p className="text-center text-xs font-semibold tracking-tight text-slate-900 sm:text-sm">{hero.trustText}</p>
          <div className="relative mt-6 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] sm:mt-8">
            <div className="animate-marquee items-center gap-10 py-2 select-none sm:gap-16">
              {[...marquee, ...marquee].map((m, i) => (
                <span
                  key={i}
                  aria-hidden={i >= marquee.length}
                  style={{ color: m.color }}
                  className="shrink-0 px-2 font-display text-sm font-bold tracking-widest opacity-80 transition-opacity hover:opacity-100 sm:text-base lg:text-lg"
                >
                  {m.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
