import { Link } from "wouter";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Courses", href: "#courses" },
  { label: "Internship", href: "#internship" },
  { label: "Projects", href: "#projects" },
  { label: "Hire", href: "#hire" },
  { label: "Blog", href: "#blog" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0d1a]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <Logo size="md" />
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#dashboard"
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Dashboard
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="bg-gradient-primary hover:opacity-90 text-white border-0 hover-glow rounded-full px-6">
            Apply Now &rarr;
          </Button>
        </div>
      </div>
    </header>
  );
}
