import { motion } from "framer-motion";
import { ExternalLink, Github, User } from "lucide-react";

const projects = [
  {
    category: "DATA ANALYTICS",
    categoryColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    title: "Zomato Data Analysis",
    desc: "Exploratory analysis of 50K+ Zomato listings, surfacing trends in cuisine, pricing, and ratings across Indian cities.",
    tags: ["Python", "Pandas", "Power BI", "Matplotlib"],
    student: "Aarav S.",
    color: "from-emerald-900/60 to-teal-900/40",
    accent: "#10b981",
    visual: (
      <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="url(#bg1)" />
        <defs>
          <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="bar1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[40, 80, 120, 160].map(y => (
          <line key={y} x1="30" y1={y} x2="370" y2={y} stroke="#ffffff08" strokeWidth="1" />
        ))}
        {/* Bars */}
        {[
          { x: 50, h: 90, w: 28 }, { x: 95, h: 120, w: 28 }, { x: 140, h: 65, w: 28 },
          { x: 185, h: 145, w: 28 }, { x: 230, h: 100, w: 28 }, { x: 275, h: 80, w: 28 },
          { x: 320, h: 130, w: 28 },
        ].map((b, i) => (
          <rect key={i} x={b.x} y={175 - b.h} width={b.w} height={b.h} rx="4" fill="url(#bar1)" opacity="0.85" />
        ))}
        {/* Line chart overlay */}
        <polyline points="64,100 109,72 154,140 199,45 244,88 289,110 334,60" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {[{x:64,y:100},{x:109,y:72},{x:154,y:140},{x:199,y:45},{x:244,y:88},{x:289,y:110},{x:334,y:60}].map((p,i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="#10b981" stroke="#0f172a" strokeWidth="2" />
        ))}
        {/* Labels */}
        <text x="20" y="15" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold">CUISINE TRENDS · LAST 7 CITIES</text>
        <text x="340" y="15" fill="#34d399" fontSize="8" fontFamily="monospace">50K+ rows</text>
        {/* Stats */}
        <rect x="30" y="178" width="50" height="14" rx="3" fill="#10b98120" />
        <text x="55" y="188" fill="#6ee7b7" fontSize="7" textAnchor="middle" fontFamily="monospace">3.7★ avg</text>
        <rect x="90" y="178" width="50" height="14" rx="3" fill="#10b98120" />
        <text x="115" y="188" fill="#6ee7b7" fontSize="7" textAnchor="middle" fontFamily="monospace">40.6% veg</text>
        <rect x="150" y="178" width="50" height="14" rx="3" fill="#10b98120" />
        <text x="175" y="188" fill="#6ee7b7" fontSize="7" textAnchor="middle" fontFamily="monospace">479K votes</text>
      </svg>
    ),
  },
  {
    category: "AI / NLP",
    categoryColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    title: "AI Symptom Checker Chatbot",
    desc: "Conversational health assistant fine-tuned on medical symptom datasets with safety guardrails and triage suggestions.",
    tags: ["Python", "Transformers", "FastAPI", "React"],
    student: "Priya M.",
    color: "from-violet-900/60 to-indigo-900/40",
    accent: "#8b5cf6",
    visual: (
      <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="url(#bg2)" />
        <defs>
          <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Glow */}
        <ellipse cx="200" cy="95" rx="85" ry="75" fill="url(#brainGlow)" />
        {/* Central brain node */}
        <circle cx="200" cy="95" r="30" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="2.5" />
        <text x="200" y="91" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold" fontFamily="monospace">GPT</text>
        <text x="200" y="103" textAnchor="middle" fill="#7c3aed" fontSize="8" fontFamily="monospace">HEALTH</text>
        {/* Connector nodes */}
        {[
          { cx: 90, cy: 55, label: "Symptoms" }, { cx: 90, cy: 135, label: "Triage" },
          { cx: 310, cy: 55, label: "Diagnosis" }, { cx: 310, cy: 135, label: "Reports" },
          { cx: 200, cy: 170, label: "DB" },
        ].map((n, i) => (
          <g key={i}>
            <line x1={n.cx} y1={n.cy} x2="200" y2="95" stroke="#7c3aed" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 3" />
            <rect x={n.cx - 28} y={n.cy - 12} width="56" height="22" rx="6" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1.5" opacity="0.8" />
            <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill="#c4b5fd" fontSize="7.5" fontFamily="monospace">{n.label}</text>
            <circle cx={n.cx} cy={n.cy} r="3" fill="#7c3aed" opacity="0.6" />
          </g>
        ))}
        {/* Accuracy badge */}
        <rect x="15" y="12" width="90" height="18" rx="4" fill="#7c3aed30" stroke="#7c3aed50" strokeWidth="1" />
        <text x="60" y="24" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace" fontWeight="bold">94.2% accuracy</text>
        <text x="340" y="14" fill="#7c3aed" fontSize="8" fontFamily="monospace">NLP Model</text>
      </svg>
    ),
  },
  {
    category: "BUSINESS INTELLIGENCE",
    categoryColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    title: "HR Analytics Dashboard",
    desc: "Attrition prediction + workforce KPI dashboard surfacing retention drivers across departments and demographics.",
    tags: ["Power BI", "DAX", "SQL", "Python"],
    student: "Rohan K.",
    color: "from-blue-900/60 to-slate-900/40",
    accent: "#3b82f6",
    visual: (
      <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="url(#bg3)" />
        <defs>
          <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="barBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        {/* KPI cards */}
        {[
          { x: 20, val: "87%", label: "Retention" }, { x: 120, val: "12.4%", label: "Attrition" },
          { x: 220, val: "4.2K", label: "Headcount" }, { x: 320, val: "78%", label: "Satisfaction" },
        ].map((k, i) => (
          <g key={i}>
            <rect x={k.x} y="10" width="88" height="38" rx="6" fill="#1e3a5f" stroke="#3b82f630" strokeWidth="1.5" />
            <text x={k.x + 44} y="30" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="bold" fontFamily="monospace">{k.val}</text>
            <text x={k.x + 44} y="42" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">{k.label}</text>
          </g>
        ))}
        {/* Grid */}
        {[70, 100, 130, 160].map(y => (
          <line key={y} x1="30" y1={y} x2="370" y2={y} stroke="#ffffff07" strokeWidth="1" />
        ))}
        {/* Stacked bars */}
        {[
          { x: 40, h1: 70, h2: 30 }, { x: 90, h1: 90, h2: 20 }, { x: 140, h1: 50, h2: 50 },
          { x: 190, h1: 110, h2: 15 }, { x: 240, h1: 75, h2: 35 }, { x: 290, h1: 95, h2: 25 },
          { x: 340, h1: 60, h2: 45 },
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={175 - b.h1} width="28" height={b.h1} rx="3" fill="url(#barBlue)" opacity="0.8" />
            <rect x={b.x} y={175 - b.h1 - b.h2} width="28" height={b.h2} rx="3" fill="#f59e0b" opacity="0.6" />
          </g>
        ))}
        <text x="20" y="195" fill="#3b82f6" fontSize="7" fontFamily="monospace">■ Retained</text>
        <text x="80" y="195" fill="#f59e0b" fontSize="7" fontFamily="monospace">■ Attrition Risk</text>
        <text x="330" y="195" fill="#64748b" fontSize="7" fontFamily="monospace">Dept →</text>
      </svg>
    ),
  },
  {
    category: "MACHINE LEARNING",
    categoryColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    title: "AutoQ — Automatic Question Paper Generator",
    desc: "ML-powered system that auto-generates syllabus-aligned question papers from topic inputs, with difficulty control and Bloom's taxonomy tagging.",
    tags: ["Python", "NLP", "scikit-learn", "Flask", "React"],
    student: "Sneha P.",
    color: "from-orange-900/60 to-amber-900/40",
    accent: "#f97316",
    visual: (
      <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="url(#bg4)" />
        <defs>
          <linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#431407" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        {/* Header */}
        <text x="16" y="16" fill="#f97316" fontSize="9" fontFamily="monospace" fontWeight="bold">AutoQ · QUESTION GENERATOR</text>
        <rect x="290" y="6" width="95" height="14" rx="4" fill="#f9731620" stroke="#f9731640" strokeWidth="1" />
        <text x="337" y="16" textAnchor="middle" fill="#fdba74" fontSize="7.5" fontFamily="monospace">ML-Powered ✦</text>

        {/* Input panel */}
        <rect x="16" y="24" width="170" height="80" rx="7" fill="#1c0c00" stroke="#f9731630" strokeWidth="1.5" />
        <text x="26" y="37" fill="#fb923c" fontSize="7.5" fontFamily="monospace" fontWeight="bold">INPUT</text>
        <rect x="26" y="42" width="150" height="12" rx="3" fill="#f9731615" />
        <text x="31" y="51" fill="#94a3b8" fontSize="7" fontFamily="monospace">Topic: Machine Learning</text>
        <rect x="26" y="58" width="150" height="12" rx="3" fill="#f9731615" />
        <text x="31" y="67" fill="#94a3b8" fontSize="7" fontFamily="monospace">Difficulty: Medium</text>
        <rect x="26" y="74" width="150" height="12" rx="3" fill="#f9731615" />
        <text x="31" y="83" fill="#94a3b8" fontSize="7" fontFamily="monospace">Questions: 10 · Marks: 50</text>
        <rect x="26" y="90" width="70" height="11" rx="3" fill="#f97316" />
        <text x="61" y="99" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="monospace" fontWeight="bold">Generate →</text>

        {/* Arrow */}
        <line x1="192" y1="64" x2="210" y2="64" stroke="#f97316" strokeWidth="2" />
        <polygon points="210,60 218,64 210,68" fill="#f97316" />

        {/* Output panel */}
        <rect x="216" y="24" width="168" height="120" rx="7" fill="#1c0c00" stroke="#f9731630" strokeWidth="1.5" />
        <text x="226" y="37" fill="#fb923c" fontSize="7.5" fontFamily="monospace" fontWeight="bold">GENERATED PAPER</text>
        {[
          { q: "Q1. [Remember] Define overfitting.", m: "2M", color: "#86efac" },
          { q: "Q2. [Apply] Implement k-NN.", m: "5M", color: "#fde68a" },
          { q: "Q3. [Analyze] Compare SVM vs RF.", m: "8M", color: "#f9a8d4" },
          { q: "Q4. [Evaluate] Bias-variance tradeoff.", m: "10M", color: "#93c5fd" },
        ].map((q, i) => (
          <g key={i}>
            <rect x="224" y={44 + i * 24} width="152" height="18" rx="3" fill="#f9731610" />
            <text x="230" y={56 + i * 24} fill="#e2e8f0" fontSize="6.5" fontFamily="monospace">{q.q}</text>
            <rect x="352" y={46 + i * 24} width="18" height="12" rx="2" fill="#f9731625" />
            <text x="361" y={55 + i * 24} textAnchor="middle" fill={q.color} fontSize="6" fontFamily="monospace" fontWeight="bold">{q.m}</text>
          </g>
        ))}

        {/* Bloom's taxonomy bar */}
        <rect x="16" y="115" width="170" height="32" rx="7" fill="#1c0c00" stroke="#f9731630" strokeWidth="1.5" />
        <text x="26" y="127" fill="#fb923c" fontSize="7" fontFamily="monospace" fontWeight="bold">BLOOM'S TAXONOMY SPREAD</text>
        {[
          { label: "Remember", w: 30, color: "#86efac" },
          { label: "Apply", w: 45, color: "#fde68a" },
          { label: "Analyze", w: 55, color: "#f9a8d4" },
          { label: "Evaluate", w: 30, color: "#93c5fd" },
        ].reduce((acc, b, i) => {
          const xStart = acc.x;
          acc.elements.push(
            <rect key={i} x={xStart} y={131} width={b.w} height={8} rx="2" fill={b.color} opacity="0.8" />
          );
          acc.x += b.w + 2;
          return acc;
        }, { x: 26, elements: [] as React.ReactNode[] }).elements}

        {/* Stats */}
        <rect x="16" y="155" width="368" height="34" rx="7" fill="#1c0c00" stroke="#f9731620" strokeWidth="1" />
        {[
          { val: "5K+", label: "Papers Gen." },
          { val: "92%", label: "Accuracy" },
          { val: "15+", label: "Subjects" },
          { val: "3s", label: "Avg Time" },
        ].map((s, i) => (
          <g key={i}>
            <text x={48 + i * 90} y="168" textAnchor="middle" fill="#fdba74" fontSize="11" fontFamily="monospace" fontWeight="bold">{s.val}</text>
            <text x={48 + i * 90} y="181" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">{s.label}</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    category: "FULL STACK",
    categoryColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    title: "Real-Time Stock Portfolio Tracker",
    desc: "WebSocket-driven trading dashboard with live OHLC charts, portfolio P&L, and automated price-alert notifications.",
    tags: ["React", "Node.js", "WebSockets", "MongoDB", "Redis"],
    student: "Vikram T.",
    color: "from-cyan-900/60 to-sky-900/40",
    accent: "#06b6d4",
    visual: (
      <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="url(#bg5)" />
        <defs>
          <linearGradient id="bg5" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0c2a3a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="candleUp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        {/* Portfolio header */}
        <text x="20" y="18" fill="#06b6d4" fontSize="9" fontFamily="monospace" fontWeight="bold">PORTFOLIO · LIVE</text>
        <circle cx="185" cy="13" r="4" fill="#22c55e" />
        <text x="194" y="17" fill="#22c55e" fontSize="8" fontFamily="monospace">CONNECTED</text>
        <text x="310" y="18" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold">+₹12,440</text>
        {/* Candlestick chart */}
        {[
          {x:30,o:155,c:130,h:120,l:165},{x:58,o:130,c:140,h:122,l:148},{x:86,o:140,c:115,h:108,l:150},
          {x:114,o:115,c:128,h:108,l:135},{x:142,o:128,c:108,h:100,l:135},{x:170,o:108,c:125,h:100,l:130},
          {x:198,o:125,c:105,h:96,l:130},{x:226,o:105,c:118,h:98,l:125},{x:254,o:118,c:95,h:88,l:122},
          {x:282,o:95,c:110,h:86,l:118},{x:310,o:110,c:88,h:80,l:115},{x:338,o:88,c:102,h:78,l:108},
        ].map((c, i) => {
          const isUp = c.c < c.o;
          const color = isUp ? "#22d3ee" : "#f87171";
          const top = Math.min(c.o, c.c);
          const bot = Math.max(c.o, c.c);
          return (
            <g key={i}>
              <line x1={c.x + 10} y1={c.h} x2={c.x + 10} y2={c.l} stroke={color} strokeWidth="1.5" opacity="0.7" />
              <rect x={c.x} y={top} width="20" height={Math.max(bot - top, 2)} rx="2" fill={color} opacity="0.85" />
            </g>
          );
        })}
        {/* Volume bars at bottom */}
        {[30,58,86,114,142,170,198,226,254,282,310,338].map((x,i)=>(
          <rect key={i} x={x} y={172 + Math.random() * 10} width="20" height={8 + i % 5 * 3} rx="1" fill="#06b6d430" />
        ))}
        <line x1="20" y1="170" x2="380" y2="170" stroke="#ffffff10" strokeWidth="1" />
        <text x="20" y="197" fill="#0891b2" fontSize="7" fontFamily="monospace">■ Bullish</text>
        <text x="70" y="197" fill="#f87171" fontSize="7" fontFamily="monospace">■ Bearish</text>
        <text x="290" y="197" fill="#64748b" fontSize="7" fontFamily="monospace">Vol →</text>
      </svg>
    ),
  },
  {
    category: "COMPUTER VISION",
    categoryColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    title: "Smart Face Attendance System",
    desc: "Real-time face recognition attendance system with 98.7% accuracy, liveness detection, and a web dashboard for institutions.",
    tags: ["Python", "OpenCV", "DeepFace", "Flask", "React"],
    student: "Anjali R.",
    color: "from-pink-900/60 to-rose-900/40",
    accent: "#ec4899",
    visual: (
      <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="url(#bg6)" />
        <defs>
          <linearGradient id="bg6" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4a0520" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        {/* Camera feed area */}
        <rect x="20" y="25" width="160" height="155" rx="10" fill="#1a0a10" stroke="#ec489940" strokeWidth="1.5" />
        {/* Face outline */}
        <ellipse cx="100" cy="90" rx="42" ry="52" fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="8 4" />
        {/* Face features */}
        <ellipse cx="86" cy="80" rx="8" ry="9" fill="#ec489930" stroke="#ec4899" strokeWidth="1.5" />
        <ellipse cx="114" cy="80" rx="8" ry="9" fill="#ec489930" stroke="#ec4899" strokeWidth="1.5" />
        <circle cx="86" cy="80" r="4" fill="#ec4899" opacity="0.7" />
        <circle cx="114" cy="80" r="4" fill="#ec4899" opacity="0.7" />
        <path d="M83 105 Q100 118 117 105" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
        {/* Corner scan lines */}
        {[[20,25],[180,25],[20,180],[180,180]].map(([x,y],i) => (
          <g key={i}>
            <line x1={x} y1={y} x2={x + (x < 100 ? 15 : -15)} y2={y} stroke="#ec4899" strokeWidth="2.5" />
            <line x1={x} y1={y} x2={x} y2={y + (y < 100 ? 15 : -15)} stroke="#ec4899" strokeWidth="2.5" />
          </g>
        ))}
        {/* Match badge */}
        <rect x="28" y="160" width="144" height="14" rx="4" fill="#ec489925" />
        <text x="100" y="170" textAnchor="middle" fill="#f9a8d4" fontSize="8" fontFamily="monospace">MATCH · 98.7% confidence</text>
        {/* Right panel - attendance list */}
        <rect x="195" y="25" width="185" height="155" rx="8" fill="#1a0510" stroke="#ec489930" strokeWidth="1" />
        <text x="287" y="43" textAnchor="middle" fill="#ec4899" fontSize="9" fontWeight="bold" fontFamily="monospace">TODAY · ATTENDANCE</text>
        {[
          { name: "Arjun S.", time: "09:01", present: true },
          { name: "Priya M.", time: "09:03", present: true },
          { name: "Rahul K.", time: "09:12", present: true },
          { name: "Sneha P.", time: "09:18", present: true },
          { name: "Vikram T.", time: "—", present: false },
        ].map((r, i) => (
          <g key={i}>
            <rect x="205" y={52 + i * 24} width="165" height="18" rx="4" fill={r.present ? "#ec489910" : "#1a0510"} />
            <circle cx="217" cy={61 + i * 24} r="5" fill={r.present ? "#22c55e" : "#475569"} />
            <text x="228" y={65 + i * 24} fill={r.present ? "#e2e8f0" : "#64748b"} fontSize="8" fontFamily="monospace">{r.name}</text>
            <text x="340" y={65 + i * 24} fill={r.present ? "#86efac" : "#475569"} fontSize="8" fontFamily="monospace">{r.time}</text>
          </g>
        ))}
        <text x="20" y="15" fill="#ec4899" fontSize="9" fontFamily="monospace" fontWeight="bold">LIVE FEED · SCANNING</text>
        <circle cx="178" cy="11" r="4" fill="#22c55e" />
      </svg>
    ),
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            Student Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industry-Level <span className="text-gradient">Live Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real projects built by our students — shipped to production, not just submitted as assignments.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-[#111827]/80 border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300 flex flex-col"
              whileHover={{ y: -6, boxShadow: `0 20px 50px ${project.accent}30` }}
            >
              {/* Visual / Image area */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                {/* Category badge */}
                <div className={`absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold tracking-wider ${project.categoryColor}`}>
                  {project.category}
                </div>

                {/* SVG visual */}
                <div className="absolute inset-0">
                  {project.visual}
                </div>

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
                  <a
                    href="#"
                    className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                    onClick={e => e.preventDefault()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                    onClick={e => e.preventDefault()}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-2 leading-snug group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Student */}
                <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}88)` }}
                  >
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-gray-500 text-xs">{project.student}</span>
                  <span className="ml-auto text-[10px] text-gray-600 bg-white/5 px-2 py-0.5 rounded-full">
                    NexGen Student
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-sm mb-4">Want your project featured here?</p>
          <a
            href="#internship"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed] text-white text-sm font-semibold hover:opacity-90 transition-all"
          >
            Join Our Internship Program
          </a>
        </motion.div>
      </div>
    </section>
  );
}
