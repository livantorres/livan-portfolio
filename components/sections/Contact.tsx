"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Send, User, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const messageText = `Hola Livan, mi nombre es ${formData.name} (${formData.email}).\n\nMensaje:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/573108058074?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    Swal.fire({
      title: "¡Redirigiendo a WhatsApp!",
      text: "Se abrirá WhatsApp para que envíes tu mensaje directamente a Livan.",
      icon: "success",
      confirmButtonColor: "hsl(var(--primary))",
      customClass: {
        popup: "rounded-3xl border border-border/40 bg-background/95 backdrop-blur-md",
      }
    });

    setFormData({ name: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 relative z-10"
    >
      <div className="space-y-2 mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
          {t.contact.title}
        </h2>
        <div className="w-16 h-1.5 bg-primary/40 rounded-full mx-auto" />
      </div>

      <div className="max-w-xl mx-auto rounded-3xl bg-card/25 backdrop-blur-xl border border-border/30 shadow-2xl p-6 sm:p-8 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {/* Name Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2 pl-1">
              <User className="w-4 h-4 text-primary" />
              {t.contact.name}
            </label>
            <Input
              placeholder={t.contact.placeholderName}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background/25 border-border/40 focus:border-primary/50 focus:ring-primary/20 rounded-2xl py-6 hover:border-primary/30 transition-all duration-300 placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2 pl-1">
              <Mail className="w-4 h-4 text-primary" />
              {t.contact.email}
            </label>
            <Input
              type="email"
              placeholder={t.contact.placeholderEmail}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background/25 border-border/40 focus:border-primary/50 focus:ring-primary/20 rounded-2xl py-6 hover:border-primary/30 transition-all duration-300 placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2 pl-1">
              <MessageSquare className="w-4 h-4 text-primary" />
              {t.contact.message}
            </label>
            <Textarea
              placeholder={t.contact.placeholderMsg}
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-background/25 border-border/40 focus:border-primary/50 focus:ring-primary/20 rounded-2xl py-3 hover:border-primary/30 transition-all duration-300 resize-none placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Premium Submit Button */}
          <Button 
            type="submit" 
            className="w-full py-6 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            disabled={loading}
          >
            {loading ? (
              <span>{t.contact.sending}</span>
            ) : (
              <>
                <span>{t.contact.send}</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </div>
    </motion.section>
  );
}
