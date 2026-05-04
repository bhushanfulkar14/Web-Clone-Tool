import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Alex Thompson",
    role: "Full Stack Developer @ TechCorp",
    content: "The curriculum is intense but exactly what the industry needs. The live projects helped me clear my technical interviews easily.",
    rating: 5,
    initials: "AT"
  },
  {
    name: "Sarah Chen",
    role: "Data Analyst @ FinTech Inc",
    content: "NexGen bridged the gap between my college degree and an actual job. The mentors were incredibly supportive throughout.",
    rating: 5,
    initials: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Backend Engineer @ StartupX",
    content: "The internship program was the highlight. Building a real microservices architecture gave me the confidence I needed.",
    rating: 5,
    initials: "MR"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#0a0d1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Student <span className="text-gradient">Success Stories</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-card border border-white/5 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-gradient-primary text-white font-bold">
                    {review.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <p className="text-gray-500 text-xs">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
