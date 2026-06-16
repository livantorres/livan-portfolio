"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="hero"
      className="flex flex-col items-center text-center space-y-8 py-12 relative z-10"
    >
      {/* Premium Glowing Avatar */}
      <div className="relative group cursor-pointer">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[20px] group-hover:bg-primary/30 transition-all duration-500 scale-95 group-hover:scale-110" />
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" style={{ boxShadow: "0 0 40px hsla(199,89%,48%,0.4), 0 0 80px hsla(262,83%,58%,0.2)" }} />
        <Avatar className="w-40 h-40 ring-4 ring-primary/30 relative z-10 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:ring-primary/60">
          <AvatarImage src="/images/profile.jpg" alt="Livan Torres" className="object-cover" />
          <AvatarFallback className="text-3xl font-bold bg-primary/10 text-primary">LT</AvatarFallback>
        </Avatar>
      </div>

      {/* Main Info */}
      <div className="space-y-4 max-w-2xl">
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-emerald-400 to-primary/80 bg-clip-text text-transparent pb-1"
        >
          {t.hero.title}
        </motion.h1>
        <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-lg mx-auto">
          {t.hero.role}
        </p>
      </div>

      {/* Contact Grid Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl px-4">
        <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-card/40 backdrop-blur-md border border-border/40 text-sm hover:border-primary/30 transition-all duration-300 shadow-sm">
          <MapPin className="w-4.5 h-4.5 text-primary" />
          <span className="font-medium">{t.hero.location}</span>
        </div>
        <a
          href="mailto:livantorresnunez@gmail.com"
          className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-card/40 backdrop-blur-md border border-border/40 text-sm hover:border-primary/30 hover:text-primary transition-all duration-300 shadow-sm"
        >
          <Mail className="w-4.5 h-4.5 text-primary" />
          <span className="font-medium">livantorresnunez@gmail.com</span>
        </a>
        <a
          href="https://wa.me/573108058074"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-card/40 backdrop-blur-md border border-border/40 text-sm hover:border-primary/30 hover:text-primary transition-all duration-300 shadow-sm"
        >
          <Phone className="w-4.5 h-4.5 text-primary" />
          <span className="font-medium">+57 3108058074</span>
        </a>
      </div>

      {/* Premium Buttons */}
      <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 cursor-pointer"
        >
          {t.hero.contactMe}
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Social Icons */}
        <div className="flex gap-3">
          <a
            href="https://github.com/livantorres"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl bg-card/40 backdrop-blur-md border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 transition-all shadow-sm"
            title="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/livantorres19/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl bg-card/40 backdrop-blur-md border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 transition-all shadow-sm"
            title="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
