"use client";

import { motion } from "framer-motion";
import { Server, Code2, Terminal, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Backend Development",
    icon: Server,
    skills: ["PHP (Laravel, CakePHP)", "MySQL / MariaDB", "APIs RESTful", "Arquitectura MVC", "Optimización de Consultas"],
  },
  {
    category: "Frontend Development",
    icon: Code2,
    skills: ["JavaScript (ES6+)", "ReactJS (Básico)", "TailwindCSS", "Bootstrap", "HTML5 / CSS3"],
  },
  {
    category: "DevOps & Tools",
    icon: Terminal,
    skills: ["Git (GitHub / GitLab)", "Windows Server", "Linux Shell", "Trello (Agile)", "CI/CD Básico"],
  },
  {
    category: "TI Support & Infra",
    icon: Wrench,
    skills: ["Resolución de Incidencias", "Administración de Servidores", "Soporte Multicliente", "Mantenimiento TI"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-12 relative z-10"
    >
      <div className="space-y-2 mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
          Habilidades Técnicas
        </h2>
        <div className="w-16 h-1.5 bg-primary/40 rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        {skillsData.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group relative rounded-3xl p-6 bg-card/25 backdrop-blur-xl border border-border/30 shadow-lg hover:border-primary/40 hover:bg-card/40 transition-all duration-300 hover:shadow-primary/5"
          >
            {/* Glowing active outline */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-start gap-4 relative z-10">
              <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {item.category}
                </h3>
                
                {/* Glowing badge list */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/10 hover:border-primary/30 text-xs font-semibold text-muted-foreground hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
