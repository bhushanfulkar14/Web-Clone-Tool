import { motion } from "framer-motion";
import { Monitor, Database, Cpu, Layout, Terminal, Code2 } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    desc: "End-to-end web application development using modern frameworks and responsive design principles."
  },
  {
    icon: Database,
    title: "Data Science",
    desc: "Extracting insights from complex data using statistical analysis, machine learning, and visualization."
  },
  {
    icon: Cpu,
    title: "AI / ML Solutions",
    desc: "Building intelligent systems with predictive modeling, NLP, and deep learning technologies."
  },
  {
    icon: Layout,
    title: "Full Stack Training",
    desc: "Comprehensive training covering frontend UI, backend APIs, and database architecture."
  },
  {
    icon: Terminal,
    title: "Python Engineering",
    desc: "Specialized scripting, automation, and backend development using Python ecosystems."
  },
  {
    icon: Code2,
    title: "React & Modern UI",
    desc: "Crafting highly interactive and performant user interfaces using React and modern CSS."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-gradient">Expertise</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-white/5 rounded-2xl p-8 card-glow transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
