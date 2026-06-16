"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Heart } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative z-10 border-t border-border/30 bg-background/40 backdrop-blur-xl mt-8"
    >
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Left: Branding */}
        <div className="flex flex-col gap-1">
          <span className="text-base font-bold bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
            Livan Torres Núñez
          </span>
          <span className="text-xs text-muted-foreground font-medium">
            Ingeniero de Sistemas &amp; Especialista Backend PHP
          </span>
        </div>

        {/* Center: Copyright */}
        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
          <span>
            {t.footer.developed} &copy; {year} — {t.footer.rights}
          </span>
        </div>

        {/* Right: Made with love */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span>Hecho con</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>en Colombia</span>
        </div>
      </div>
    </motion.footer>
  );
}
