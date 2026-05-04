import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080b16] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Start Your <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Have questions about our courses or internship programs? Drop us a message and our team will get back to you shortly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              {
                icon: Mail,
                color: "text-cyan-400",
                bg: "bg-cyan-400/10",
                title: "Email Us",
                line1: "info@nexgenbrtechnologies.com",
                line2: "We reply within 24 hours",
              },
              {
                icon: Phone,
                color: "text-purple-400",
                bg: "bg-purple-400/10",
                title: "Call / WhatsApp",
                line1: "+91 9123456789",
                line2: "Mon–Sat, 9 AM – 7 PM IST",
              },
              {
                icon: MapPin,
                color: "text-blue-400",
                bg: "bg-blue-400/10",
                title: "Visit Us",
                line1: "Nagpur, Maharashtra, India",
                line2: "Appointments available on request",
              },
            ].map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-[#111827]/80 border border-white/5 rounded-2xl p-5 hover:border-white/15 transition-colors"
                >
                  <div className={`w-12 h-12 ${info.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-0.5">{info.title}</h4>
                    <p className="text-gray-300 text-sm">{info.line1}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{info.line2}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Quick links */}
            <div className="bg-[#111827]/80 border border-white/5 rounded-2xl p-5">
              <h4 className="text-white font-bold mb-3 text-sm">Quick Actions</h4>
              <div className="flex flex-wrap gap-2">
                {["Apply for Internship", "Enroll in a Course", "Become a Trainer", "Partner with Us"].map(action => (
                  <span key={action} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 cursor-pointer hover:border-cyan-400/40 hover:text-cyan-400 transition-colors">
                    {action}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827]/80 border border-white/5 rounded-3xl p-8"
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSuccess(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-sm text-cyan-400 hover:text-cyan-300 underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <h3 className="text-xl font-bold text-white mb-5">Send us a Message</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300">Your Name *</label>
                    <Input required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                      placeholder="Ravi Kumar" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-400" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300">Email Address *</label>
                    <Input required type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
                      placeholder="ravi@gmail.com" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-400" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-300">Subject *</label>
                  <Input required value={form.subject} onChange={e => setForm(f => ({...f, subject: e.target.value}))}
                    placeholder="e.g. Enquiry about Data Science course" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-300">Message *</label>
                  <Textarea required value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
                    placeholder="Tell us how we can help you..." className="min-h-[120px] bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-400" />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <Button type="submit" disabled={loading} className="w-full bg-gradient-primary text-white hover:opacity-90 font-bold py-6 rounded-xl hover-glow">
                  {loading
                    ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
                    : <><Send className="w-4 h-4 mr-2" /> Send Message</>
                  }
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
