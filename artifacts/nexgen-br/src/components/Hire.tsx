import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function Hire() {
  return (
    <section id="hire" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-primary opacity-5 blur-3xl rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-3">For Companies</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hire <span className="text-gradient">NexGen Talent</span>
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Our graduates are not just trained in theory. They have built full-stack applications, 
                understand version control, agile methodologies, and are ready to contribute from day one.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Pre-screened & technically vetted candidates",
                  "Zero hiring fees for partner companies",
                  "Candidates with real production experience",
                  "Available for immediate joining"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 font-bold">
                Become a Hiring Partner
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-white mb-2">150+</span>
                <span className="text-sm text-gray-400">Companies Hiring</span>
              </div>
              <div className="bg-card border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center translate-y-8">
                <span className="text-4xl font-bold text-white mb-2">85%</span>
                <span className="text-sm text-gray-400">Placement Rate</span>
              </div>
              <div className="bg-card border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center -translate-y-4">
                <span className="text-4xl font-bold text-white mb-2">4.8</span>
                <span className="text-sm text-gray-400">Employer Rating</span>
              </div>
              <div className="bg-card border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center translate-y-4">
                <span className="text-4xl font-bold text-white mb-2">0</span>
                <span className="text-sm text-gray-400">Hiring Fees</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
