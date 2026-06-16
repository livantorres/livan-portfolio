"use client";

import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";

export default function ContactoPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <Contact />
    </motion.div>
  );
}
