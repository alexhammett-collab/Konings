"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import { images } from "@/lib/images";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <Image
          src={images.winchester}
          alt="Winchester"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-5xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3">Get In Touch</p>
          <h1 className="text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12">
          Ready to book your vehicle in? Have a question about our services? We&apos;d love to hear from you.
        </p>

        <div className="grid lg:grid-cols-[1fr_400px] gap-10">
          {/* Form */}
          <div className="bg-[#141414] border border-white/5 rounded-xl p-8">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-gold" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                <p className="text-muted-foreground text-sm">We&apos;ll get back to you within 24 hours.</p>
                <p className="text-xs text-muted-foreground mt-4">Demo mode — no real message was sent</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }} className="mt-6 text-gold text-sm hover:underline">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium block mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full bg-[#1C1C1C] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full bg-[#1C1C1C] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="07XXX XXX XXX"
                      className="w-full bg-[#1C1C1C] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us about your vehicle and what you're looking for..."
                    className="w-full bg-[#1C1C1C] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Visit Us", lines: ["Gentian House, Block A, Unit 2", "Moorside Road, Winchester", "SO23 7RX"] },
              { icon: Phone, title: "Call Us", lines: ["07854 719 945"] },
              { icon: Mail, title: "Email Us", lines: ["info@konings.co.uk"] },
              { icon: Clock, title: "Opening Hours", lines: ["Monday – Friday: 8am – 4pm", "Sat & Sun: By Appointment"] },
            ].map((item) => (
              <div key={item.title} className="bg-[#141414] border border-white/5 rounded-xl p-6 flex gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="bg-[#141414] border border-white/5 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] bg-[#1C1C1C] flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-gold mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Winchester, Hampshire</p>
                  <a
                    href="https://www.google.co.uk/maps/dir//Block+A,+Konings+Car+Detailing+,+Xpel+PPF,+Gentian+House,+Unit+2+Moorside+Rd,+Winchester+SO23+7RX"
                    target="_blank"
                    rel="noopener"
                    className="text-gold text-xs hover:underline mt-2 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
