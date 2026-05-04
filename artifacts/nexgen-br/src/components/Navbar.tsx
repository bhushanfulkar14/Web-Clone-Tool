import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Courses", href: "courses" },
  { label: "Internship", href: "internship" },
  { label: "Projects", href: "projects" },
  { label: "Hire", href: "hire" },
  { label: "Blog", href: "blog" },
  { label: "Reviews", href: "reviews" },
  { label: "Contact", href: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0d1a]/85 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="flex items-center">
          <Logo size="md" />
        </button>

        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("dashboard")}
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Dashboard
          </button>
        </nav>

        <Button
          onClick={() => scrollTo("internship")}
          className="bg-gradient-primary hover:opacity-90 text-white border-0 hover-glow rounded-full px-6 cursor-pointer"
        >
          Apply Now &rarr;
        </Button>
      </div>
    </header>
  );
}
