"use client";

import Projects from "@/components/sections/Projects";
import { motion } from "framer-motion";

export default function ProyectosPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <Projects />
    </motion.div>
  );
}
