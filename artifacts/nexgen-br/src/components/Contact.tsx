import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0d1a]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your <span className="text-gradient">Journey</span>
            </h3>
            <p className="text-gray-400 mb-10">
              Have questions about our courses or internship programs? Drop us a message and our team will get back to you shortly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm">hello@nexgenbr.tech</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visit Us</h4>
                  <p className="text-gray-400 text-sm">101 Innovation Drive,<br/>Tech District, SF 94105</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-white/5 p-8 rounded-3xl"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">First Name</label>
                  <Input placeholder="John" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Last Name</label>
                  <Input placeholder="Doe" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-400" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[120px] bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-400" />
              </div>
              <Button type="submit" className="w-full bg-gradient-primary text-white hover:opacity-90 font-bold py-6 rounded-xl hover-glow">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
