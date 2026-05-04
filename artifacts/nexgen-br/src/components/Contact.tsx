import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const inputCls =
  "bg-[#0d1117] border border-white/8 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-0 rounded-lg h-11 px-4 text-sm w-full transition-colors";

const labelCls = "block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

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
    <section id="contact" className="py-20 relative overflow-hidden bg-[#080b16]">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-px bg-gradient-to-r from-[#4f6ef7] to-[#7c3aed]" />
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            Get in touch — for{" "}
            <span className="text-[#4f6ef7]">courses,</span>
            <br />
            <span className="text-[#7c3aed]">internships, or hiring.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-md">
            We typically respond within 24 hours. For urgent matters, reach out via WhatsApp.
          </p>
        </motion.div>

        {/* Two-column: form + info */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-5">

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f1520] border border-white/6 rounded-2xl p-7"
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSuccess(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-5 text-sm text-blue-400 hover:text-blue-300 underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Name <span className="text-blue-400">*</span></label>
                    <Input
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Email <span className="text-blue-400">*</span></label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@email.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Subject */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Phone</label>
                    <Input
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 ..."
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Subject</label>
                    <Input
                      value={form.subject}
                      onChange={set("subject")}
                      placeholder="Course inquiry, hiring, etc."
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelCls}>Message <span className="text-blue-400">*</span></label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us how we can help..."
                    className="bg-[#0d1117] border border-white/8 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-0 rounded-lg px-4 py-3 text-sm w-full min-h-[110px] transition-colors resize-none"
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-primary text-white font-bold py-5 rounded-xl hover:opacity-90 hover-glow transition-opacity"
                >
                  {loading ? (
                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4 mr-2" /> Send Message</>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Email */}
            <div className="bg-[#0f1520] border border-white/6 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4.5 h-4.5 text-blue-400" style={{ width: 18, height: 18 }} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">Email</p>
                <p className="text-white text-sm font-medium break-all">info@nexgenbrtechnologies.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-[#0f1520] border border-white/6 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4.5 h-4.5 text-purple-400" style={{ width: 18, height: 18 }} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">Location</p>
                <p className="text-white text-sm font-medium">Wardha, Nagpur</p>
                <p className="text-gray-500 text-xs">Maharashtra, India</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-[#0f1520] border border-white/6 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4.5 h-4.5 text-emerald-400" style={{ width: 18, height: 18 }} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">WhatsApp</p>
                <p className="text-white text-sm font-medium">Urgent queries?</p>
                <p className="text-gray-500 text-xs">Chat with us directly</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#0f1520] border border-white/6 rounded-2xl p-5">
              <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">Office Hours</p>
              <div className="space-y-1.5">
                {[
                  { day: "Mon – Sat", time: "9:00 AM – 7:00 PM" },
                  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
                ].map(h => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-gray-400">{h.day}</span>
                    <span className="text-white font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
