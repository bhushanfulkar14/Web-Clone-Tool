import { motion } from "framer-motion";
import { Clock, BarChart, BookOpen, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Full Stack Web Development",
    duration: "6 Months",
    level: "Beginner to Advanced",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: Layers
  },
  {
    title: "Data Science & Analytics",
    duration: "5 Months",
    level: "Intermediate",
    tech: ["Python", "Pandas", "SQL", "Tableau"],
    icon: BarChart
  },
  {
    title: "AI & Machine Learning",
    duration: "8 Months",
    level: "Advanced",
    tech: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    icon: BookOpen
  }
];

export function Courses() {
  return (
    <section id="courses" className="py-24 bg-[#0a0d1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Learn to Build</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industry-Ready <span className="text-gradient">Courses</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive curriculum designed by industry experts to get you job-ready.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-card border border-white/5 rounded-2xl overflow-hidden card-glow group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
                <course.icon className="w-16 h-16 text-white opacity-80" />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-4">{course.title}</h4>
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span>{course.level}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.tech.map((t, j) => (
                    <span key={j} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 group-hover:border-cyan-400/30 transition-all">
                  View Syllabus
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
