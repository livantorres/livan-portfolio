"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { Folder, ArrowRight, GitBranch, ExternalLink, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  category: "PHP" | "LARAVEL" | "NEXTJS" | "REACTJS" | "JS";
  descEs: string;
  descEn: string;
  descPt: string;
  techs: string[];
  github: string;
  demo?: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "InnovRed Books",
    category: "REACTJS",
    descEs: "Biblioteca digital educativa. Plataforma interactiva para fomentar la lectura en estudiantes de primaria con efectos visuales mágicos y experiencia de lectura envolvente. Incluye visor de PDF integrado y animaciones.",
    descEn: "Educational digital library. Interactive platform to encourage reading among primary school students with magical visual effects and an immersive reading experience. Includes integrated PDF viewer and animations.",
    descPt: "Biblioteca digital educacional. Plataforma interativa para incentivar a leitura entre alunos do ensino fundamental com efeitos visuais mágicos e uma experiência de leitura imersiva. Inclui visualizador de PDF integrado e animações.",
    techs: ["ReactJS", "Vite", "TailwindCSS"],
    github: "https://innovred-books.vercel.app",
    demo: "https://innovred-books.vercel.app",
  },
  {
    id: 2,
    title: "FAMIFUTBOL",
    category: "NEXTJS",
    descEs: "Landing page moderna para escuela de fútbol infantil. Diseño responsive, tema claro/oscuro, animaciones interactivas y optimizada para SEO. Perfecta para captar inscripciones.",
    descEn: "Modern landing page for a children's soccer school. Responsive design, light/dark theme, interactive animations, and SEO optimized. Perfect for capturing registrations.",
    descPt: "Landing page moderna para escola de futebol infantil. Design responsivo, tema claro/escuro, animações interativas e otimizada para SEO. Perfeita para captar inscrições.",
    techs: ["Next.js 14", "Tailwind CSS 4.1", "TypeScript"],
    github: "https://famifutbol.vercel.app/",
    demo: "https://famifutbol.vercel.app/",
  },
  {
    id: 3,
    title: "datapagos",
    category: "PHP",
    descEs: "Plataforma para el control de pagos para préstamos diarios. Cuenta con reportes en tiempo real exportables a PDF o Excel.",
    descEn: "Payment control platform for daily loans. Features real-time reports exportable to PDF or Excel.",
    descPt: "Plataforma de controle de pagamentos para empréstimos diários. Possui relatórios em tempo real exportáveis para PDF ou Excel.",
    techs: ["PHP", "MySQL", "JavaScript"],
    github: "#",
  },
  {
    id: 4,
    title: "dataEvidencias",
    category: "PHP",
    descEs: "Sistema de gestión de evidencias fotográficas para instituciones educativas. Permite capturar, organizar y administrar evidencias digitales con categorización.",
    descEn: "Photographic evidence management system for educational institutions. Allows capturing, organizing, and managing digital evidence with categorization.",
    descPt: "Sistema de gestão de evidências fotográficas para instituições de ensino. Permite capturar, organizar e gerenciar evidências digitais com categorização.",
    techs: ["PHP", "MySQL", "JavaScript"],
    github: "#",
  },
  {
    id: 5,
    title: "Módulo de Evaluaciones Educativas",
    category: "PHP",
    descEs: "Módulo integrado en plataforma educativa donde los estudiantes realizan exámenes creados por docentes. El sistema realiza la calificación automáticamente.",
    descEn: "Module integrated into an educational platform where students take exams created by teachers. The system performs the grading automatically.",
    descPt: "Módulo integrado a uma plataforma educacional onde os alunos realizam exames criados por professores. O sistema realiza a avaliação automaticamente.",
    techs: ["PHP 5.6", "CakePHP 1.1", "AJAX", "MySQL"],
    github: "#",
  },
];

export default function Projects() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<"ALL" | "PHP" | "LARAVEL" | "NEXTJS" | "REACTJS" | "JS">("ALL");
  const [selectedId, setSelectedId] = useState<number | null>(mockProjects[0].id);

  const categories: Array<"ALL" | "PHP" | "LARAVEL" | "NEXTJS" | "REACTJS" | "JS"> = [
    "ALL", "PHP", "LARAVEL", "NEXTJS", "JS"
  ];

  const filteredProjects = mockProjects.filter(
    (p) => filter === "ALL" || p.category === filter
  );

  const selectedProject = mockProjects.find((p) => p.id === selectedId) || mockProjects[0];

  const getDesc = (p: Project) => {
    if (language === "en") return p.descEn;
    if (language === "pt") return p.descPt;
    return p.descEs;
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 relative z-10"
    >
      <div className="space-y-2 mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-indigo-500 to-accent bg-clip-text text-transparent">
          {t.projects.title}
        </h2>
        <div className="w-16 h-1.5 bg-primary/40 rounded-full mx-auto" />
      </div>

      {/* Tabs Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-10 max-w-2xl mx-auto px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              // Auto-select first in filtered list
              const firstFiltered = mockProjects.find((p) => cat === "ALL" || p.category === cat);
              if (firstFiltered) setSelectedId(firstFiltered.id);
            }}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300",
              filter === cat
                ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                : "bg-card/25 backdrop-blur-md border-border/40 text-muted-foreground hover:text-primary hover:border-primary/20"
            )}
          >
            {cat === "ALL" ? t.projects.all : cat}
          </button>
        ))}
      </div>

      {/* Interactive Main Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto px-4">
        {/* Projects List (Left Column) */}
        <div className="lg:col-span-6 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isSelected = selectedId === project.id;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => setSelectedId(project.id)}
                  className={cn(
                    "group cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative overflow-hidden",
                    isSelected
                      ? "bg-card/50 border-primary/50 shadow-xl shadow-primary/5"
                      : "bg-card/25 backdrop-blur-md border-border/30 hover:border-primary/20 hover:bg-card/35"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "p-3 rounded-xl border transition-all duration-300",
                        isSelected
                          ? "bg-primary/20 border-primary/30 text-primary"
                          : "bg-muted/40 border-border/30 text-muted-foreground group-hover:text-primary group-hover:border-primary/20"
                      )}>
                        <Folder className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className={cn(
                          "font-bold text-base transition-colors",
                          isSelected ? "text-primary" : "text-foreground group-hover:text-primary"
                        )}>
                          {project.title}
                        </h3>
                        <span className="text-[10px] font-bold text-muted-foreground bg-muted/40 px-2 py-0.5 rounded-full border border-border/10 uppercase tracking-widest mt-1 inline-block">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className={cn(
                      "w-5 h-5 transition-all duration-300",
                      isSelected ? "text-primary translate-x-1" : "text-muted-foreground group-hover:text-primary group-hover:translate-x-1"
                    )} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Selected Project Details (Right Column) */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            {selectedProject && (
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl p-6 sm:p-8 bg-card/40 backdrop-blur-xl border border-primary/20 shadow-2xl h-full flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Glow Decorator */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[60px]" />

                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                        <Sparkles className="w-3 h-3" />
                        {t.projects.details}
                      </span>
                      <h3 className="text-2xl font-black text-foreground">{selectedProject.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                    {getDesc(selectedProject)}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/80">
                      {t.projects.techs}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techs.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-muted/30 border border-border/20 text-xs font-semibold text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Custom Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-border/30 mt-8 relative z-10">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-muted/40 border border-border/30 text-sm font-semibold hover:border-primary/30 hover:text-primary transition-all duration-300"
                  >
                    <GitBranch className="w-4 h-4" />
                    {t.projects.viewSource}
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/95 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.liveDemo}
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

