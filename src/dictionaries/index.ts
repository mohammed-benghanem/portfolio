import en from "./en";
import fr from "./fr";

export type Dictionary = typeof en;

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const getDictionary = (locale: Locale) => dictionaries[locale];

export const profile = {
  name: "Mohammed Benghanem",
  email: "mohammed.benghanem@uit.ac.ma",
  phone: "+212 7 66 92 91 94",
  phoneHref: "tel:+212766929194",
  linkedin: "https://www.linkedin.com/in/mohammed-benghanem",
  github: "https://github.com/mohammed-benghanem",
  cv: { en: "/CV_Mohammed_Benghanem_EN.pdf", fr: "/CV_Mohammed_Benghanem_FR.pdf" } as Record<Locale, string>,
  photo: "/profile.png",
};

// Shown in the hero marquee
export const marquee = [
  { name: "PyTorch", color: "#ee4c2c" },
  { name: "Hugging Face", color: "#eab308" },
  { name: "Claude API", color: "#d97757" },
  { name: "LangGraph", color: "#2563eb" },
  { name: "TensorFlow", color: "#ff6f00" },
  { name: "scikit-learn", color: "#f7931e" },
  { name: "Ollama", color: "#0f172a" },
  { name: "FastAPI", color: "#059669" },
  { name: "Next.js", color: "#0f172a" },
  { name: "React", color: "#0ea5e9" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ed" },
  { name: "AWS", color: "#ff9900" },
];
