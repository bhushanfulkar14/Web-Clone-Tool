import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const categories = ["All", "Career Guidance", "AI & ML Tutorial", "Data Science Tips", "Interview Prep"];

const categoryColors: Record<string, string> = {
  "Career Guidance": "text-emerald-400",
  "AI & ML Tutorial": "text-cyan-400",
  "Data Science Tips": "text-blue-400",
  "Interview Prep": "text-violet-400",
};

function InterviewSVG() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0d1a12" />
      <defs>
        <radialGradient id="glowI" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0d1a12" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="110" rx="130" ry="80" fill="url(#glowI)" />
      <rect x="60" y="40" width="280" height="160" rx="12" fill="#0f1e16" stroke="#10b981" strokeWidth="1.5" strokeDasharray="6 3" />
      <rect x="80" y="60" width="240" height="22" rx="5" fill="#10b98115" />
      <text x="90" y="75" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold">INTERVIEW QUESTION BANK · DATA SCIENCE</text>
      {[
        { q: "Explain overfitting & regularization techniques", tag: "ML Core", c: "#10b981" },
        { q: "Write SQL to find top-5 revenue customers", tag: "SQL", c: "#3b82f6" },
        { q: "What is the bias-variance tradeoff?", tag: "Theory", c: "#a855f7" },
        { q: "How does gradient descent work?", tag: "Optimization", c: "#f59e0b" },
        { q: "Implement a simple linear regression in Python", tag: "Coding", c: "#06b6d4" },
      ].map((q, i) => (
        <g key={i}>
          <rect x="80" y={92 + i * 22} width="240" height="18" rx="4" fill={i % 2 === 0 ? "#ffffff05" : "#ffffff08"} />
          <text x="88" y={104 + i * 22} fill="#d1d5db" fontSize="7.5" fontFamily="monospace">{q.q}</text>
          <rect x="282" y={94 + i * 22} width="34" height="13" rx="3" fill={q.c + "25"} />
          <text x="299" y={104 + i * 22} textAnchor="middle" fill={q.c} fontSize="6" fontFamily="monospace">{q.tag}</text>
        </g>
      ))}
      <rect x="80" y="205" width="80" height="12" rx="3" fill="#10b981" />
      <text x="120" y="214" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="monospace" fontWeight="bold">Featured ★</text>
    </svg>
  );
}

function TransformerSVG() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0a0d1a" />
      <defs>
        <radialGradient id="brainB" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0a0d1a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="110" rx="120" ry="90" fill="url(#brainB)" />
      <circle cx="200" cy="110" r="35" fill="#110a2e" stroke="#7c3aed" strokeWidth="2.5" />
      <text x="200" y="106" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace" fontWeight="bold">ATTENTION</text>
      <text x="200" y="118" textAnchor="middle" fill="#7c3aed" fontSize="8" fontFamily="monospace">MECHANISM</text>
      {[{x:55,y:50},{x:55,y:110},{x:55,y:170},{x:345,y:50},{x:345,y:110},{x:345,y:170}].map((n,i)=>(
        <g key={i}>
          <line x1={i<3?n.x+22:n.x-22} y1={n.y} x2={i<3?165:235} y2="110" stroke="#7c3aed" strokeWidth="1" opacity="0.5" strokeDasharray="4 3" />
          <rect x={i<3?n.x-20:n.x-20} y={n.y-12} width="40" height="22" rx="6" fill="#1e1040" stroke="#6d28d9" strokeWidth="1.2" />
          <text x={n.x} y={n.y+4} textAnchor="middle" fill="#c4b5fd" fontSize="6.5" fontFamily="monospace">{["Query","Key","Value","Enc-1","Enc-2","Output"][i]}</text>
        </g>
      ))}
      <text x="200" y="210" textAnchor="middle" fill="#6d28d9" fontSize="7.5" fontFamily="monospace">Self-Attention · Multi-Head · Positional Encoding</text>
    </svg>
  );
}

