import type { Dictionary } from "@/dictionaries";
import { Code, Layers, Sparkles, Zap } from "./icons";
import { Section, SectionHeading, Tag } from "./section";

const groupIcons = [Sparkles, Layers, Code, Zap];

export function Skills({ skills }: { skills: Dictionary["skills"] }) {
  return (
    <Section id="skills" glow className="bg-gradient-to-b from-white via-sky-50/40 to-white">
      <div aria-hidden className="bg-grid-agency pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <SectionHeading eyebrow={skills.eyebrow} title={skills.title} titleAccent={skills.titleAccent} subtitle={skills.subtitle} />

      <div className="grid gap-5 md:grid-cols-2">
        {skills.groups.map((g, i) => {
          const Icon = groupIcons[i];
          return (
            <div key={g.name} className="reveal card card-hover p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600">
                    <Icon width={18} height={18} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-950">{g.name}</h3>
                </div>
                <span className="font-display text-2xl font-bold text-sky-200">{String(g.items.length).padStart(2, "0")}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
