import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0d1a]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bridging the Gap Between <span className="text-gradient">Academia & Industry</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              At NexGen BR Technologies, we believe that traditional education is no longer enough. 
              The tech industry evolves rapidly, and students need hands-on, practical experience 
              to stand out.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our mission is to empower the next generation of developers, data scientists, and AI 
              engineers by providing industry-relevant training, real-time projects, and mentorship 
              from working professionals.
            </p>
            
            <div className="space-y-4">
              {[
                "Curriculum designed by industry experts",
                "100% Practical, hands-on learning approach",
                "Dedicated placement assistance & interview prep",
                "State-of-the-art tech infrastructure"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-cyan-400/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Learn</h3>
                <p className="text-sm text-gray-400">Master core concepts through interactive sessions.</p>
              </div>
              <div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-cyan-400/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Innovate</h3>
                <p className="text-sm text-gray-400">Solve real-world problems with creative tech solutions.</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-cyan-400/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Build</h3>
                <p className="text-sm text-gray-400">Apply knowledge by building production-ready apps.</p>
              </div>
              <div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-cyan-400/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Succeed</h3>
                <p className="text-sm text-gray-400">Launch your career with confidence and skills.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