function PowerBISVG() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0a1628" />
      <rect x="0" y="0" width="400" height="30" fill="#111f3a" />
      <text x="16" y="20" fill="#3b82f6" fontSize="9" fontFamily="monospace" fontWeight="bold">Power BI · USERS: LAST 7 DAYS USING MEDIAN ∨</text>
      <defs>
        <linearGradient id="b1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#1e3a8a" /></linearGradient>
        <linearGradient id="b2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#0e7490" /></linearGradient>
      </defs>
      {[{x:20,h:70,h2:30},{x:50,h:110,h2:50},{x:80,h:55,h2:25},{x:110,h:130,h2:70},{x:140,h:85,h2:40},{x:170,h:120,h2:55}].map((b,i)=>(
        <g key={i}>
          <rect x={b.x} y={175-b.h} width="22" height={b.h} rx="3" fill="url(#b1)" />
          <rect x={b.x} y={175-b.h-b.h2} width="22" height={b.h2} rx="3" fill="url(#b2)" opacity="0.8" />
        </g>
      ))}
      <polyline points="31,90 61,55 91,110 121,30 151,70 181,42" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      {[{x:31,y:90},{x:61,y:55},{x:91,y:110},{x:121,y:30},{x:151,y:70},{x:181,y:42}].map((p,i)=>(
        <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="#f59e0b" stroke="#0a1628" strokeWidth="1.5" />
      ))}
      {[{v:"6.1k",l:"Users",x:220,y:55},{v:"2.7M",l:"Sessions",x:290,y:55},{v:"40.6%",l:"Bounce",x:360,y:55},{v:"478K",l:"Events",x:220,y:100},{v:"17min",l:"Avg Time",x:290,y:100},{v:"2pva",l:"Per Visit",x:360,y:100}].map((s,i)=>(
        <g key={i}>
          <rect x={s.x-30} y={s.y-20} width="58" height="34" rx="5" fill="#ffffff08" stroke="#ffffff10" strokeWidth="1" />
          <text x={s.x-1} y={s.y-4} textAnchor="middle" fill="#93c5fd" fontSize="10" fontFamily="monospace" fontWeight="bold">{s.v}</text>
          <text x={s.x-1} y={s.y+10} textAnchor="middle" fill="#64748b" fontSize="6.5" fontFamily="monospace">{s.l}</text>
        </g>
      ))}
      <line x1="15" y1="175" x2="210" y2="175" stroke="#ffffff15" strokeWidth="1" />
      <text x="200" y="210" textAnchor="middle" fill="#1d4ed8" fontSize="7.5" fontFamily="monospace">DAX · Power Query · Storytelling · Optimization</text>
    </svg>
  );
}

function FAASVGComp() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0d0a1a" />
      <defs>
        <linearGradient id="roadG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <text x="200" y="20" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="monospace" fontWeight="bold">FAANG INTERVIEW ROADMAP · INDIAN EDITION</text>
      {[
        {x:40,y:55,label:"Month 1",sub:"DSA Basics",c:"#7c3aed"},
        {x:120,y:55,label:"Month 2",sub:"Advanced DS",c:"#8b5cf6"},
        {x:200,y:55,label:"Month 3",sub:"System Design",c:"#6366f1"},
        {x:280,y:55,label:"Month 4",sub:"Mock Rounds",c:"#3b82f6"},
        {x:360,y:55,label:"Month 5",sub:"Offer Stage",c:"#06b6d4"},
      ].map((m,i,arr)=>(
        <g key={i}>
          {i<arr.length-1 && <line x1={m.x+16} y1={m.y} x2={arr[i+1].x-16} y2={arr[i+1].y} stroke="url(#roadG)" strokeWidth="2" />}
          <circle cx={m.x} cy={m.y} r="16" fill={m.c} fillOpacity="0.2" stroke={m.c} strokeWidth="2" />
          <text x={m.x} y={m.y+4} textAnchor="middle" fill={m.c} fontSize="8" fontFamily="monospace" fontWeight="bold">{i+1}</text>
          <text x={m.x} y={m.y+28} textAnchor="middle" fill="#9ca3af" fontSize="6.5" fontFamily="monospace">{m.label}</text>
          <text x={m.x} y={m.y+38} textAnchor="middle" fill="#d1d5db" fontSize="6.5" fontFamily="monospace" fontWeight="bold">{m.sub}</text>
        </g>
      ))}
      {[
        {t:"Arrays & Hashing",x:40,y:115,c:"#7c3aed"},{t:"Trees & Graphs",x:120,y:115,c:"#8b5cf6"},
        {t:"LLD / HLD",x:200,y:115,c:"#6366f1"},{t:"Behavioral",x:280,y:115,c:"#3b82f6"},
        {t:"Negotiation",x:360,y:115,c:"#06b6d4"},
        {t:"DP & Backtrack",x:40,y:145,c:"#7c3aed40"},{t:"Recursion",x:120,y:145,c:"#8b5cf640"},
        {t:"Caching & CDN",x:200,y:145,c:"#6366f140"},{t:"STAR Stories",x:280,y:145,c:"#3b82f640"},
        {t:"Offer Compare",x:360,y:145,c:"#06b6d440"},
      ].map((t,i)=>(
        <g key={i}>
          <rect x={t.x-34} y={t.y-10} width="68" height="16" rx="4" fill={t.c} />
          <text x={t.x} y={t.y+3} textAnchor="middle" fill="#fff" fontSize="6" fontFamily="monospace">{t.t}</text>
        </g>
      ))}
      <rect x="80" y="170" width="240" height="28" rx="8" fill="#1e1040" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="200" y="181" textAnchor="middle" fill="#c4b5fd" fontSize="7" fontFamily="monospace">Target: Google · Amazon · Microsoft · Flipkart · Paytm</text>
      <text x="200" y="193" textAnchor="middle" fill="#7c3aed" fontSize="7" fontFamily="monospace">11-month plan · 400+ problems · 50+ mock rounds</text>
    </svg>
  );
}

