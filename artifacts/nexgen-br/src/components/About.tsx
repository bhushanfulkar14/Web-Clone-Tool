import { motion } from "framer-motion";
import { Target, Eye, Heart, Compass } from "lucide-react";

const pillars = [
  {
    icon: Target,
    label: "Mission",
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(79,110,247,0.15)",
    text: "Bridge the gap between academic knowledge and industry — through hands-on training, internships, and live projects.",
  },
  {
    icon: Eye,
    label: "Vision",
    color: "from-violet-500 to-purple-400",
    glow: "rgba(139,92,246,0.15)",
    text: "Create skilled professionals ready for the future of technology, equipped to lead the next wave of innovation.",
  },
  {
    icon: Heart,
    label: "Values",
    color: "from-pink-500 to-rose-400",
    glow: "rgba(236,72,153,0.15)",
    text: "Practical learning, transparent mentorship, accountability for outcomes, and respect for every student's journey.",
  },
  {
    icon: Compass,
    label: "Approach",
    color: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.15)",
    text: "Project-first curriculum, working-professional mentors, and continuous feedback loops grounded in real industry needs.",
  },
];

function CodeVisual() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" fill="#0d1117" rx="12" />
      <rect x="0" y="0" width="320" height="28" fill="#161b22" rx="12" />
      <rect x="0" y="12" width="320" height="16" fill="#161b22" />
      {["#ff5f57","#ffbd2e","#28c840"].map((c,i)=>(
        <circle key={i} cx={14 + i*18} cy={14} r="5" fill={c} />
      ))}
      <text x="130" y="18" fill="#8b949e" fontSize="8" fontFamily="monospace">index.py — NexGen</text>
      {[
        { y: 48, color: "#ff79c6", text: "import" },
        { y: 48, color: "#cdd9e5", text: " tensorflow as tf", offset: 42 },
        { y: 62, color: "#ff79c6", text: "from" },
        { y: 62, color: "#cdd9e5", text: " sklearn", offset: 30 },
        { y: 62, color: "#ff79c6", text: ".model_selection", offset: 72 },
        { y: 76, color: "#8b949e", text: "# Load dataset" },
        { y: 90, color: "#79c0ff", text: "X_train" },
        { y: 90, color: "#cdd9e5", text: ", X_test = ", offset: 50 },
        { y: 90, color: "#d2a8ff", text: "load_data()", offset: 98 },
        { y: 104, color: "#8b949e", text: "# Define model" },
        { y: 118, color: "#79c0ff", text: "model" },
        { y: 118, color: "#cdd9e5", text: " = tf.keras.", offset: 36 },
        { y: 118, color: "#d2a8ff", text: "Sequential([", offset: 96 },
        { y: 132, color: "#ffa657", text: "    Dense" },
        { y: 132, color: "#cdd9e5", text: "(128, activation=", offset: 44 },
        { y: 132, color: "#a5d6ff", text: "'relu'", offset: 106 },
        { y: 132, color: "#cdd9e5", text: "),", offset: 136 },
        { y: 146, color: "#ffa657", text: "    Dropout" },
        { y: 146, color: "#cdd9e5", text: "(0.2),", offset: 52 },
        { y: 160, color: "#ffa657", text: "    Dense" },
        { y: 160, color: "#cdd9e5", text: "(10, activation=", offset: 44 },
        { y: 160, color: "#a5d6ff", text: "'softmax'", offset: 104 },
        { y: 174, color: "#cdd9e5", text: "])" },
        { y: 188, color: "#79c0ff", text: "model" },
        { y: 188, color: "#cdd9e5", text: ".fit(X_train, epochs=", offset: 36 },
        { y: 188, color: "#79c0ff", text: "50", offset: 140 },
        { y: 202, color: "#28c840", text: "# Accuracy: 94.7% ✓" },
      ].map((t, i) => (
        <text key={i} x={16 + (t.offset ?? 0)} y={t.y} fill={t.color} fontSize="8.5" fontFamily="monospace">{t.text}</text>
      ))}
      <line x1="8" y1="48" x2="8" y2="210" stroke="#1f6feb" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}

function AIVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#0d0a1a" rx="10" />
      <defs>
        <radialGradient id="brainAb" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0d0a1a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="78" rx="65" ry="55" fill="url(#brainAb)" />
      <circle cx="100" cy="78" r="25" fill="#1a0a3a" stroke="#7c3aed" strokeWidth="2" />
      <text x="100" y="74" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace" fontWeight="bold">NEURAL</text>
      <text x="100" y="85" textAnchor="middle" fill="#7c3aed" fontSize="8" fontFamily="monospace">NETWORK</text>
      {[
        {cx:30,cy:35,l:"Input"},{cx:30,cy:78,l:"Data"},{cx:30,cy:121,l:"Train"},
        {cx:170,cy:35,l:"Output"},{cx:170,cy:78,l:"Model"},{cx:170,cy:121,l:"API"},
      ].map((n, i) => (
        <g key={i}>
          <line x1={n.cx < 100 ? n.cx + 18 : n.cx - 18} y1={n.cy} x2={n.cx < 100 ? 75 : 125} y2="78" stroke="#7c3aed" strokeWidth="1" opacity="0.35" strokeDasharray="3 2" />
          <rect x={n.cx - 18} y={n.cy - 10} width="36" height="18" rx="5" fill="#1a0a3a" stroke="#7c3aed" strokeWidth="1.2" />
          <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill="#c4b5fd" fontSize="6.5" fontFamily="monospace">{n.l}</text>
        </g>
      ))}
      <text x="100" y="150" textAnchor="middle" fill="#6d28d9" fontSize="7" fontFamily="monospace">94.2% Accuracy · GPT-4 Fine-tuned</text>
    </svg>
  );
}

function DataVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#0a1628" rx="10" />
      <defs>
        <linearGradient id="barAbout" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="barAbout2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <text x="12" y="16" fill="#3b82f6" fontSize="7.5" fontFamily="monospace" fontWeight="bold">ANALYTICS · LAST 7 DAYS</text>
      {[
        {x:20,h:55,h2:30},{x:44,h:80,h2:45},{x:68,h:45,h2:25},{x:92,h:100,h2:60},
        {x:116,h:70,h2:40},{x:140,h:90,h2:50},{x:164,h:65,h2:35},
      ].map((b,i)=>(
        <g key={i}>
          <rect x={b.x} y={120-b.h} width="18" height={b.h} rx="3" fill="url(#barAbout)" opacity="0.85" />
          <rect x={b.x} y={120-b.h-b.h2} width="18" height={b.h2} rx="3" fill="url(#barAbout2)" opacity="0.7" />
        </g>
      ))}
      <line x1="12" y1="120" x2="188" y2="120" stroke="#ffffff15" strokeWidth="1" />
      {[60,90].map(y => (
        <line key={y} x1="12" y1={120-y} x2="188" y2={120-y} stroke="#ffffff08" strokeWidth="1" />
      ))}
      <polyline points="29,85 53,55 77,100 101,28 125,62 149,40 173,72" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      {[{x:29,y:85},{x:53,y:55},{x:77,y:100},{x:101,y:28},{x:125,y:62},{x:149,y:40},{x:173,y:72}].map((p,i)=>(
        <circle key={i} cx={p.x} cy={p.y} r="3" fill="#f59e0b" stroke="#0a1628" strokeWidth="1.5" />
      ))}
      <rect x="12" y="130" width="45" height="10" rx="2" fill="#3b82f620" />
      <text x="34" y="138" textAnchor="middle" fill="#93c5fd" fontSize="6.5" fontFamily="monospace">■ Students</text>
      <rect x="62" y="130" width="50" height="10" rx="2" fill="#34d39920" />
      <text x="87" y="138" textAnchor="middle" fill="#6ee7b7" fontSize="6.5" fontFamily="monospace">■ Placed</text>
      <rect x="118" y="130" width="65" height="10" rx="2" fill="#f59e0b20" />
      <text x="150" y="138" textAnchor="middle" fill="#fde68a" fontSize="6.5" fontFamily="monospace">— Growth Rate</text>
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1a] via-[#0d1120] to-[#0a0d1a] z-0" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Top: Hero layout — text left, image mosaic right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed]" />
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">About Company</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              We build the next generation of{" "}
              <span className="text-gradient">tech talent</span>.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              NexGen BR Technologies is a fast-growing IT training and research platform dedicated to empowering students with practical and industry-ready skills.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We focus on bridging the gap between academic knowledge and real-world industry requirements through hands-on training, internships, and live projects.
            </p>

            <p className="text-white/80 text-base font-medium leading-relaxed border-l-2 border-cyan-400 pl-4 italic">
              Our mission is to create skilled professionals ready for the future of technology.
            </p>

            {/* Floating tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["AI", "Data Science", "Full Stack", "Cloud", "ML", "DevOps"].map(tag => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium hover:border-cyan-400/40 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image mosaic — matching the reference */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 h-80"
          >
            {/* Large left — coding */}
            <div className="row-span-2 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
              <CodeVisual />
            </div>
            {/* Top right — AI brain */}
            <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
              <AIVisual />
            </div>
            {/* Bottom right — analytics */}
            <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
              <DataVisual />
            </div>
          </motion.div>
        </div>

        {/* What drives us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">What drives us</span>
          <h3 className="text-3xl font-bold text-white mt-2">Mission, vision, and the way we work.</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#111827]/80 border border-white/5 rounded-2xl p-6 hover:border-white/15 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -4, boxShadow: `0 16px 40px ${p.glow}` }}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${p.color} opacity-5 group-hover:opacity-15 rounded-bl-full transition-opacity duration-500`} />
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className={`text-base font-bold mb-2 bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>
                  {p.label}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
