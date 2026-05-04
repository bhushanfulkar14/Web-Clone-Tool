import { motion } from "framer-motion";
import { ArrowRight, Code2, Users, Rocket, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Code2,
    title: "Skill Assessment",
    desc: "Evaluate your current tech stack and logic skills."
  },
  {
    icon: Users,
    title: "Mentorship",
    desc: "Get paired with an industry senior engineer."
  },
  {
    icon: Rocket,
    title: "Live Projects",
    desc: "Contribute to real, production-level codebases."
  },
  {
    icon: Trophy,
    title: "Placement",
    desc: "Pre-placement offers and direct hiring."
  }
];

export function Internship() {
  return (
    <section id="internship" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1a] via-[#111827] to-[#0a0d1a] z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Internship Program</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Launch Your <span className="text-gradient">Tech Career</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Stop building toy apps. Our internship program puts you in the driver's seat of real products. 
              Work in agile sprints, handle code reviews, and ship features to production under the guidance 
              of senior engineers.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white rounded-full px-8 hover-glow">
              Apply for Internship <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <step.icon className="w-10 h-10 text-cyan-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