function ExcelPythonSVG() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0a1a10" />
      <rect x="20" y="30" width="160" height="150" rx="8" fill="#0d2b14" stroke="#22c55e" strokeWidth="1.5" />
      <rect x="20" y="30" width="160" height="25" rx="8" fill="#16a34a30" />
      <text x="100" y="47" textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="monospace" fontWeight="bold">Excel Workbook</text>
      {["A","B","C","D"].map((col,i)=>(
        <text key={col} x={38+i*35} y={68} fill="#4ade8060" fontSize="7" fontFamily="monospace">{col}</text>
      ))}
      {[1,2,3,4,5].map(row=>(
        <g key={row}>
          {[0,1,2,3].map(col=>(
            <rect key={col} x={26+col*35} y={70+row*18} width="32" height="15" fill={row%2===0?"#ffffff05":"#ffffff08"} stroke="#ffffff08" strokeWidth="0.5" />
          ))}
          <text x={29} y={81+row*18} fill="#86efac" fontSize="6" fontFamily="monospace">{["Sales","Revenue","Units","Growth","Target"][row-1]}</text>
          <text x={64} y={81+row*18} fill="#d1d5db" fontSize="6" fontFamily="monospace">{["4523","₹2.1L","3271","18%","5000"][row-1]}</text>
        </g>
      ))}
      <text x="100" y="195" textAnchor="middle" fill="#16a34a" fontSize="7" fontFamily="monospace">manual · slow · no automation</text>
      <text x="200" y="120" textAnchor="middle" fill="#f59e0b" fontSize="20" fontFamily="monospace">→</text>
      <text x="200" y="135" textAnchor="middle" fill="#f59e0b" fontSize="6.5" fontFamily="monospace">30 Days</text>
      <rect x="220" y="30" width="160" height="150" rx="8" fill="#0d1117" stroke="#3b82f6" strokeWidth="1.5" />
      <rect x="220" y="30" width="160" height="25" rx="8" fill="#1e3a8a30" />
      <text x="300" y="47" textAnchor="middle" fill="#60a5fa" fontSize="8" fontFamily="monospace" fontWeight="bold">Python Script</text>
      {[
        {c:"#ff79c6",t:"import pandas as pd"},{c:"#ff79c6",t:"import matplotlib.pyplot as plt"},
        {c:"#8b949e",t:"# Load and analyze data"},
        {c:"#79c0ff",t:"df = pd.read_csv('sales.csv')"},
        {c:"#79c0ff",t:"summary = df.groupby('Region')"},
        {c:"#d2a8ff",t:"    .agg({'Sales': 'sum'})"},
        {c:"#79c0ff",t:"df.plot(kind='bar', title='Sales')"},
        {c:"#28c840",t:"# 94% faster · fully automated"},
      ].map((l,i)=>(
        <text key={i} x={228} y={68+i*14} fill={l.c} fontSize="6.5" fontFamily="monospace">{l.t}</text>
      ))}
      <text x="300" y="195" textAnchor="middle" fill="#1d4ed8" fontSize="7" fontFamily="monospace">automated · scalable · production-ready</text>
    </svg>
  );
}

