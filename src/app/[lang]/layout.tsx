import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { getDictionary, hasLocale, locales, profile } from "@/dictionaries";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});
const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: "#f8fafc",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: dict.meta.title,
    description: dict.meta.description,
    authors: [{ name: profile.name }],
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", fr: "/fr", "x-default": "/en" },
    },
    openGraph: {
      type: "profile",
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang === "fr" ? "fr_FR" : "en_US",
      images: [{ url: profile.photo, width: 404, height: 404, alt: profile.name }],
    },
    twitter: { card: "summary", title: dict.meta.title, description: dict.meta.description },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${jakarta.variable} ${grotesk.variable} antialiased`}
    >
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900">{children}</body>
    </html>
  );
}
