"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/dictionaries";
import { BrandMark, BrandName } from "./brand";
import { ArrowRight, Briefcase, ChevronRight, Close, Code, Download, Globe, Mail, Menu, Sparkles, User } from "./icons";

type Props = {
  lang: Locale;
  nav: Dictionary["nav"];
  cvHref: string;
};

export function Navbar({ lang, nav, cvHref }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const otherLang: Locale = lang === "en" ? "fr" : "en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the drawer is open, close it on Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const links = [
    { href: "#about", label: nav.about, icon: User },
    { href: "#experience", label: nav.experience, icon: Briefcase },
    { href: "#projects", label: nav.projects, icon: Sparkles },
    { href: "#skills", label: nav.skills, icon: Code },
    { href: "#contact", label: nav.contact, icon: Mail },
  ];

  const langSwitch = (
    <Link
      href={`/${otherLang}`}
      hrefLang={otherLang}
      aria-label={nav.switchTo}
      title={nav.switchTo}
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-sky-200 bg-white px-3 text-xs font-bold text-slate-500 shadow-xs transition-colors hover:border-sky-300 hover:text-blue-600"
    >
      <Globe width={14} height={14} className="text-sky-500" />
      <span className={lang === "en" ? "text-slate-900" : ""}>EN</span>
      <span className="text-slate-300">/</span>
      <span className={lang === "fr" ? "text-slate-900" : ""}>FR</span>
    </Link>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "border-b border-sky-100 bg-white/80 py-3.5 shadow-xs backdrop-blur-xl" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <BrandMark />
            <span className="max-[400px]:hidden">
              <BrandName />
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex">{langSwitch}</span>
            <a
              href={cvHref}
              download={`Mohammed_Benghanem_CV_${lang.toUpperCase()}.pdf`}
              className="bg-brand-gradient hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-500/20 transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-400/35 sm:inline-flex"
            >
              {nav.cv}
              <Download width={15} height={15} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label={nav.menu}
              className="flex size-10 items-center justify-center rounded-xl border border-sky-200/80 bg-white/90 text-slate-800 shadow-xs backdrop-blur-md transition-all hover:border-sky-300 hover:bg-sky-50 hover:text-blue-600 active:scale-95 lg:hidden"
            >
              <Menu width={22} height={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[100] overflow-hidden transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs" onClick={() => setOpen(false)} />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-[320px] flex-col justify-between overflow-y-auto border-l border-slate-100 bg-white shadow-2xl transition-transform duration-300 ease-out sm:max-w-sm ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div className="flex items-center gap-2.5">
                <BrandMark size={32} />
                {langSwitch}
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={nav.close}
                className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-sky-50 hover:text-blue-600 active:scale-95"
              >
                <Close width={18} height={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {links.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-800 transition-all hover:bg-sky-50/70 hover:text-blue-600"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon width={16} height={16} />
                    </span>
                    <span className="text-[15px]">{label}</span>
                  </span>
                  <ChevronRight width={15} height={15} className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t border-slate-100 bg-slate-50/50 p-5">
            <a
              href={cvHref}
              download={`Mohammed_Benghanem_CV_${lang.toUpperCase()}.pdf`}
              className="bg-brand-gradient flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-sky-500/20"
            >
              {nav.cv}
              <ArrowRight width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
