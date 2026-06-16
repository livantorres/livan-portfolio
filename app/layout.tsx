import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Livan Torres | Portfolio",
  description: "Ingeniero de Sistemas especializado en backend PHP, Laravel y CakePHP",
  keywords: "PHP, Laravel, Next.js, React, Portfolio, Backend Developer",
  authors: [{ name: "Livan Torres" }],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Livan Torres - Ingeniero de Sistemas",
    description: "Portfolio profesional de Livan Torres, especialista en backend PHP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning data-scroll-behavior="smooth" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen bg-background transition-colors duration-300`}>
        <ThemeProvider
        
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex flex-col min-h-screen w-full relative overflow-x-hidden">
              {/* Premium Background Ambience Elements */}
              <div className="fixed inset-0 bg-grid-pattern opacity-70 dark:opacity-40 pointer-events-none select-none z-0" />
              <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none select-none z-0 dark:bg-primary/10 animate-[pulse_6s_ease-in-out_infinite]" />
              <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[160px] pointer-events-none select-none z-0 dark:bg-accent/10 animate-[pulse_8s_ease-in-out_infinite]" />

              <Navbar />
              <main className="flex-1 w-full relative z-10 pt-20">{children}</main>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}