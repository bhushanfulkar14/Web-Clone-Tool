import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Code2, Coffee, BarChart2, Brain, Bot, LineChart,
  Cloud, GitBranch, ShieldAlert, X, ArrowRight, CheckCircle2,
  Loader2, Clock, Users, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const domains = [
  {
    icon: Globe,
    title: "Web Development",
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(79,110,247,0.3)",
    duration: "2–3 Months",
    skills: ["HTML/CSS", "React", "Node.js", "MongoDB"],
    desc: "Build modern, responsive web apps used by real users in production environments.",
    img: "web",
  },
  {
    icon: Code2,
    title: "Python Development",
    color: "from-yellow-400 to-green-400",
    glow: "rgba(250,204,21,0.25)",
    duration: "2–3 Months",
    skills: ["Python", "Flask", "FastAPI", "REST APIs"],
    desc: "Write clean, scalable Python backend services and automate real-world workflows.",
    img: "python",
  },
  {
    icon: Coffee,
    title: "Java Development",
    color: "from-orange-500 to-red-400",
    glow: "rgba(249,115,22,0.25)",
    duration: "2–3 Months",
    skills: ["Java", "Spring Boot", "Hibernate", "SQL"],
    desc: "Build enterprise-grade Java applications with industry-standard frameworks.",
    img: "java",
  },
  {
    icon: BarChart2,
    title: "Data Science",
    color: "from-purple-500 to-pink-400",
    glow: "rgba(168,85,247,0.25)",
    duration: "3 Months",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
    desc: "Extract insights from real datasets and drive data-informed decisions.",
    img: "datasci",
  },
  {
    icon: Bot,
    title: "Machine Learning",
    color: "from-indigo-500 to-purple-400",
    glow: "rgba(99,102,241,0.25)",
    duration: "3 Months",
    skills: ["Scikit-learn", "TensorFlow", "Keras", "Python"],
    desc: "Train, evaluate, and deploy ML models on industry-level datasets.",
    img: "ml",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    color: "from-fuchsia-500 to-violet-500",
    glow: "rgba(217,70,239,0.25)",
    duration: "3 Months",
    skills: ["Deep Learning", "NLP", "Computer Vision", "PyTorch"],
    desc: "Dive into cutting-edge AI techniques including LLMs, NLP, and computer vision.",
    img: "ai",
  },
  {
    icon: LineChart,
    title: "Data Analyst",
    color: "from-teal-400 to-cyan-500",
    glow: "rgba(20,184,166,0.25)",
    duration: "2 Months",
    skills: ["Excel", "SQL", "Power BI", "Tableau"],
    desc: "Analyze, visualize, and report on data to inform strategic business decisions.",
    img: "analyst",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    color: "from-sky-500 to-blue-400",
    glow: "rgba(14,165,233,0.25)",
    duration: "3 Months",
    skills: ["AWS", "Azure", "GCP", "Docker"],
    desc: "Deploy, manage, and scale cloud infrastructure across AWS, Azure, and GCP.",
    img: "cloud",
  },
  {
    icon: GitBranch,
    title: "DevOps",
    color: "from-green-400 to-emerald-500",
    glow: "rgba(52,211,153,0.25)",
    duration: "3 Months",
    skills: ["CI/CD", "Kubernetes", "Terraform", "Linux"],
    desc: "Automate deployment pipelines and manage infra-as-code at scale.",
    img: "devops",
  },
  {
    icon: ShieldAlert,
    title: "Cyber Security",
    color: "from-red-500 to-orange-400",
    glow: "rgba(239,68,68,0.25)",
    duration: "3 Months",
    skills: ["Ethical Hacking", "Network Security", "VAPT", "OWASP"],
    desc: "Learn to protect systems, networks, and data from modern cyber threats.",
    img: "cyber",
  },
];

const domainBgPatterns: Record<string, string> = {
  web: "M10 80 Q50 10 90 80 Q50 150 10 80Z",
  python: "M20 20 L80 20 L80 80 L20 80Z",
  java: "M50 10 L90 80 L10 80Z",
  datasci: "M10 50 Q30 10 50 50 Q70 90 90 50",
  ml: "M10 10 Q90 10 90 50 Q90 90 10 90 Q10 50 10 10Z",
  ai: "M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5Z",
  analyst: "M5 95 L50 5 L95 95Z",
  cloud: "M25 60 Q25 35 50 35 Q60 20 75 35 Q95 35 95 55 Q95 70 80 70 L25 70 Q10 70 10 55 Q10 45 25 45",
  devops: "M50 10 A40 40 0 1 1 49.99 10Z",
  cyber: "M50 5 L85 25 L85 75 L50 95 L15 75 L15 25Z",
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  year: string;
  domain: string;
  skills: string;
  message: string;
}

