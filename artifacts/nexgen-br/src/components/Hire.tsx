import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  CheckCircle2, Building2, GraduationCap, UserCheck, Send, Loader2,
  Upload, FileText, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const tabs = [
  { id: "company", label: "Hire Our Talent",      icon: Building2    },
  { id: "trainer", label: "Apply as Trainer",      icon: UserCheck    },
  { id: "student", label: "Student / Fresher Apply", icon: GraduationCap },
];

const skillOptions = {
  trainer: [
    "Python", "JavaScript / TypeScript", "React / Next.js", "Node.js / Express",
    "Data Science", "Machine Learning", "Deep Learning / NLP", "SQL / PostgreSQL",
    "Power BI / Tableau", "AWS / Azure / GCP", "Docker / Kubernetes", "Java / Spring Boot",
    "Cyber Security", "DevOps / CI-CD", "UI/UX Design", "Android / Flutter",
  ],
  student: [
    "HTML / CSS", "JavaScript", "Python", "Java", "React",
    "Data Analysis", "Machine Learning", "SQL", "Power BI",
    "Cloud Basics", "Git / GitHub", "Linux Basics", "C / C++", "Android",
  ],
};

const domainOptions = [
  "Web Development", "Python Programming", "Java Development",
  "Data Science", "Machine Learning", "Artificial Intelligence",
  "Data Analytics", "Cloud Computing", "DevOps", "Cyber Security",
];

const inputCls = "bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-400 rounded-xl h-11";

