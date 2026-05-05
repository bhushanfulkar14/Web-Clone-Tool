import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { SectionId } from "@/App";

const navLinks: { label: string; href: SectionId }[] = [
  { label: "Home",       href: "home" },
  { label: "About",      href: "about" },
  { label: "Services",   href: "services" },
  { label: "Courses",    href: "courses" },
  { label: "Internship", href: "internship" },
  { label: "Projects",   href: "projects" },
  { label: "Hire",       href: "hire" },
  { label: "Blog",       href: "blog" },
  { label: "Reviews",    href: "reviews" },
  { label: "Contact",    href: "contact" },
];

interface NavbarProps {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}

export function Navbar({ active, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id: SectionId) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0d1a]/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => go("home")} className="flex items-center flex-shrink-0">
          <Logo size="md" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => go(link.href)}
              className={`relative text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200 ${
                active === link.href
                  ? "text-white bg-white/8"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Button
            onClick={() => go("internship")}
            className="hidden sm:flex bg-gradient-primary hover:opacity-90 text-white border-0 hover-glow rounded-full px-5 h-9 text-sm font-semibold"
          >
            Apply Now →
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-gray-400 hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0d1120] border-t border-white/5 px-4 py-3 flex flex-col gap-1">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => go(link.href)}
              className={`text-sm font-medium text-left px-4 py-2.5 rounded-xl transition-colors ${
                active === link.href
                  ? "text-white bg-white/10 border border-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => go("internship")}
            className="mt-2 bg-gradient-primary text-white rounded-xl font-semibold"
          >
            Apply Now →
          </Button>
        </div>
      )}
    </header>
  );
}
