import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, BarChart2, ArrowRight, Flame, Star, Briefcase, BookOpen, Code2, Brain, Palette, Database, Trophy } from "lucide-react";

type Category = "All Courses" | "Development" | "Data & Analytics" | "AI & Machine Learning" | "Core CS" | "Design";

const categories: Category[] = [
  "All Courses",
  "Development",
  "Data & Analytics",
  "AI & Machine Learning",
  "Core CS",
  "Design",
];

const courses = [
  {
    category: "Development" as Category,
    badge: "Most Popular",
    badgeColor: "from-blue-500 to-cyan-400",
    badgeIcon: Star,
    title: "Python Full Stack Development",
    desc: "Master Python, Django, FastAPI, React, MongoDB. Build deployable real-world apps.",
    duration: "16 weeks",
    level: "Beginner → Pro",
    levelColor: "text-green-400",
    color: "from-blue-600 to-cyan-500",
    glow: "rgba(79,110,247,0.2)",
    icon: Code2,
    tags: ["Python", "Django", "FastAPI", "React", "MongoDB"],
  },
  {
    category: "Development" as Category,
    badge: "Industry Ready",
    badgeColor: "from-orange-500 to-yellow-400",
    badgeIcon: Briefcase,
    title: "Java Full Stack Development",
    desc: "Java, Spring Boot, Hibernate, React. Enterprise-grade backend & frontend integration.",
    duration: "16 weeks",
    level: "Beginner → Pro",
    levelColor: "text-green-400",
    color: "from-orange-500 to-red-500",
    glow: "rgba(249,115,22,0.2)",
    icon: Code2,
    tags: ["Java", "Spring Boot", "Hibernate", "React"],
  },
  {
    category: "Development" as Category,
    badge: "Hands-on",
    badgeColor: "from-purple-500 to-pink-400",
    badgeIcon: BookOpen,
    title: "Frontend (HTML, CSS, React)",
    desc: "Modern UI with semantic HTML5, Tailwind, React 19, and component design patterns.",
    duration: "10 weeks",
    level: "Beginner",
    levelColor: "text-cyan-400",
    color: "from-purple-600 to-pink-500",
    glow: "rgba(168,85,247,0.2)",
    icon: Palette,
    tags: ["HTML5", "CSS3", "Tailwind", "React 19"],
  },
  {
    category: "Development" as Category,
    badge: "API Mastery",
    badgeColor: "from-teal-500 to-green-400",
    badgeIcon: Code2,
    title: "Backend (Node.js)",
    desc: "Node.js, Express, REST + GraphQL, Auth, MongoDB & PostgreSQL deployments.",
    duration: "10 weeks",
    level: "Intermediate",
    levelColor: "text-yellow-400",
    color: "from-teal-500 to-green-500",
    glow: "rgba(20,184,166,0.2)",
    icon: Code2,
    tags: ["Node.js", "Express", "REST", "GraphQL", "PostgreSQL"],
  },
  {
    category: "Data & Analytics" as Category,
    badge: "Career Track",
    badgeColor: "from-blue-500 to-indigo-400",
    badgeIcon: Briefcase,
    title: "Data Analyst Course",
    desc: "SQL, Python, statistics, dashboarding, storytelling with data, real datasets.",
    duration: "12 weeks",
    level: "All levels",
    levelColor: "text-cyan-400",
    color: "from-blue-600 to-indigo-500",
    glow: "rgba(99,102,241,0.2)",
    icon: BarChart2,
    tags: ["SQL", "Python", "Statistics", "Tableau", "Excel"],
  },
  {
    category: "Data & Analytics" as Category,
    badge: "BI Tools",
    badgeColor: "from-yellow-500 to-orange-400",
    badgeIcon: BarChart2,
    title: "Power BI",
    desc: "DAX, Power Query, modeling, professional dashboards & published reports.",
    duration: "6 weeks",
    level: "Intermediate",
    levelColor: "text-yellow-400",
    color: "from-yellow-500 to-amber-500",
    glow: "rgba(245,158,11,0.2)",
    icon: BarChart2,
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
  },
  {
    category: "Data & Analytics" as Category,
    badge: "Foundational",
    badgeColor: "from-gray-500 to-slate-400",
    badgeIcon: BookOpen,
    title: "Advanced Excel",
    desc: "Pivots, formulas, Power Query, automation with VBA & data analysis.",
    duration: "4 weeks",
    level: "Beginner",
    levelColor: "text-cyan-400",
    color: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.2)",
    icon: Database,
    tags: ["Excel", "VBA", "Power Query", "Pivot Tables"],
  },
  {
    category: "AI & Machine Learning" as Category,
    badge: "Hot 🔥",
    badgeColor: "from-red-500 to-orange-400",
    badgeIcon: Flame,
    title: "AI & Machine Learning with Python",
    desc: "Supervised/unsupervised ML, scikit-learn, end-to-end ML lifecycle, deployment.",
    duration: "14 weeks",
    level: "Intermediate",
    levelColor: "text-yellow-400",
    color: "from-red-600 to-orange-500",
    glow: "rgba(239,68,68,0.2)",
    icon: Brain,
    tags: ["Python", "scikit-learn", "ML", "Deployment"],
  },
  {
    category: "AI & Machine Learning" as Category,
    badge: "Neural Nets",
    badgeColor: "from-violet-600 to-purple-400",
    badgeIcon: Brain,
    title: "Deep Learning Basics",
    desc: "Neural networks, CNNs, RNNs, Transformers fundamentals using PyTorch.",
    duration: "8 weeks",
    level: "Intermediate+",
    levelColor: "text-yellow-400",
    color: "from-violet-600 to-fuchsia-500",
    glow: "rgba(139,92,246,0.2)",
    icon: Brain,
    tags: ["PyTorch", "CNNs", "RNNs", "Transformers"],
  },
  {
    category: "AI & Machine Learning" as Category,
    badge: "Portfolio",
    badgeColor: "from-pink-500 to-rose-400",
    badgeIcon: Star,
    title: "Real-Time ML Projects",
    desc: "Recommendation engines, computer vision, NLP — ship working ML systems.",
    duration: "Project-based",
    level: "Advanced",
    levelColor: "text-red-400",
    color: "from-pink-600 to-rose-500",
    glow: "rgba(236,72,153,0.2)",
    icon: Brain,
    tags: ["NLP", "Computer Vision", "Recommender Systems"],
  },
  {
    category: "Core CS" as Category,
    badge: "Interview Prep",
    badgeColor: "from-cyan-500 to-blue-400",
    badgeIcon: Trophy,
    title: "Data Structures & Algorithms (DSA)",
    desc: "200+ problems, system design intro, FAANG-style interview preparation.",
    duration: "12 weeks",
    level: "All levels",
    levelColor: "text-cyan-400",
    color: "from-cyan-600 to-blue-600",
    glow: "rgba(6,182,212,0.2)",
    icon: Trophy,
    tags: ["DSA", "System Design", "FAANG Prep", "Problem Solving"],
  },
  {
    category: "Design" as Category,
    badge: "Creative",
    badgeColor: "from-fuchsia-500 to-pink-400",
    badgeIcon: Palette,
    title: "UI/UX Design (Figma)",
    desc: "Design thinking, wireframing, prototyping, design systems & Figma mastery.",
    duration: "8 weeks",
    level: "Beginner → Pro",
    levelColor: "text-green-400",
    color: "from-fuchsia-600 to-pink-500",
    glow: "rgba(217,70,239,0.2)",
    icon: Palette,
    tags: ["Figma", "UI/UX", "Wireframing", "Design Systems"],
  },
];

