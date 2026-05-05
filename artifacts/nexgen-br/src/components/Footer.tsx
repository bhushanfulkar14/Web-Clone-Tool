import { Logo } from "./Logo";
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import type { SectionId } from "@/App";

const quickLinks: { label: string; id: SectionId }[] = [
  { label: "About Us",     id: "about"      },
  { label: "Courses",      id: "courses"    },
  { label: "Internship",   id: "internship" },
  { label: "Hire From Us", id: "hire"       },
  { label: "Blog",         id: "blog"       },
  { label: "Reviews",      id: "reviews"    },
  { label: "Contact",      id: "contact"    },
];

interface FooterProps {
  onNavigate: (id: SectionId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#05070f] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <button onClick={() => onNavigate("home")} className="mb-6 block">
              <Logo size="md" />
            </button>
            <p className="text-gray-400 max-w-sm mb-4 text-sm leading-relaxed">
              Empowering the next generation of engineers with real-world skills, industry mentorship, and live production experience.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>info@nexgenbrtechnologies.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span>Wardha, Nagpur, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-3">
              {[
                { Icon: Twitter,   href: "#" },
                { Icon: Github,    href: "#" },
                { Icon: Linkedin,  href: "#" },
                { Icon: Instagram, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "Refund Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold mt-8 mb-4">Office Hours</h4>
            <ul className="space-y-1.5 text-xs text-gray-500">
              <li className="flex justify-between gap-4"><span>Mon – Fri</span><span className="text-gray-400">9 AM – 7 PM</span></li>
              <li className="flex justify-between gap-4"><span>Saturday</span><span className="text-gray-400">9 AM – 5 PM</span></li>
              <li className="flex justify-between gap-4"><span>Sunday</span><span className="text-gray-400">10 AM – 2 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} NexGen BR Technologies. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Designed for the builders of tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
