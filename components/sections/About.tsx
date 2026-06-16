"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { User, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 relative z-10"
    >
      <div className="space-y-2 mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
          {t.about.title}
        </h2>
        <div className="w-16 h-1.5 bg-primary/40 rounded-full mx-auto" />
      </div>

      <div className="max-w-3xl mx-auto rounded-3xl bg-card/30 backdrop-blur-xl border border-border/30 shadow-2xl overflow-hidden p-6 sm:p-10">
        <Tabs defaultValue="perfil" className="w-full">
          <TabsList className="flex flex-wrap sm:grid w-full sm:grid-cols-3 bg-muted/40 p-1 rounded-2xl border border-border/20 h-auto gap-1 sm:gap-0">
            <TabsTrigger 
              value="perfil" 
              className="flex-1 rounded-xl flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold py-2.5 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
            >
              <User className="w-4 h-4 hidden xs:block" />
              {t.about.perfil}
            </TabsTrigger>
            <TabsTrigger 
              value="educacion" 
              className="flex-1 rounded-xl flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold py-2.5 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
            >
              <GraduationCap className="w-4 h-4 hidden xs:block" />
              {t.about.educacion}
            </TabsTrigger>
            <TabsTrigger 
              value="certificaciones" 
              className="flex-1 rounded-xl flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold py-2.5 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
            >
              <Award className="w-4 h-4 hidden xs:block" />
              {t.about.logros}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="perfil" className="mt-8 space-y-6 text-base text-muted-foreground leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
          </TabsContent>

          <TabsContent value="educacion" className="mt-8 space-y-6">
            <div className="relative pl-6 border-l-2 border-primary/20 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md" />
                <h3 className="text-lg font-bold text-foreground">{t.about.degree}</h3>
                <p className="text-sm text-primary font-medium">{t.about.degreeUni}</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md" />
                <h3 className="text-lg font-bold text-foreground">{t.about.degree2}</h3>
                <p className="text-sm text-primary font-medium">{t.about.degree2Uni}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certificaciones" className="mt-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                t.about.cert1,
                t.about.cert2,
                t.about.cert3,
                t.about.cert4,
              ].map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-muted/20 border border-border/20 shadow-sm hover:border-primary/20 hover:bg-muted/30 transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
}
