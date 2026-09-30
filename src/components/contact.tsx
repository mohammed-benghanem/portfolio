import { profile, type Dictionary, type Locale } from "@/dictionaries";
import { BrandMark, BrandName } from "./brand";
import { ArrowRight, Download, GitHub, LinkedIn, Mail, MapPin, Phone } from "./icons";
import { Eyebrow } from "./section";

type Props = {
  lang: Locale;
  contact: Dictionary["contact"];
  footer: Dictionary["footer"];
  nav: Dictionary["nav"];
};

export function Contact({ lang, contact, footer, nav }: Props) {
  const otherLang: Locale = lang === "en" ? "fr" : "en";
  const channels = [
    { icon: <Mail width={18} height={18} />, label: contact.labels.email, value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone width={18} height={18} />, label: contact.labels.phone, value: profile.phone, href: profile.phoneHref },
    { icon: <MapPin width={18} height={18} />, label: contact.labels.location, value: contact.location },
  ];

  const socials = [
    { icon: <LinkedIn width={16} height={16} />, href: profile.linkedin, label: "LinkedIn" },
    { icon: <GitHub width={16} height={16} />, href: profile.github, label: "GitHub" },
    { icon: <Mail width={16} height={16} />, href: `mailto:${profile.email}`, label: "Email" },
  ];

  const links = [
    { href: "#about", label: nav.about },
    { href: "#experience", label: nav.experience },
    { href: "#projects", label: nav.projects },
    { href: "#skills", label: nav.skills },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <>
      <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/50 to-white py-24 lg:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-5%] top-1/3 h-[550px] w-[550px] rounded-full bg-gradient-to-bl from-sky-200/45 via-blue-100/35 to-transparent blur-[150px]" />
          <div className="absolute bottom-10 left-[-5%] h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-cyan-200/40 via-sky-100/30 to-transparent blur-[130px]" />
          <div className="bg-grid-agency absolute inset-0 opacity-30" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="reveal">
            <Eyebrow>{contact.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {contact.title}
              <span className="text-gradient">{contact.titleAccent}</span>
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">{contact.text}</p>

            <div className="mt-8 flex flex-col gap-4">
              {channels.map((c) => (
                <div key={c.label} className="flex items-center gap-3.5 text-sm text-slate-800">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600 shadow-sm">
                    {c.icon}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="font-medium transition-colors hover:text-blue-600">
                        {c.value}
                      </a>
                    ) : (
                      <span className="font-medium">{c.value}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal flex min-h-[380px] flex-col items-center justify-center rounded-3xl border border-sky-200 bg-white/90 p-8 text-center shadow-[0_10px_35px_rgba(14,165,233,0.08)] backdrop-blur-xl sm:p-10">
            <span className="flex size-16 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-white shadow-lg shadow-sky-500/30">
              <Mail width={28} height={28} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">{contact.cardTitle}</h3>
            <p className="mt-2 max-w-sm text-sm text-slate-600">{contact.cardText}</p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto">
              <a
                href={`mailto:${profile.email}`}
                className="bg-brand-gradient group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-105"
              >
                {contact.email}
                <ArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.cv[lang]}
                download={`Mohammed_Benghanem_CV_${lang.toUpperCase()}.pdf`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                <Download width={15} height={15} className="text-sky-500" />
                {contact.cv}
              </a>
              <a
                href={profile.cv[otherLang]}
                download={`Mohammed_Benghanem_CV_${otherLang.toUpperCase()}.pdf`}
                className="text-xs font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 transition-colors hover:text-blue-600"
              >
                {contact.cvOther}
              </a>
            </div>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="flex size-10 items-center justify-center rounded-full border border-sky-200 bg-white text-slate-600 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50 hover:text-blue-600"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-sky-200/60 bg-gradient-to-b from-slate-50 via-sky-50/40 to-sky-100/30 pt-16">
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-sky-200/40 blur-[130px]" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pb-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark />
              <BrandName />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">{footer.tagline}</p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="flex size-9 items-center justify-center rounded-full border border-sky-200 bg-white text-slate-600 shadow-sm transition-all hover:border-sky-400 hover:bg-sky-50 hover:text-blue-600"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-sky-700">{footer.navTitle}</p>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-600 transition-colors hover:text-blue-600">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-sky-700">{footer.contactTitle}</p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li>
                <a href={`mailto:${profile.email}`} className="break-all transition-colors hover:text-blue-600">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} className="transition-colors hover:text-blue-600">
                  {profile.phone}
                </a>
              </li>
              <li>{contact.location}</li>
            </ul>
          </div>
        </div>
        <div className="relative border-t border-sky-200/60">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
            <p>
              © {new Date().getFullYear()} {profile.name}. {footer.rights}
            </p>
            <p>{footer.built}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
