"use client";

import Link from "next/link";
import { Home, User, Code, Briefcase, Mail } from "lucide-react";

const links = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/sobre-mi", label: "Sobre mí", icon: User },
  { href: "/habilidades", label: "Habilidades", icon: Code },
  { href: "/experiencia", label: "Experiencia", icon: Briefcase },
  { href: "/contacto", label: "Contacto", icon: Mail },
];

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const handleClick = () => {
    if (onClose) onClose();
  };

  return (
    <div className="flex flex-col gap-4 p-4 w-64">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={handleClick}
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium text-muted-foreground"
        >
          <link.icon className="w-5 h-5" />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
}