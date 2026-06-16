"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { Code2, Palette, CheckCircle } from "lucide-react";

const serviceIcons = [
  <Code2 className="w-8 h-8" key="code" />,
  <Palette className="w-8 h-8" key="palette" />,
];

const serviceGradients = [
  "from-cyan-500 via-blue-600 to-indigo-600",
  "from-violet-500 via-purple-600 to-pink-500",
];

const serviceBorders = [
  "border-cyan-500/20 hover:border-cyan-500/40",
  "border-violet-500/20 hover:border-violet-500/40",
];

const serviceGlows = [
  "group-hover:shadow-cyan-500/10",
  "group-hover:shadow-violet-500/10",
];

const phpFeatures = [
  "Desarrollo de APIs RESTful seguras",
  "Sistemas de gestión académica y empresarial",
  "Integración de pasarelas de pago",
  "Optimización avanzada de bases de datos",
  "Autenticación JWT y control de roles",
];
const phpFeaturesEn = [
  "Secure RESTful API Development",
  "Academic and enterprise management systems",
  "Payment gateway integration",
  "Advanced database optimization",
  "JWT authentication and role-based access",
];
const phpFeaturesPt = [
  "Desenvolvimento de APIs RESTful seguras",
  "Sistemas de gestão acadêmica e empresarial",
  "Integração de gateways de pagamento",
  "Otimização avançada de banco de dados",
  "Autenticação JWT e controle de funções",
];

const uiFeatures = [
  "Interfaces modernas y responsivas",
  "Animaciones fluidas con Framer Motion",
  "Temas oscuros y personalizados",
  "Accesibilidad (WCAG) y SEO optimizados",
  "Design systems con componentes reutilizables",
];
const uiFeaturesEn = [
  "Modern and responsive interfaces",
  "Fluid animations with Framer Motion",
  "Dark and custom themes",
  "Accessibility (WCAG) and SEO optimized",
  "Design systems with reusable components",
];
const uiFeaturesPt = [
  "Interfaces modernas e responsivas",
  "Animações fluidas com Framer Motion",
  "Temas escuros e personalizados",
  "Acessibilidade (WCAG) e SEO otimizados",
  "Design systems com componentes reutilizáveis",
];

export default function Services() {
  const { t, language } = useLanguage();

  const allFeatures = [
    language === "en" ? phpFeaturesEn : language === "pt" ? phpFeaturesPt : phpFeatures,
    language === "en" ? uiFeaturesEn : language === "pt" ? uiFeaturesPt : uiFeatures,
  ];

  const services = [
    { title: t.services.s1Title, desc: t.services.s1Desc },
    { title: t.services.s2Title, desc: t.services.s2Desc },
  ];

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 relative z-10"
    >
      <div className="space-y-2 mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-primary to-violet-400 bg-clip-text text-transparent">
          {t.services.title}
        </h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-400 to-primary rounded-full mx-auto" />
      </div>

      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className={`group relative rounded-3xl bg-card/20 backdrop-blur-xl border ${serviceBorders[idx]} p-7 shadow-2xl transition-all duration-400 hover:-translate-y-1.5 ${serviceGlows[idx]} hover:shadow-2xl overflow-hidden flex flex-col`}
          >
            {/* Gradient glow orb */}
            <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${serviceGradients[idx]} opacity-0 group-hover:opacity-10 rounded-full blur-[50px] transition-opacity duration-500 pointer-events-none`} />

            {/* Icon Header */}
            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${serviceGradients[idx]} text-white shadow-xl`}>
                {serviceIcons[idx]}
              </div>
              <h3 className="text-xl font-bold text-foreground leading-snug">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
              {service.desc}
            </p>

            {/* Feature list */}
            <ul className="space-y-2 relative z-10 mt-auto">
              {allFeatures[idx].map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

