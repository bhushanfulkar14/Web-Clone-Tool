import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Future of AI in Web Development",
    date: "Oct 12, 2024",
    category: "AI / ML",
    snippet: "How machine learning models are automating frontend design and optimizing backend APIs."
  },
  {
    title: "Mastering React Server Components",
    date: "Oct 05, 2024",
    category: "Frontend",
    snippet: "A deep dive into Next.js 14 and how server components change the way we build web apps."
  },
  {
    title: "Database Scaling for Startups",
    date: "Sep 28, 2024",
    category: "Backend",
    snippet: "When to choose NoSQL over SQL, and how to implement sharding for your first million users."
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Insights</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Tech <span className="text-gradient">Blog</span>
            </h3>
          </div>
          <a href="#" className="hidden md:flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
            View All Posts <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="bg-card border border-white/5 p-6 rounded-2xl h-full flex flex-col group-hover:border-cyan-400/30 transition-colors">
                <span className="text-xs font-bold tracking-wider text-purple-400 uppercase mb-4">
                  {post.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {post.snippet}
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
