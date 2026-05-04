import { motion } from "framer-motion";
import {
  Monitor, Database, Cpu, Layout, Terminal, Code2,
  BookOpen, Users, Briefcase, FlaskConical, GraduationCap, Search
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Industry-Ready Courses",
    desc: "Structured learning tracks in Web Dev, Data Science, AI/ML, Python, Java, and more — built for real job outcomes.",
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(79,110,247,0.15)",
    tag: "Learning",
  },
  {
    icon: FlaskConical,
    title: "Live Project Training",
    desc: "Hands-on training on real-world projects — from concept to deployment — giving students production-level experience.",
    color: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.15)",
    tag: "Projects",
  },
  {
    icon: Users,
    title: "Internship Programs",
    desc: "Paid and unpaid internship placements across 10+ domains — with mentor support, sprints, and real deliverables.",
    color: "from-cyan-500 to-teal-400",
    glow: "rgba(6,182,212,0.15)",
    tag: "Internship",
  },
  {
    icon: GraduationCap,
    title: "Research Support",
    desc: "Guidance for academic research papers, thesis projects, and publication-ready work in AI, ML, and Data Science.",
    color: "from-emerald-500 to-green-400",
    glow: "rgba(16,185,129,0.15)",
    tag: "Research",
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    desc: "End-to-end placement support — resume building, mock interviews, LinkedIn optimization, and direct recruiter connects.",
    color: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.15)",
    tag: "Career",
  },
  {
    icon: Search,
    title: "Career Counselling",
    desc: "1-on-1 sessions with industry professionals to map your career path, skill gaps, and growth roadmap.",
    color: "from-pink-500 to-rose-400",
    glow: "rgba(236,72,153,0.15)",
    tag: "Guidance",
  },
  {
    icon: Monitor,
    title: "Web Development",
    desc: "Full-stack web application development — from responsive UI to scalable backend APIs and cloud deployment.",
    color: "from-sky-500 to-blue-400",
    glow: "rgba(14,165,233,0.15)",
    tag: "Development",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    desc: "Extracting business insights from complex data using Python, SQL, Power BI, and statistical modeling.",
    color: "from-indigo-500 to-violet-400",
    glow: "rgba(99,102,241,0.15)",
    tag: "Data",
  },
  {
    icon: Cpu,
    title: "AI & ML Solutions",
    desc: "Building intelligent systems with predictive models, NLP pipelines, computer vision, and LLM integrations.",
    color: "from-fuchsia-500 to-pink-400",
    glow: "rgba(217,70,239,0.15)",
    tag: "AI / ML",
  },
  {
    icon: Layout,
    title: "Full Stack Training",
    desc: "Comprehensive curriculum covering frontend frameworks, backend APIs, databases, and deployment pipelines.",
    color: "from-teal-500 to-emerald-400",
    glow: "rgba(20,184,166,0.15)",
    tag: "Training",
  },
  {
    icon: Terminal,
    title: "Python Engineering",
    desc: "Scripting, automation, Django/FastAPI backend development, and data pipeline engineering using Python.",
    color: "from-yellow-500 to-amber-400",
    glow: "rgba(245,158,11,0.15)",
    tag: "Python",
  },
  {
    icon: Code2,
    title: "React & Modern UI",
    desc: "High-performance, accessible user interfaces using React 19, Tailwind CSS, and modern component patterns.",
    color: "from-red-500 to-orange-400",
    glow: "rgba(239,68,68,0.15)",
    tag: "Frontend",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1a] via-[#0d1120] to-[#0a0d1a] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete IT Solutions for{" "}
            <span className="text-gradient">Students & Professionals</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From foundational courses to research support and placement assistance — we cover every stage of your tech journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-[#111827]/80 border border-white/5 rounded-2xl p-6 hover:border-white/15 transition-all duration-300 overflow-hidden cursor-default"
                whileHover={{ y: -5, boxShadow: `0 16px 40px ${service.glow}` }}
              >
                {/* BG glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-15 rounded-bl-full transition-opacity duration-500`} />

                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${service.color} bg-clip-text text-transparent border border-white/10`}>
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base mb-2 leading-snug">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
