import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock, BarChart2, ArrowRight, Flame, Star, Briefcase, BookOpen,
  Code2, Brain, Palette, Database, Trophy, X, CheckCircle2, Loader2,
  Upload, FileText, X as XIcon
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { SectionId } from "@/App";

type Category = "All Courses" | "Development" | "Data & Analytics" | "AI & Machine Learning" | "Core CS" | "Design";

const categories: Category[] = [
  "All Courses", "Development", "Data & Analytics", "AI & Machine Learning", "Core CS", "Design",
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
    headerBg: "linear-gradient(135deg,#1e3a8a,#0e7490)",
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
    headerBg: "linear-gradient(135deg,#7c2d12,#9a3412)",
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
    headerBg: "linear-gradient(135deg,#4a044e,#831843)",
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
    headerBg: "linear-gradient(135deg,#064e3b,#065f46)",
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
    headerBg: "linear-gradient(135deg,#1e1b4b,#1e3a8a)",
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
    headerBg: "linear-gradient(135deg,#78350f,#92400e)",
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
    headerBg: "linear-gradient(135deg,#064e3b,#0f766e)",
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
    headerBg: "linear-gradient(135deg,#450a0a,#7f1d1d)",
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
    headerBg: "linear-gradient(135deg,#2e1065,#4c1d95)",
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
    headerBg: "linear-gradient(135deg,#500724,#881337)",
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
    headerBg: "linear-gradient(135deg,#0c4a6e,#075985)",
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
    headerBg: "linear-gradient(135deg,#4a044e,#701a75)",
    glow: "rgba(217,70,239,0.2)",
    icon: Palette,
    tags: ["Figma", "UI/UX", "Wireframing", "Design Systems"],
  },
];

type Course = typeof courses[0];

const inputCls = "bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-400 rounded-xl h-11 text-sm";