// ── File upload hook ────────────────────────────────────────────────
function useResumeUpload() {
  const [resumeFile, setResumeFile]     = useState<File | null>(null);
  const [resumeBase64, setResumeBase64] = useState("");
  const [resumeError, setResumeError]   = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setResumeError("File size must be under 5 MB");
      return;
    }
    setResumeError("");
    setResumeFile(file);
    const reader = new FileReader();
    reader.onload = () => setResumeBase64(reader.result as string);
    reader.readAsDataURL(file);
  };

  const clearFile = () => {
    setResumeFile(null);
    setResumeBase64("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return { resumeFile, resumeBase64, resumeError, inputRef, onFileChange, clearFile };
}

// ── Skill checkboxes ────────────────────────────────────────────────
function SkillCheckboxes({ options, selected, onToggle, accent = "blue" }: {
  options: string[];
  selected: string[];
  onToggle: (skill: string) => void;
  accent?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(skill => {
        const active = selected.includes(skill);
        return (
          <button
            key={skill}
            type="button"
            onClick={() => onToggle(skill)}
            className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-150 ${
              active
                ? accent === "cyan"
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                  : "bg-blue-500/20 border-blue-400 text-blue-300"
                : "bg-white/5 border-white/10 text-gray-400 hover:border-white/25 hover:text-white"
            }`}
          >
            {active ? "✓ " : ""}{skill}
          </button>
        );
      })}
    </div>
  );
}

// ── Resume Upload UI ────────────────────────────────────────────────
function ResumeUpload({ label = "Upload Resume (PDF / DOC)", accent = "blue", ...hook }: ReturnType<typeof useResumeUpload> & { label?: string; accent?: string }) {
  const borderColor = accent === "cyan" ? "border-cyan-500/30 hover:border-cyan-400/60" : "border-blue-500/30 hover:border-blue-400/60";
  const iconColor   = accent === "cyan" ? "text-cyan-400" : "text-blue-400";
  const btnColor    = accent === "cyan" ? "text-cyan-400" : "text-blue-400";

  return (
    <div>
      <label className="text-sm font-medium text-gray-300 mb-1.5 block">{label}</label>
      {hook.resumeFile ? (
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
          <FileText className={`w-5 h-5 flex-shrink-0 ${iconColor}`} />
          <span className="text-white text-sm flex-1 truncate">{hook.resumeFile.name}</span>
          <span className="text-gray-500 text-xs">{(hook.resumeFile.size / 1024).toFixed(0)} KB</span>
          <button type="button" onClick={hook.clearFile} className="text-gray-500 hover:text-red-400 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => hook.inputRef.current?.click()}
          className={`w-full flex items-center justify-center gap-2 bg-white/5 border-2 border-dashed ${borderColor} rounded-xl px-4 py-5 transition-colors cursor-pointer group`}
        >
          <Upload className={`w-5 h-5 ${btnColor} group-hover:scale-110 transition-transform`} />
          <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
            Click to upload resume / CV
          </span>
          <span className="text-gray-600 text-xs">PDF, DOC, DOCX — max 5 MB</span>
        </button>
      )}
      {hook.resumeError && <p className="text-red-400 text-xs mt-1">{hook.resumeError}</p>}
      <input
        ref={hook.inputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={hook.onFileChange}
        className="hidden"
      />
    </div>
  );
}

// ── Company Tab ────────────────────────────────────────────────────
function CompanyTab() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-5">
          Hire <span className="text-gradient">NexGen Talent</span>
        </h3>
        <p className="text-gray-400 text-lg mb-7">
          Our graduates are not just trained in theory. They have built full-stack applications,
          understand version control, agile methodologies, and are ready to contribute from day one.
        </p>
        <div className="space-y-3 mb-8">
          {[
            "Pre-screened & technically vetted candidates",
            "Zero hiring fees for partner companies",
            "Candidates with real production experience",
            "Available for immediate joining",
            "Profiles across Web Dev, Data, AI/ML, Cloud, DevOps",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
        <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8 font-bold">
          Become a Hiring Partner &rarr;
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="grid grid-cols-2 gap-4"
      >
        {[
          { val: "150+", label: "Companies Hiring" },
          { val: "85%",  label: "Placement Rate"   },
          { val: "4.8★", label: "Employer Rating"  },
          { val: "₹0",   label: "Hiring Fees"      },
        ].map((s, i) => (
          <div
            key={i}
            className={`bg-[#111827]/80 border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center ${
              i === 1 ? "translate-y-6" : i === 2 ? "-translate-y-3" : i === 3 ? "translate-y-3" : ""
            }`}
          >
            <span className="text-4xl font-black text-white mb-1">{s.val}</span>
            <span className="text-sm text-gray-400">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ── Trainer Form ───────────────────────────────────────────────────
function TrainerForm() {
  const [skills, setSkills] = useState<string[]>([]);
  const [form, setForm]     = useState({ name: "", email: "", phone: "", experience: "", linkedin: "", portfolio: "", bio: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState("");
  const resume = useResumeUpload();

  const toggleSkill = (skill: string) =>
    setSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/hire/trainer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          skills: skills.join(", "),
          resumeBase64: resume.resumeBase64 || undefined,
          resumeFileName: resume.resumeFile?.name || undefined,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Application Submitted! 🎉</h3>
        <p className="text-gray-400">
          Thank you for applying as a trainer. Our team will review your profile and get in touch within 2–3 business days.
        </p>
        <p className="text-gray-600 text-sm mt-2">A copy has been forwarded to info@nexgenbrtechnologies.com</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-300 mb-1.5 block">Full Name *</label>
          <Input required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
            placeholder="Rahul Sharma" className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 mb-1.5 block">Email *</label>
          <Input required type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
            placeholder="rahul@gmail.com" className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 mb-1.5 block">Phone *</label>
          <Input required value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))}
            placeholder="+91 9876543210" className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 mb-1.5 block">Years of Experience *</label>
          <Input required value={form.experience} onChange={e => setForm(f => ({...f, experience: e.target.value}))}
            placeholder="e.g. 3 years at Infosys" className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 mb-1.5 block">LinkedIn Profile</label>
          <Input value={form.linkedin} onChange={e => setForm(f => ({...f, linkedin: e.target.value}))}
            placeholder="linkedin.com/in/yourprofile" className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 mb-1.5 block">Portfolio / GitHub</label>
          <Input value={form.portfolio} onChange={e => setForm(f => ({...f, portfolio: e.target.value}))}
            placeholder="github.com/yourprofile" className={inputCls} />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-300 mb-2 block">Skills / Subjects You Can Teach *</label>
        <SkillCheckboxes options={skillOptions.trainer} selected={skills} onToggle={toggleSkill} />
        {skills.length > 0 && <p className="text-xs text-blue-400 mt-2">{skills.length} skill(s) selected</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-gray-300 mb-1.5 block">Short Bio / Why You Want to Teach *</label>
        <Textarea required value={form.bio} onChange={e => setForm(f => ({...f, bio: e.target.value}))}
          placeholder="Tell us about your background and teaching experience..."
          className="min-h-[90px] bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-400 rounded-xl" />
      </div>

      <ResumeUpload label="Upload Your Resume / CV *" accent="blue" {...resume} />

      {error && <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-3 py-2">{error}</p>}

      <Button
        type="submit"
        disabled={loading || skills.length === 0}
        className="w-full bg-gradient-primary text-white font-bold py-5 rounded-xl hover-glow hover:opacity-90"
      >
        {loading
          ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting…</>
          : <><Send className="w-4 h-4 mr-2" /> Submit Trainer Application</>}
      </Button>
      <p className="text-center text-gray-600 text-xs">
        Your application will be sent to <span className="text-gray-400">info@nexgenbrtechnologies.com</span>
      </p>
    </form>
  );
}

// ── Student Form ───────────────────────────────────────────────────
function StudentForm() {
  const [skills, setSkills] = useState<string[]>([]);
  const [form, setForm]     = useState({ name: "", email: "", phone: "", college: "", year: "", domain: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState("");
  const resume = useResumeUpload();

  const toggleSkill = (skill: string) =>
    setSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/hire/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          skills: skills.join(", "),
          resumeBase64: resume.resumeBase64 || undefined,
          resumeFileName: resume.resumeFile?.name || undefined,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Application Received! 🎉</h3>
        <p className="text-gray-400">We've received your application. Our team will reach out within 24–48 hours.</p>
        <p className="text-gray-600 text-sm mt-2">A copy has been forwarded to info@nexgenbrtechnologies.com</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-300 mb-1.5 block">Full Name *</label>
          <Input required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
            placeholder="Priya Deshmukh" className={inputCls.replace("blue", "cyan")} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 mb-1.5 block">Email *</label>
          <Input required type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
            placeholder="priya@gmail.com" className={inputCls.replace("blue", "cyan")} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 mb-1.5 block">Phone *</label>
          <Input required value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))}
            placeholder="+91 9123456789" className={inputCls.replace("blue", "cyan")} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 mb-1.5 block">College / University *</label>
          <Input required value={form.college} onChange={e => setForm(f => ({...f, college: e.target.value}))}
            placeholder="RTM Nagpur University" className={inputCls.replace("blue", "cyan")} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 mb-1.5 block">Year of Study *</label>
          <select required value={form.year} onChange={e => setForm(f => ({...f, year: e.target.value}))}
            className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white px-3 text-sm focus:outline-none focus:border-cyan-400">
            <option value="" className="bg-gray-900">Select year</option>
            {["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate / Fresher", "Working Professional"].map(y => (
              <option key={y} value={y} className="bg-gray-900">{y}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 mb-1.5 block">Domain of Interest *</label>
          <select required value={form.domain} onChange={e => setForm(f => ({...f, domain: e.target.value}))}
            className="w-full h-11 rounded-xl bg-white/5 border border-white/10 text-white px-3 text-sm focus:outline-none focus:border-cyan-400">
            <option value="" className="bg-gray-900">Select domain</option>
            {domainOptions.map(d => (
              <option key={d} value={d} className="bg-gray-900">{d}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-300 mb-2 block">Skills You Already Know</label>
        <SkillCheckboxes options={skillOptions.student} selected={skills} onToggle={toggleSkill} accent="cyan" />
        {skills.length > 0 && <p className="text-xs text-cyan-400 mt-2">{skills.length} skill(s) selected</p>}
      </div>

      <ResumeUpload label="Upload Your Resume (if any)" accent="cyan" {...resume} />

      <div>
        <label className="text-sm font-medium text-gray-300 mb-1.5 block">Why do you want to join NexGen?</label>
        <Textarea value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
          placeholder="Tell us about your goals, what you want to learn, and why NexGen..."
          className="min-h-[90px] bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-400 rounded-xl" />
      </div>

      {error && <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-3 py-2">{error}</p>}

      <Button type="submit" disabled={loading} className="w-full bg-gradient-primary text-white font-bold py-5 rounded-xl hover-glow hover:opacity-90">
        {loading
          ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting…</>
          : <><Send className="w-4 h-4 mr-2" /> Submit Application</>}
      </Button>
      <p className="text-center text-gray-600 text-xs">
        Your application will be sent to <span className="text-gray-400">info@nexgenbrtechnologies.com</span>
      </p>
    </form>
  );
}

// ── Main Export ────────────────────────────────────────────────────
export function Hire() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <section id="hire" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1a] via-[#0e1225] to-[#0a0d1a] z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-purple-400/20 bg-purple-400/5">
            Hire / Apply
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Join the <span className="text-gradient">NexGen Ecosystem</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Whether you want to hire our graduates, become a trainer, or apply as a student — this is your starting point.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-black border-white"
                    : "bg-white/5 text-gray-300 border-white/10 hover:border-white/25 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" /> {tab.label}
              </button>
            );
          })}
        </div>

        <div className="bg-[#111827]/60 border border-white/5 rounded-3xl p-8 md:p-12">
          {activeTab === "company" && <CompanyTab />}
          {activeTab === "trainer" && (
            <motion.div key="trainer" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Apply as a <span className="text-gradient">Trainer</span></h3>
                <p className="text-gray-400">Share your expertise with the next generation. We're looking for passionate working professionals to mentor our students.</p>
              </div>
              <TrainerForm />
            </motion.div>
          )}
          {activeTab === "student" && (
            <motion.div key="student" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Student / <span className="text-gradient">Fresher Apply</span></h3>
                <p className="text-gray-400">Ready to start your tech journey? Fill in your details and we'll get you into the right program.</p>
              </div>
              <StudentForm />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
