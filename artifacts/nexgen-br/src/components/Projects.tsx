import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Resume Analyzer",
    desc: "A machine learning pipeline that parses resumes, scores them against job descriptions, and provides actionable feedback.",
    tags: ["Python", "Spacy", "React", "FastAPI"],
    image: "bg-blue-900"
  },
  {
    title: "E-Commerce Microservices",
    desc: "A scalable e-commerce backend with distributed databases, message queues, and a responsive admin dashboard.",
    tags: ["Node.js", "Docker", "RabbitMQ", "MongoDB"],
    image: "bg-purple-900"
  },
  {
    title: "Real-time Crypto Tracker",
    desc: "Websocket-driven crypto dashboard with live charting, portfolio management, and price alerts.",
    tags: ["React", "TypeScript", "Tailwind", "WebSockets"],
    image: "bg-indigo-900"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0d1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Student Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Live <span className="text-gradient">Projects</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-card border border-white/5 rounded-2xl overflow-hidden group hover:border-cyan-400/30 transition-colors"
            >
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4 bg-black/50 backdrop-blur-sm">
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] uppercase tracking-wider font-semibold bg-white/5 px-2 py-1 rounded text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