export function Internship() {
  const [selectedDomain, setSelectedDomain] = useState<(typeof domains)[0] | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", phone: "", college: "",
    year: "", domain: "", skills: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const openApply = (domain: (typeof domains)[0]) => {
    setSelectedDomain(domain);
    setFormData(prev => ({ ...prev, domain: domain.title }));
    setSubmitted(false);
    setError("");
  };

  const closeModal = () => {
    setSelectedDomain(null);
    setSubmitted(false);
    setError("");
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/internship/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="internship" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1a] via-[#0d1120] to-[#0a0d1a] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            Internship Program
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-gradient">Domain</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hands-on internships in 10 high-demand domains. Work on real projects, get mentored by industry experts, and launch your tech career.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { icon: Clock, label: "2–3 Months Duration" },
              { icon: Users, label: "Industry Mentors" },
              { icon: Zap, label: "Live Project Experience" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400">
                <s.icon className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {domains.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative bg-[#111827]/70 border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-all duration-300"
                style={{ boxShadow: `0 0 0 0 ${domain.glow}` }}
                whileHover={{ y: -6, boxShadow: `0 16px 40px ${domain.glow}` }}
                onClick={() => openApply(domain)}
              >
                {/* SVG bg illustration */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d={domainBgPatterns[domain.img]} className={`fill-current text-white`} />
                  </svg>
                </div>

                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${domain.color}`} />

                <div className="p-5">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-white font-bold text-base mb-1 leading-tight">{domain.title}</h3>
                  <p className="text-gray-500 text-xs mb-3 leading-relaxed line-clamp-2">{domain.desc}</p>

                  {/* Duration badge */}
                  <div className="flex items-center gap-1 mb-3">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-medium">{domain.duration}</span>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {domain.skills.map(skill => (
                      <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Apply button */}
                  <button
                    className={`w-full py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${domain.color} opacity-80 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-1.5`}
                    onClick={(e) => { e.stopPropagation(); openApply(domain); }}
                  >
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Apply Modal */}
      <AnimatePresence>
        {selectedDomain && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-[#0d1120] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${selectedDomain.color} rounded-t-2xl`} />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedDomain.color} flex items-center justify-center`}>
                      <selectedDomain.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">Apply for Internship</h3>
                      <p className="text-cyan-400 text-sm">{selectedDomain.title}</p>
                    </div>
                  </div>
                  <button onClick={closeModal} className="text-gray-500 hover:text-white transition-colors p-1">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Success state */}
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${selectedDomain.color} flex items-center justify-center mx-auto mb-4`}>
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-white font-bold text-xl mb-2">Application Submitted!</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Thank you for applying to the <strong className="text-white">{selectedDomain.title}</strong> internship.
                    </p>
                    <p className="text-gray-500 text-xs mb-6">
                      Our team will review your application and reach out at <span className="text-cyan-400">{formData.email}</span> within 2–3 business days.
                    </p>
                    <button
                      onClick={closeModal}
                      className={`px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${selectedDomain.color} hover:opacity-90 transition-opacity`}
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label className="text-gray-300 text-xs mb-1.5 block">Full Name *</Label>
                        <Input
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={e => handleChange("name", e.target.value)}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30 rounded-xl h-10 text-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-300 text-xs mb-1.5 block">Email Address *</Label>
                        <Input
                          required
                          type="email"
                          placeholder="you@email.com"
                          value={formData.email}
                          onChange={e => handleChange("email", e.target.value)}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30 rounded-xl h-10 text-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-300 text-xs mb-1.5 block">Phone Number *</Label>
                        <Input
                          required
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={e => handleChange("phone", e.target.value)}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30 rounded-xl h-10 text-sm"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label className="text-gray-300 text-xs mb-1.5 block">College / University *</Label>
                        <Input
                          required
                          placeholder="Your institution name"
                          value={formData.college}
                          onChange={e => handleChange("college", e.target.value)}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30 rounded-xl h-10 text-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-300 text-xs mb-1.5 block">Year of Study *</Label>
                        <Select onValueChange={v => handleChange("year", v)} required>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl h-10 text-sm focus:border-white/30">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#111827] border-white/10 text-white">
                            {["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate / Post-Graduate"].map(y => (
                              <SelectItem key={y} value={y} className="hover:bg-white/5">{y}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-gray-300 text-xs mb-1.5 block">Internship Domain</Label>
                        <Input
                          readOnly
                          value={selectedDomain.title}
                          className="bg-white/5 border-white/10 text-cyan-400 rounded-xl h-10 text-sm cursor-not-allowed"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label className="text-gray-300 text-xs mb-1.5 block">Your Skills / Tech Stack *</Label>
                        <Input
                          required
                          placeholder="e.g. Python, React, SQL, Git..."
                          value={formData.skills}
                          onChange={e => handleChange("skills", e.target.value)}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30 rounded-xl h-10 text-sm"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label className="text-gray-300 text-xs mb-1.5 block">Why this internship? (Optional)</Label>
                        <Textarea
                          placeholder="Tell us about your goals and why you want this internship..."
                          value={formData.message}
                          onChange={e => handleChange("message", e.target.value)}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30 rounded-xl text-sm resize-none"
                          rows={3}
                        />
                      </div>
                    </div>

                    {error && (
                      <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-xl px-3 py-2">
                        {error}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={submitting}
                      className={`w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${selectedDomain.color} hover:opacity-90 transition-opacity h-11`}
                    >
                      {submitting ? (
                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...</>
                      ) : (
                        <>Submit Application <ArrowRight className="w-4 h-4 ml-2" /></>
                      )}
                    </Button>

                    <p className="text-center text-gray-600 text-xs">
                      Your application will be sent to{" "}
                      <span className="text-gray-400">info@nexgenbrtechnologies.com</span>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
