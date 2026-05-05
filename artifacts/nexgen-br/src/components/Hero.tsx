import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Shield, Code, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import type { SectionId } from "@/App";

const technologies = [
  "Python", "FastAPI", "React", "Node.js", "TensorFlow", "Django", "AWS", "Docker", "MongoDB", "PostgreSQL",
  "Python", "FastAPI", "React", "Node.js", "TensorFlow", "Django", "AWS", "Docker", "MongoDB", "PostgreSQL"
];

interface HeroProps {
  onNavigate: (id: SectionId) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex flex-col justify-center opacity-5 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {technologies.map((tech, i) => (
            <span key={i} className="text-[150px] font-bold mx-8 text-white">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo size="xl" showText={false} className="mb-8" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          NexGen BR Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base tracking-[0.3em] text-gray-400 mb-8"
        >
          — LEARN · BUILD · INNOVATE —
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight"
        >
          Learn. <span className="text-gradient">Build.</span> Innovate.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10"
        >
          Empowering students with cutting-edge skills in AI, Data Science, and Full Stack Development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { icon: GraduationCap, text: "Industry-Level Courses",  id: "courses"    as SectionId },
            { icon: Code,          text: "Real-Time Projects",       id: "projects"   as SectionId },
            { icon: Briefcase,     text: "Internship Programs",      id: "internship" as SectionId },
            { icon: Shield,        text: "Career Guidance",          id: "hire"       as SectionId },
          ].map((pill, i) => (
            <button
              key={i}
              onClick={() => onNavigate(pill.id)}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            >
              <pill.icon className="w-4 h-4 text-cyan-400" />
              {pill.text}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <Button
            size="lg"
            onClick={() => onNavigate("internship")}
            className="bg-gradient-primary hover:opacity-90 text-white rounded-full px-8 text-lg hover-glow"
          >
            Apply for Internship &rarr;
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate("courses")}
            className="rounded-full px-8 text-lg border-white/20 hover:bg-white/5 text-white"
          >
            Explore Courses
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="w-full max-w-5xl bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/10">
            {[
              { label: "STUDENTS TRAINED", value: "1,200+" },
              { label: "PLACEMENT RATE",   value: "85%"    },
              { label: "INDUSTRY MENTORS", value: "40+"    },
              { label: "LIVE PROJECTS",    value: "120+"   },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-2">
                <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-xs text-gray-400 tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
