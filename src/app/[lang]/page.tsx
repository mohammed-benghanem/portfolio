import { notFound } from "next/navigation";
import { getDictionary, hasLocale, profile } from "@/dictionaries";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} nav={dict.nav} cvHref={profile.cv} />
      <main>
        <Hero hero={dict.hero} />
        <About about={dict.about} />
        <Experience experience={dict.experience} />
        <Projects projects={dict.projects} />
        <Skills skills={dict.skills} />
        <Education education={dict.education} />
      </main>
      <Contact contact={dict.contact} footer={dict.footer} nav={dict.nav} />
    </>
  );
}
