"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { Users, MessageCircle, Brain, Lightbulb } from "lucide-react";

const icons = [
  <Users className="w-7 h-7" key="leadership" />,
  <MessageCircle className="w-7 h-7" key="comm" />,
  <Users className="w-7 h-7" key="team" />,
  <Brain className="w-7 h-7" key="problem" />,
  <Lightbulb className="w-7 h-7" key="creativity" />,
];

const accentColors = [
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
];

const borderColors = [
  "border-cyan-500/20 hover:border-cyan-500/40",
  "border-violet-500/20 hover:border-violet-500/40",
  "border-emerald-500/20 hover:border-emerald-500/40",
  "border-amber-500/20 hover:border-amber-500/40",
  "border-rose-500/20 hover:border-rose-500/40",
];

const glowColors = [
  "group-hover:shadow-cyan-500/10",
  "group-hover:shadow-violet-500/10",
  "group-hover:shadow-emerald-500/10",
  "group-hover:shadow-amber-500/10",
  "group-hover:shadow-rose-500/10",
];

export default function SoftSkills() {
  const { t } = useLanguage();
  const softList = t.skills.softList;

  return (
    <motion.section
      id="soft-skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 relative z-10"
    >
      <div className="space-y-2 mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-primary to-emerald-400 bg-clip-text text-transparent">
          {t.skills.titleSoft}
        </h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-violet-400 to-primary rounded-full mx-auto" />
      </div>

      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {softList.map((skill: { name: string; desc: string }, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`group relative rounded-2xl bg-card/25 backdrop-blur-xl border ${borderColors[idx % borderColors.length]} p-6 shadow-xl transition-all duration-400 hover:-translate-y-1 ${glowColors[idx % glowColors.length]} hover:shadow-2xl overflow-hidden`}
          >
            {/* Gradient glow decoration */}
            <div className={`absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br ${accentColors[idx % accentColors.length]} opacity-0 group-hover:opacity-10 rounded-full blur-[40px] transition-opacity duration-500 pointer-events-none`} />

            <div className="flex items-start gap-4 relative z-10">
              {/* Icon Badge */}
              <div className={`shrink-0 p-3 rounded-2xl bg-gradient-to-br ${accentColors[idx % accentColors.length]} text-white shadow-lg`}>
                {icons[idx % icons.length]}
              </div>

              {/* Content */}
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-foreground">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

