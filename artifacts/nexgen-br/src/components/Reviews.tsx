import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Pawan Patil",
    role: "Full Stack Developer Intern",
    initials: "PP",
    color: "from-blue-500 to-cyan-400",
    rating: 5,
    content: "Best internship with real-time projects. The mentors actually care — got placed within 2 months. NexGen ne meri zindagi badal di!",
  },
  {
    name: "Aditya Talwekar",
    role: "Data Science Trainee",
    initials: "AT",
    color: "from-violet-500 to-purple-400",
    rating: 5,
    content: "Learned Data Science from scratch. The capstone projects gave me a portfolio I was proud to share. Bahut hi practical approach hai.",
  },
  {
    name: "Vivek Virkhede",
    role: "Python Developer Intern",
    initials: "VV",
    color: "from-emerald-500 to-teal-400",
    rating: 5,
    content: "Highly recommended for freshers. The DSA + System Design tracks made interviews feel manageable. Interview crack ho gaya thanks to NexGen!",
  },
  {
    name: "Harsh Kshirsagar",
    role: "AI / ML Trainee",
    initials: "HK",
    color: "from-orange-500 to-amber-400",
    rating: 5,
    content: "From zero to ML engineer in 3 months. The project-first curriculum is exactly what industry needs. Real experience mile yahan!",
  },
  {
    name: "Adarsh Wani",
    role: "Web Development Intern",
    initials: "AW",
    color: "from-pink-500 to-rose-400",
    rating: 5,
    content: "NexGen ka internship program game-changer hai. Got my first job at a Pune startup. Resume se lekar interview tak sab mein help mila.",
  },
  {
    name: "Pravin More",
    role: "Cloud Computing Trainee",
    initials: "PM",
    color: "from-sky-500 to-blue-400",
    rating: 5,
    content: "AWS certification support + hands-on labs gave me real confidence. Mentor sessions are genuinely helpful, not just theory.",
  },
  {
    name: "Suhas Patak",
    role: "DevOps Intern",
    initials: "SP",
    color: "from-indigo-500 to-violet-400",
    rating: 5,
    content: "Docker, Kubernetes, CI/CD — sab kuch practically sikhaya. The live project deployment experience is unmatched for freshers.",
  },
  {
    name: "Yash Phohane",
    role: "Data Analyst Trainee",
    initials: "YP",
    color: "from-fuchsia-500 to-pink-400",
    rating: 5,
    content: "Power BI + SQL + Python combo training is perfect. Got a data analyst offer within 6 weeks of completing the program. Ekdum sahi jagah!",
  },
  {
    name: "Arya Giri",
    role: "Java Developer Intern",
    initials: "AG",
    color: "from-teal-500 to-emerald-400",
    rating: 5,
    content: "Java Spring Boot se lekar microservices tak — sab kuch covered. The mentors are working professionals which makes a huge difference.",
  },
  {
    name: "Aman Aamtake",
    role: "Cyber Security Trainee",
    initials: "AA",
    color: "from-red-500 to-orange-400",
    rating: 5,
    content: "CEH prep + ethical hacking labs — NexGen ke bina yeh possible nahi tha. Real-world security scenarios practice karwate hain yahan.",
  },
  {
    name: "Sanika Talwekar",
    role: "Frontend Developer Intern",
    initials: "ST",
    color: "from-cyan-500 to-blue-400",
    rating: 5,
    content: "React aur Figma ka combination ek hi jagah sikhna — iske liye NexGen best hai! Projects ekdum real lagte hain. Placement mein bhi help mili.",
  },
  {
    name: "Megha Ingle",
    role: "Data Science Trainee",
    initials: "MI",
    color: "from-purple-400 to-fuchsia-500",
    rating: 5,
    content: "NexGen ke mentors ne personally guide kiya — Python se Machine Learning tak ka full journey smooth raha. Girls ke liye bhi bahut supportive environment hai.",
  },
  {
    name: "Pooja Patil",
    role: "Web Development Intern",
    initials: "PP",
    color: "from-rose-400 to-pink-500",
    rating: 5,
    content: "Internship ke baad seedha campus drive mein select ho gayi! NexGen ka resume-building session aur mock interviews bahut kaam aye. Highly recommended!",
  },
  {
    name: "Raksha Madpe",
    role: "AI / ML Intern",
    initials: "RM",
    color: "from-green-400 to-teal-500",
    rating: 5,
    content: "Deep Learning concepts ko itna clearly explain karte hain yahan. Projects actual industry datasets pe hote hain — yahi farq hai NexGen aur baaki institutes mein.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080b16] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">

          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed]" />
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">NexGen Reviews</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              <span className="text-gradient">Loved</span> by our<br />students.
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Real testimonials from real students who turned skills into careers.
            </p>

            <div className="bg-[#111827] border border-white/5 rounded-2xl p-6 inline-block">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-black text-white">5.0</span>
                <span className="text-gray-500 text-sm font-medium">/5.0</span>
              </div>
              <Stars count={5} />
              <p className="text-gray-500 text-xs mt-2">14 verified student reviews</p>
            </div>
          </motion.div>

          {/* Right panel — reviews grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-[#111827]/80 border border-white/5 rounded-2xl p-5 hover:border-white/15 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -3 }}
              >
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${r.color} opacity-10 group-hover:opacity-20 rounded-bl-full transition-opacity`} />
                <span className="absolute top-4 right-5 text-4xl font-serif text-white/5 leading-none select-none">"</span>

                <div className="flex items-center justify-between mb-3">
                  <Stars count={r.rating} />
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  "{r.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{r.name}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{r.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
