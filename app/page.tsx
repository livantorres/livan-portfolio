"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import ExperienceSkills from "@/components/sections/ExperienceSkills";
import SoftSkills from "@/components/sections/SoftSkills";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import SplashScreen from "@/components/SplashScreen";
import FloatingSidebar from "@/components/FloatingSidebar";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      {/* Intro Splash */}
      <SplashScreen />

      {/* Desktop Floating Nav Sidebar */}
      <FloatingSidebar />

      {/* Main Page Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-4 pb-8">
        {/* Hero */}
        <Hero />

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

        {/* Sobre Mí */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <About />
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

        {/* Mis Proyectos */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Projects />
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

        {/* Habilidades con Experiencia */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <ExperienceSkills />
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

        {/* Habilidades Blandas */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SoftSkills />
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

        {/* Servicios */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Services />
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

        {/* Contacto */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Contact />
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}