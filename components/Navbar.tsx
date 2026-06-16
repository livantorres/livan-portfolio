"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useLanguage } from "./LanguageContext";
import { cn } from "@/lib/utils";
import type { Language } from "@/lib/translations";

const navAnchors = [
  { href: "#about", labelKey: "about" },
  { href: "#projects", labelKey: "projects" },
  { href: "#experience-skills", labelKey: "skills" },
  { href: "#soft-skills", labelKey: "softSkills" },
  { href: "#services", labelKey: "services" },
  { href: "#contact", labelKey: "contact" },
] as const;

const langLabels: Record<Language, string> = { es: "ES", en: "EN", pt: "PT" };
const langs: Language[] = ["es", "en", "pt"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navLabelMap: Record<string, string> = {
    about: t.nav.about,
    projects: t.nav.projects,
    skills: t.nav.skills,
    softSkills: t.skills.titleSoft,
    services: t.nav.services,
    contact: t.nav.contact,
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-xl border-b border-border/40 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-primary via-indigo-500 to-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          Livan Torres
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navAnchors.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-xs font-semibold text-muted-foreground hover:text-primary transition-all duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 cursor-pointer"
            >
              {navLabelMap[link.labelKey]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Language Switcher (custom, no dropdown-menu dependency) */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-lg border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              {langLabels[language]}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 py-1 w-20 bg-card border border-border/40 rounded-xl shadow-xl z-50 overflow-hidden">
                {langs.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setLangOpen(false); }}
                    className={cn(
                      "w-full text-left px-3 py-2 text-xs font-bold transition-colors",
                      language === lang
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {langLabels[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <ThemeToggle />

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/95 backdrop-blur-md w-72">
              <div className="sr-only">
                <SheetTitle>Menú de Navegación</SheetTitle>
                <SheetDescription>Navega por las secciones del portafolio.</SheetDescription>
              </div>
              <div className="flex flex-col gap-2 pt-10 px-4">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-lg font-bold bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent mb-6"
                >
                  Livan Torres
                </Link>
                {navAnchors.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer"
                  >
                    {navLabelMap[link.labelKey]}
                  </a>
                ))}
                <div className="mt-6 pt-6 border-t border-border/40 flex gap-2">
                  {langs.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setOpen(false); }}
                      className={cn(
                        "flex-1 py-2 rounded-xl text-xs font-bold border transition-all",
                        language === lang
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border/40 text-muted-foreground hover:border-primary/30 hover:text-primary"
                      )}
                    >
                      {langLabels[lang]}
                    </button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}