export function Courses() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Courses");

  const filtered = activeCategory === "All Courses"
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1a] via-[#0d1120] to-[#0a0d1a] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            Courses
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upgrade Your Skills with <span className="text-gradient">Industry-Ready</span> Courses
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pick a track. Build a portfolio. Get hired. Every course includes live projects, mentor feedback, and a verified certificate.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed] text-white border-transparent shadow-lg shadow-indigo-500/20"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Course Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((course, i) => {
              const BadgeIcon = course.badgeIcon;
              const CourseIcon = course.icon;
              return (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative bg-[#111827]/80 border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300 flex flex-col"
                  whileHover={{ y: -5, boxShadow: `0 20px 40px ${course.glow}` }}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${course.color}`} />

                  {/* Card visual header */}
                  <div className={`relative h-32 bg-gradient-to-br ${course.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color}`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CourseIcon className="w-14 h-14 text-white opacity-30" />
                    </div>
                    {/* Badge */}
                    <div className={`absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r ${course.badgeColor} text-white text-[10px] font-bold`}>
                      <BadgeIcon className="w-2.5 h-2.5" />
                      {course.badge}
                    </div>
                    {/* Category label */}
                    <div className="absolute bottom-3 right-3 text-[10px] text-white/60 font-medium uppercase tracking-wider">
                      {course.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white font-bold text-base mb-2 leading-snug group-hover:text-gradient transition-all duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">
                      {course.desc}
                    </p>

                    {/* Duration & Level */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-500" />
                        <span className="text-gray-400 text-xs">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
                        <span className={`text-xs font-medium ${course.levelColor}`}>{course.level}</span>
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Enroll button */}
                    <button
                      className={`w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${course.color} opacity-75 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-1.5`}
                    >
                      Enroll Now <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-sm mb-4">Not sure which course to pick?</p>
          <button className="px-8 py-3 rounded-full border border-white/10 text-white text-sm font-semibold hover:border-cyan-400/40 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 mx-auto">
            Talk to a Counsellor <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
