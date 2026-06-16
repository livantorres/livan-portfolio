"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center text-center px-6 overflow-hidden select-none bg-background text-foreground"
        >
          {/* Grid pattern matches the site but stronger for splash */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(99,179,237,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,179,237,0.08) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Glowing orbs */}
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] top-1/4 left-1/4 pointer-events-none" style={{ background: "hsla(199,89%,48%,0.12)" }} />
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] bottom-1/4 right-1/4 pointer-events-none" style={{ background: "hsla(262,83%,58%,0.10)" }} />

          <div className="space-y-10 max-w-2xl relative z-10">
            {/* Quote 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-6xl font-black uppercase tracking-wider"
              style={{
                background: "linear-gradient(to right, hsl(199,89%,58%), hsl(199,89%,75%), hsl(262,83%,68%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.splash.idea}
            </motion.h1>

            {/* Quote 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              className="text-lg sm:text-2xl font-medium leading-relaxed max-w-xl mx-auto"
              style={{ color: "hsl(210 40% 80%)" }}
            >
              {t.splash.transform}
            </motion.p>

            {/* Quote 3 badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.6, duration: 0.6 }}
              className="inline-block px-8 py-3 rounded-full text-sm sm:text-base font-bold uppercase tracking-widest"
              style={{
                border: "1px solid hsla(199,89%,48%,0.4)",
                background: "hsla(199,89%,48%,0.08)",
                color: "hsl(199,89%,65%)",
                boxShadow: "0 0 30px hsla(199,89%,48%,0.15)",
              }}
            >
              {t.splash.success}
            </motion.div>
          </div>

          {/* Progress bar at bottom */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-52 h-1 rounded-full overflow-hidden bg-primary/10"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
              className="absolute inset-y-0 w-1/2 rounded-full"
              style={{ background: "linear-gradient(to right, hsl(199,89%,48%), hsl(262,83%,58%))" }}
            />
          </div>

          {/* Skip hint */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            onClick={() => setShow(false)}
            className="absolute bottom-6 right-6 text-xs font-semibold px-3 py-1.5 rounded-lg cursor-pointer"
            style={{ color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            Saltar →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
