"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 relative z-10"
    >
      <div className="space-y-2 mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
          Experiencia Profesional
        </h2>
        <div className="w-16 h-1.5 bg-primary/40 rounded-full mx-auto" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="group relative rounded-3xl p-6 sm:p-8 bg-card/25 backdrop-blur-xl border border-border/30 shadow-2xl hover:border-primary/40 hover:bg-card/45 transition-all duration-300 hover:shadow-primary/5">
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
            {/* Pulsing Icon Container */}
            <div className="relative shrink-0 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-[10px] group-hover:scale-110 transition-transform duration-300" />
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/25 text-primary relative z-10 group-hover:rotate-6 transition-transform duration-300">
                <Briefcase className="w-7 h-7" />
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-4 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/30 pb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    Desarrollador Backend PHP
                  </h3>
                  <p className="text-primary font-bold text-base mt-0.5">Datasistemas y Computadores</p>
                </div>
                <div className="flex flex-col gap-1 sm:text-right shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    Marzo 2021 – Presente
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground sm:justify-end">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    Montería, Colombia
                  </span>
                </div>
              </div>

              {/* Styled Achievements List */}
              <ul className="space-y-3 pt-2">
                {[
                  "Desarrollo de soluciones backend robustas con PHP para sistemas críticos de gestión académica y administrativa.",
                  "Optimización avanzada de bases de datos MySQL, mejorando significativamente los tiempos de carga en reportes y consultas complejas.",
                  "Desarrollo e integración de módulos de reportes, pasarelas de autenticación, control de accesos por roles y permisos granulares.",
                  "Liderazgo técnico del área de sistemas, coordinando y gestionando proyectos internos de infraestructura y TI.",
                  "Atención directa e interactiva con clientes y soporte multicliente, logrando una reducción del 30% en tiempos de resolución de incidencias.",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
