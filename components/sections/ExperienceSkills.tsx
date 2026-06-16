"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

import Image from "next/image";

interface SkillBar {
  name: string;
  percentage: number;
  logos?: string[];
}

const skillsList: SkillBar[] = [
  { name: "PHP (Laravel / CakePHP)", percentage: 95, logos: ["/images/logos/PHP.svg", "/images/logos/Laravel.svg"] },
  { name: "MySQL / PostgreSQL", percentage: 90, logos: ["/images/logos/mysql.svg", "/images/logos/postgresql.svg"] },
  { name: "HTML5 / CSS3 / TailwindCSS", percentage: 90, logos: ["/images/logos/html5.svg", "/images/logos/Tailwind.svg", "/images/logos/bootstrap.svg"] },
  { name: "JavaScript / TypeScript", percentage: 85, logos: ["/images/logos/javascript.svg", "/images/logos/typescript.svg"] },
  { name: "ReactJS / Next.js", percentage: 70, logos: ["/images/logos/ReactJS.svg", "/images/logos/nextjs.svg"] },
  { name: "Cloud & Ops (AWS)", percentage: 88, logos: ["/images/logos/aws.svg"] },
];

export default function ExperienceSkills() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="experience-skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 relative z-10"
    >
      <div className="space-y-2 mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
          {t.skills.titleExp}
        </h2>
        <div className="w-16 h-1.5 bg-primary/40 rounded-full mx-auto" />
      </div>

      <div className="max-w-2xl mx-auto space-y-6 px-4">
        {skillsList.map((skill, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold text-foreground">
              <div className="flex items-center gap-3">
                {skill.logos && (
                  <div className="flex items-center gap-1.5 bg-card/50 p-1.5 rounded-lg border border-border/30">
                    {skill.logos.map((logo, i) => (
                      <div key={i} className="relative w-5 h-5 flex items-center justify-center">
                        <Image src={logo} alt="tech logo" fill className="object-contain" />
                      </div>
                    ))}
                  </div>
                )}
                <span>{skill.name}</span>
              </div>
              <span className="text-primary">{skill.percentage}%</span>
            </div>
            
            {/* Progress Track */}
            <div className="w-full h-3 rounded-full bg-muted/40 border border-border/10 overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-primary to-indigo-500 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

