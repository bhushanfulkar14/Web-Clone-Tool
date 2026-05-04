import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2, MessageCircle, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const inputCls =
  "bg-[#080d15] border border-white/8 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-0 rounded-xl h-11 px-4 text-sm w-full transition-colors";

const labelCls = "block text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1.5";

const subjectOptions = [
  "Course Enquiry",
  "Internship Application",
  "Hiring Partnership",
  "Trainer / Mentor Role",
  "Research Collaboration",
  "Other",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "", resume: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const set = (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || "General Enquiry",
          message: `${form.message}${form.phone ? `\n\nPhone: ${form.phone}` : ""}${form.resume ? `\nResume/Portfolio: ${form.resume}` : ""}`,
        }),
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
    <section id="contact" className="py-20 relative overflow-hidden bg-[#07090f]">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
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
          <p className="text-gray-400 text-base max-w-lg">
            We typically respond within 24 hours. For urgent matters, reach out via WhatsApp.
          </p>
        </motion.div>

        {/* ── Main grid: form | info+map ── */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-5">

          {/* ─── Form card ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0d1220] border border-white/6 rounded-2xl p-7"
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-14 text-center"
              >
                <div className="w-18 h-18 rounded-full bg-emerald-500/15 flex items-center justify-center mb-4" style={{ width: 72, height: 72 }}>
                  <CheckCircle2 className="w-9 h-9 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm mb-1">
                  We'll reply to <span className="text-cyan-400">{form.email}</span> within 24 hours.
                </p>
                <p className="text-gray-600 text-xs mb-5">A copy has been forwarded to info@nexgenbrtechnologies.com</p>
                <button
                  onClick={() => {
                    setSuccess(false);
                    setForm({ name: "", email: "", phone: "", subject: "", message: "", resume: "" });
                  }}
                  className="text-sm text-blue-400 hover:text-blue-300 underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-white font-bold text-lg mb-5">Send us a Message</h3>

                {/* Row 1: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Name <span className="text-blue-400">*</span></label>
                    <Input required value={form.name} onChange={set("name")}
                      placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Email <span className="text-blue-400">*</span></label>
                    <Input required type="email" value={form.email} onChange={set("email")}
                      placeholder="you@email.com" className={inputCls} />
                  </div>
                </div>

                {/* Row 2: Phone + Subject */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Phone</label>
                    <Input value={form.phone} onChange={set("phone")}
                      placeholder="+91 98765 43210" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Subject</label>
                    <select
                      value={form.subject}
                      onChange={set("subject")}
                      className="bg-[#080d15] border border-white/8 text-white rounded-xl h-11 px-4 text-sm w-full transition-colors focus:border-blue-500 focus:outline-none"
                    >
                      <option value="" className="bg-gray-900">Select a topic…</option>
                      {subjectOptions.map(s => (
                        <option key={s} value={s} className="bg-gray-900">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Resume / Portfolio */}
                <div>
                  <label className={labelCls}>Resume / Portfolio Link (optional)</label>
                  <Input value={form.resume} onChange={set("resume")}
                    placeholder="drive.google.com/... or github.com/..." className={inputCls} />
                </div>

                {/* Message */}
                <div>
                  <label className={labelCls}>Message <span className="text-blue-400">*</span></label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us how we can help — which course you're interested in, batch dates, or anything else…"
                    className="bg-[#080d15] border border-white/8 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-3 text-sm w-full min-h-[110px] transition-colors resize-none"
                  />
                </div>

                {error && <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-3 py-2">{error}</p>}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-primary text-white font-bold py-5 rounded-xl hover:opacity-90 hover-glow transition-opacity"
                >
                  {loading
                    ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…</>
                    : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
                </Button>

                <p className="text-center text-gray-600 text-xs">
                  Your message will be sent to{" "}
                  <span className="text-gray-400">info@nexgenbrtechnologies.com</span>
                </p>
              </form>
            )}
          </motion.div>

          {/* ─── Right column: info cards + map ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {/* Email */}
            <div className="bg-[#0d1220] border border-white/6 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-[18px] h-[18px] text-blue-400" />
              </div>
              <div>
                <p className={labelCls}>Email</p>
                <p className="text-white text-sm font-medium break-all leading-snug">info@nexgenbrtechnologies.com</p>
              </div>
            </div>

            {/* Phone / WhatsApp */}
            <div className="bg-[#0d1220] border border-white/6 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-[18px] h-[18px] text-emerald-400" />
              </div>
              <div>
                <p className={labelCls}>WhatsApp / Call</p>
                <p className="text-white text-sm font-medium">+91 91234 56789</p>
                <p className="text-gray-500 text-xs">Urgent queries — chat directly</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-[#0d1220] border border-white/6 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-[18px] h-[18px] text-purple-400" />
              </div>
              <div>
                <p className={labelCls}>Location</p>
                <p className="text-white text-sm font-medium">Wardha, Nagpur</p>
                <p className="text-gray-500 text-xs">Maharashtra, India</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-[#0d1220] border border-white/6 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-[14px] h-[14px] text-cyan-400" />
                <p className={labelCls + " mb-0"}>Office Hours</p>
              </div>
              <div className="space-y-2">
                {[
                  { day: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
                  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
                  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
                ].map(h => (
                  <div key={h.day} className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">{h.day}</span>
                    <span className="text-white font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-white/6 flex-1 min-h-[180px]">
              <iframe
                title="NexGen BR Technologies Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59834.96284455257!2d78.58009689999999!3d20.745222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd39c7ef4c8d111%3A0x6f5f95eff1a3c3ca!2sWardha%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 180, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