function ResumeSVG() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0f0a1e" />
      <rect x="60" y="20" width="280" height="180" rx="10" fill="#1a1030" stroke="#a855f7" strokeWidth="1.5" />
      <rect x="60" y="20" width="280" height="40" rx="10" fill="#2d1f5e" />
      <rect x="60" y="50" width="280" height="10" fill="#2d1f5e" />
      <text x="200" y="38" textAnchor="middle" fill="#e9d5ff" fontSize="11" fontFamily="monospace" fontWeight="bold">Rajesh Kumar</text>
      <text x="200" y="53" textAnchor="middle" fill="#a855f7" fontSize="7.5" fontFamily="monospace">Full Stack Developer | Python | React | ML</text>
      <rect x="75" y="72" width="75" height="10" rx="3" fill="#a855f720" />
      <text x="112" y="81" textAnchor="middle" fill="#c084fc" fontSize="7" fontFamily="monospace" fontWeight="bold">EXPERIENCE</text>
      <rect x="75" y="87" width="250" height="16" rx="3" fill="#ffffff06" />
      <text x="82" y="98" fill="#d1d5db" fontSize="6.5" fontFamily="monospace">• Built ML pipeline reducing inference time by 40% using Python+FastAPI</text>
      <rect x="75" y="108" width="250" height="16" rx="3" fill="#ffffff06" />
      <text x="82" y="119" fill="#d1d5db" fontSize="6.5" fontFamily="monospace">• Developed React dashboard serving 10K+ users, 99.9% uptime</text>
      <rect x="75" y="132" width="75" height="10" rx="3" fill="#a855f720" />
      <text x="112" y="141" textAnchor="middle" fill="#c084fc" fontSize="7" fontFamily="monospace" fontWeight="bold">PROJECTS</text>
      {["AutoQ — ML Question Generator · 5K+ papers, 92% accuracy",
        "Stock Portfolio Tracker · Real-time WebSocket, 15K users"].map((p,i)=>(
        <text key={i} x="82" y={155+i*13} fill="#9ca3af" fontSize="6.5" fontFamily="monospace">• {p}</text>
      ))}
      <rect x="75" y="183" width="250" height="14" rx="4" fill="#7c3aed30" />
      {["TCS ✓","Infosys ✓","Wipro ✓","Accenture ✓"].map((co,i)=>(
        <text key={i} x={90+i*60} y={193} fill="#a78bfa" fontSize="7" fontFamily="monospace" fontWeight="bold">{co}</text>
      ))}
    </svg>
  );
}

const posts = [
  {
    category: "Career Guidance",
    featured: true,
    title: "How to Crack Your First Data Science Interview in 2026",
    snippet: "A field-tested playbook covering DSA, ML fundamentals, SQL, and behavioral rounds.",
    date: "Feb 10, 2026",
    readTime: "6 min",
    Visual: InterviewSVG,
  },
  {
    category: "AI & ML Tutorial",
    featured: false,
    title: "Transformers Explained: From Attention to Production",
    snippet: "Demystifying self-attention with intuitive analogies, code, and deployment patterns.",
    date: "Feb 04, 2026",
    readTime: "9 min",
    Visual: TransformerSVG,
  },
  {
    category: "Data Science Tips",
    featured: false,
    title: "5 Power BI Tricks Senior Analysts Use Daily",
    snippet: "DAX shortcuts, performance tuning, and dashboard storytelling techniques.",
    date: "Jan 28, 2026",
    readTime: "5 min",
    Visual: PowerBISVG,
  },
  {
    category: "Interview Prep",
    featured: false,
    title: "FAANG Interview Roadmap (Indian Edition)",
    snippet: "Month-by-month plan blending DSA, system design, and storytelling for interviews.",
    date: "Jan 21, 2026",
    readTime: "11 min",
    Visual: FAASVGComp,
  },
  {
    category: "Data Science Tips",
    featured: false,
    title: "From Excel to Python: A 30-Day Migration Plan",
    snippet: "How to transition smoothly from spreadsheet workflows to Python data analysis.",
    date: "Jan 12, 2026",
    readTime: "7 min",
    Visual: ExcelPythonSVG,
  },
  {
    category: "Career Guidance",
    featured: false,
    title: "Resume Hacks That Got Our Students Interviews at TCS, Infosys & Wipro",
    snippet: "Concrete bullet-point patterns, project framing, and ATS-friendly templates.",
    date: "Jan 03, 2026",
    readTime: "4 min",
    Visual: ResumeSVG,
  },
];

export function Blog() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter(p => p.category === active);

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1a] via-[#0d1120] to-[#0a0d1a] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            Blog
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Stay Updated with the <span className="text-gradient">Latest in Tech</span>
              </h2>
              <p className="text-gray-400 text-base max-w-xl">
                Tutorials, career guidance, interview prep, and industry insights — written by our mentors and students.
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm flex-shrink-0">
              View All Posts <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                active === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => {
            const { Visual } = post;
            return (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer bg-[#111827]/80 border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300 flex flex-col"
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.4)" }}
              >
                {/* Thumbnail */}
                <div className="h-48 overflow-hidden relative flex-shrink-0">
                  <Visual />
                  {post.featured && (
                    <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <span className={`text-[10px] font-bold tracking-widest uppercase mb-3 ${categoryColors[post.category] ?? "text-gray-400"}`}>
                    {post.category}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                    {post.snippet}
                  </p>
                  <div className="flex items-center gap-4 text-gray-600 text-xs font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
