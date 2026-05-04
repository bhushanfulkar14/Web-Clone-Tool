import { Logo } from "./Logo";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#05070f] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo size="md" className="mb-6" />
            <p className="text-gray-400 max-w-sm mb-6 text-sm leading-relaxed">
              Empowering the next generation of engineers with real-world skills, industry mentorship, and live production experience.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Courses", "Internship", "Hire from us", "Blog"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "Refund Policy"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
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
