"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Factory, Car, Star } from "lucide-react";
import { images } from "@/lib/images";

const timeline = [
  { year: "2006", title: "McLaren Automotive", desc: "Mike joins McLaren as a Paint Specialist, working on everything from MP4-12C to P1 and Senna. Prepares show cars for Geneva, Paris, and Shanghai motor shows." },
  { year: "2014", title: "Rolls-Royce Motor Cars", desc: "Moves to the Finesse Department at Rolls-Royce, supporting the launch of Dawn and Phantom VIII. Fine-tuning vehicles to meet the highest standards." },
  { year: "2018", title: "Könings Detailing Founded", desc: "Michael takes over Könings Detailing (est. 2008) and transforms it into a leading premium detailing studio in Winchester." },
  { year: "2020", title: "Official XPEL Centre", desc: "Könings becomes an official XPEL Paint Protection Film installation centre, offering the very best in PPF technology." },
  { year: "2022", title: "National Motor Museum", desc: "Könings becomes the only detailing specialist trusted to work with the National Motor Museum at Beaulieu." },
  { year: "2024", title: "Porsche Club GB Recommended", desc: "Recognised and recommended by Porsche Club Great Britain for exceptional quality of work." },
];

const values = [
  { icon: Award, title: "Exceed Expectations", desc: "We love what we do, we treat your car like our own" },
  { icon: Factory, title: "Take Pride in Our Work", desc: "Your car is more than just a means of transportation" },
  { icon: Car, title: "Drive to Succeed", desc: "We're obsessed with details and we are proud of it" },
  { icon: Star, title: "Make It Happen", desc: "We're here to support you and all your needs" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src={images.workshop}
          alt="Konings Detailing workshop"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-5xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3">Our Story</p>
          <h1 className="text-5xl font-bold">The Könings Story</h1>
        </div>
      </section>

      <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed text-center mb-16">
          Mike Laskowski refined his craft at McLaren Automotive and Rolls-Royce Motor Cars. His hands-on involvement in every project showcases our commitment to quality.
        </p>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#141414] border border-white/5 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
                >
                  <div className="bg-[#141414] border border-white/5 rounded-xl p-6 relative">
                    <span className="text-gold font-bold text-lg">{item.year}</span>
                    <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                    <div className={`hidden md:block absolute top-6 w-3 h-3 bg-gold rounded-full ${i % 2 === 0 ? "-right-[1.85rem]" : "-left-[1.85rem]"}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-[#141414] border border-gold/20 rounded-2xl p-10 text-center">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            &ldquo;The car detailing industry is relatively unregulated, with limited formal qualifications available. However, with my extensive background in body shops, restoration, and the high standards of automotive manufacturing honed at McLaren and Rolls-Royce, I knew I would bring a higher level of expertise to the table.&rdquo;
          </p>
          <p className="font-semibold text-gold">Michael Laskowski</p>
          <p className="text-sm text-muted-foreground">Founder &amp; Lead Detailer, Könings Detailing</p>
        </div>
      </div>
      </div>
    </div>
  );
}
