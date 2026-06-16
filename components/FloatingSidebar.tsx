"use client";

import { useLanguage } from "./LanguageContext";
import { useEffect, useState } from "react";
import { Home, User, Code2, Layers, Briefcase, Wrench, Mail, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { href: "#hero", icon: Home, labelKey: "home" },
  { href: "#about", icon: User, labelKey: "about" },
  { href: "#projects", icon: Layers, labelKey: "projects" },
  { href: "#experience-skills", icon: Code2, labelKey: "skills" },
  { href: "#soft-skills", icon: Brain, labelKey: "softSkills" },
  { href: "#services", icon: Wrench, labelKey: "services" },
  { href: "#contact", icon: Mail, labelKey: "contact" },
] as const;

export default function FloatingSidebar() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");

  const labelMap: Record<string, string> = {
    home: t.nav.home,
    about: t.nav.about,
    projects: t.nav.projects,
    skills: t.nav.skills,
    softSkills: t.skills.titleSoft,
    services: t.nav.services,
    contact: t.nav.contact,
  };

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = sidebarLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {sidebarLinks.map((link) => {
        const isActive = activeSection === link.href.replace("#", "");
        const Icon = link.icon;
        return (
          <div key={link.href} className="group relative flex items-center justify-end">
            {/* Tooltip */}
            <span className="absolute mr-14 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200 opacity-0 scale-90 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none select-none shadow-xl whitespace-nowrap">
              {labelMap[link.labelKey]}
            </span>

            {/* Icon Bubble */}
            <a
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={cn(
                "p-3 rounded-2xl border transition-all duration-300 shadow-lg relative overflow-hidden flex items-center justify-center hover:scale-110",
                isActive
                  ? "bg-primary border-primary text-primary-foreground shadow-primary/20 scale-105"
                  : "bg-card/40 backdrop-blur-md border-border/40 text-muted-foreground hover:text-primary hover:border-primary/20"
              )}
            >
              <Icon className="w-4 h-4" />
            </a>
          </div>
        );
      })}
    </div>
  );
}