/* ── Enroll Modal ────────────────────────────────────────────────── */
function EnrollModal({ course, onClose }: { course: Course; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", collegeName: "", collegeId: "", department: "", year: ""
  });
  const [resumeFile, setResumeFile]     = useState<File | null>(null);
  const [resumeBase64, setResumeBase64] = useState("");
  const [resumeError, setResumeError]   = useState("");
  const [submitting, setSubmitting]     = useState(false);
  const [submitted, setSubmitted]       = useState(false);
  const [error, setError]               = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { setResumeError("File must be under 5 MB"); return; }
    setResumeError("");
    setResumeFile(file);
    const reader = new FileReader();
    reader.onload = () => setResumeBase64(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true); setError("");
    try {
      const res = await fetch("/api/hire/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          college: form.collegeName,
          year: form.year || "Student",
          domain: course.title,
          skills: form.department,
          message: `College ID: ${form.collegeId}\nDepartment: ${form.department}\nCourse Enrolled: ${course.title}`,
          resumeBase64: resumeBase64 || undefined,
          resumeFileName: resumeFile?.name || undefined,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const BadgeIcon = course.badgeIcon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ type: "spring", damping: 26, stiffness: 300 }}
        className="relative bg-[#0d1120] border border-white/10 rounded-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className={`h-1.5 w-full bg-gradient-to-r ${course.color} rounded-t-2xl`} />
        <div className="p-6">
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center flex-shrink-0`}>
                <course.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">Course Enrollment</h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}>
                  {course.title}
                </p>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Badge */}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${course.badgeColor} text-white text-xs font-bold mb-5`}>
            <BadgeIcon className="w-3 h-3" />
            {course.badge} · {course.duration} · {course.level}
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${course.color} flex items-center justify-center mx-auto mb-4`}>
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-bold text-xl mb-2">Enrollment Request Sent! 🎉</h4>
              <p className="text-gray-400 text-sm mb-1">
                Thank you for enrolling in <strong className="text-white">{course.title}</strong>.
              </p>
              <p className="text-gray-500 text-xs mb-6">
                Our team will contact you within 24–48 hours to confirm your seat.
              </p>
              <button onClick={onClose} className={`px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${course.color} hover:opacity-90 transition-opacity`}>
                Close
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-300 mb-1.5 block">Full Name *</label>
                  <Input required value={form.name} onChange={e => setForm(f=>({...f,name:e.target.value}))}
                    placeholder="Your full name" className={inputCls} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 mb-1.5 block">Email Address *</label>
                  <Input required type="email" value={form.email} onChange={e => setForm(f=>({...f,email:e.target.value}))}
                    placeholder="you@email.com" className={inputCls} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 mb-1.5 block">Phone Number *</label>
                  <Input required value={form.phone} onChange={e => setForm(f=>({...f,phone:e.target.value}))}
                    placeholder="+91 XXXXX XXXXX" className={inputCls} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 mb-1.5 block">College Name *</label>
                  <Input required value={form.collegeName} onChange={e => setForm(f=>({...f,collegeName:e.target.value}))}
                    placeholder="RTM Nagpur University" className={inputCls} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 mb-1.5 block">College / Student ID *</label>
                  <Input required value={form.collegeId} onChange={e => setForm(f=>({...f,collegeId:e.target.value}))}
                    placeholder="e.g. 2024NIT0456" className={inputCls} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 mb-1.5 block">Department *</label>
                  <Input required value={form.department} onChange={e => setForm(f=>({...f,department:e.target.value}))}
                    placeholder="e.g. Computer Science" className={inputCls} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 mb-1.5 block">Year of Study *</label>
                  <select required value={form.year} onChange={e => setForm(f=>({...f,year:e.target.value}))}
                    className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white px-3 text-sm focus:outline-none focus:border-cyan-400">
                    <option value="" className="bg-gray-900">Select year</option>
                    {["1st Year","2nd Year","3rd Year","4th Year","Graduate / Fresher"].map(y=>(
                      <option key={y} value={y} className="bg-gray-900">{y}</option>
                    ))}
                  </select>
                </div>
                {/* Course selected — readonly display */}
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-300 mb-1.5 block">Selected Course</label>
                  <div className={`h-11 rounded-xl border border-white/10 bg-white/5 flex items-center px-4 gap-2`}>
                    <course.icon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className={`text-sm font-semibold bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}>
                      {course.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Resume upload */}
              <div>
                <label className="text-xs font-semibold text-gray-300 mb-1.5 block">Upload Resume (Optional · PDF / DOC)</label>
                {resumeFile ? (
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <FileText className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-white text-sm flex-1 truncate">{resumeFile.name}</span>
                    <span className="text-gray-500 text-xs">{(resumeFile.size/1024).toFixed(0)} KB</span>
                    <button type="button" onClick={() => { setResumeFile(null); setResumeBase64(""); }} className="text-gray-500 hover:text-red-400">
                      <XIcon className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button type="button" onClick={() => fileRef.current?.click()}
                    className="w-full flex items-center justify-center gap-2 bg-white/5 border-2 border-dashed border-cyan-500/30 hover:border-cyan-400/60 rounded-xl px-4 py-4 transition-colors">
                    <Upload className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-400 text-sm hover:text-white">Click to upload resume / CV</span>
                    <span className="text-gray-600 text-xs">Max 5 MB</span>
                  </button>
                )}
                {resumeError && <p className="text-red-400 text-xs mt-1">{resumeError}</p>}
                <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" onChange={onFileChange} className="hidden" />
              </div>

              {error && <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-xl px-3 py-2">{error}</p>}

              <button type="submit" disabled={submitting}
                className={`w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${course.color} hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}>
                {submitting
                  ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
                  : <>Confirm Enrollment <ArrowRight className="w-4 h-4" /></>}
              </button>
              <p className="text-center text-gray-600 text-xs pb-1">
                Details sent to <span className="text-gray-400">info@nexgenbrtechnologies.com</span>
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

interface CoursesProps {
  onNavigate: (id: SectionId) => void;
}

export function Courses({ onNavigate: _onNavigate }: CoursesProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All Courses");
  const [enrollCourse, setEnrollCourse]     = useState<Course | null>(null);

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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        {/* Course Cards */}
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
                  className="group relative bg-[#111827]/80 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col cursor-pointer"
                  whileHover={{ y: -5, boxShadow: `0 20px 40px ${course.glow}` }}
                  onClick={() => setEnrollCourse(course)}
                >
                  {/* Colored top bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${course.color} flex-shrink-0`} />

                  {/* Card visual header — fully visible gradient */}
                  <div
                    className="relative h-36 flex-shrink-0 overflow-hidden"
                    style={{ background: course.headerBg }}
                  >
                    {/* Subtle noise overlay */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Large icon watermark */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CourseIcon className="w-20 h-20 text-white/20" />
                    </div>

                    {/* Decorative code text */}
                    <div className="absolute bottom-3 left-4 font-mono text-white/30 text-2xl font-bold select-none">
                      {"</>"}
                    </div>

                    {/* Badge */}
                    <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${course.badgeColor} text-white text-[10px] font-bold shadow-lg`}>
                      <BadgeIcon className="w-2.5 h-2.5" />
                      {course.badge}
                    </div>

                    {/* Category label */}
                    <div className="absolute bottom-3 right-3 text-[10px] text-white/50 font-semibold uppercase tracking-widest bg-black/30 px-2 py-0.5 rounded-full">
                      {course.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white font-bold text-base mb-2 leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">
                      {course.desc}
                    </p>

                    {/* Duration & Level */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-500" />
                        <span className="text-gray-400 text-xs">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
                        <span className={`text-xs font-semibold ${course.levelColor}`}>{course.level}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Enroll button */}
                    <button
                      onClick={e => { e.stopPropagation(); setEnrollCourse(course); }}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${course.color} hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-1.5`}
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

      {/* Enroll Modal */}
      <AnimatePresence>
        {enrollCourse && (
          <EnrollModal course={enrollCourse} onClose={() => setEnrollCourse(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
