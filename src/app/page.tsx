"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Sparkles, ShieldCheck, Shield, Snowflake, Gem, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { services, stats, testimonials } from "@/lib/data";
import { images, serviceImages } from "@/lib/images";

const iconMap: Record<string, React.ElementType> = { Sparkles, ShieldCheck, Shield, Snowflake, Gem };

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-dvh flex items-center justify-center overflow-hidden">
        <Image
          src={images.hero}
          alt="Supercar in dark studio"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0A0A0A]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.15) 0%, transparent 60%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gold uppercase tracking-[0.3em] text-sm mb-6"
          >
            Winchester&apos;s Premier Detailing Studio
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Expert Paint Protection, Ceramic Coating &amp;{" "}
            <span className="text-gold">Detailing</span> for Supercars
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Led by ex-McLaren &amp; Rolls-Royce specialist Michael Laskowski. Official XPEL installation centre. Recommended by Porsche Club GB.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-gold text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-gold-light transition-colors"
            >
              Book Your Car In
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/configurator"
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition-colors"
            >
              PPF Configurator
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gold rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gold">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Sparkles;
              const bgImage = serviceImages[service.slug];
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={`/services/${service.slug}`}>
                    <div className="group relative bg-[#141414] border border-white/5 rounded-xl overflow-hidden h-full hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
                      {bgImage && (
                        <div className="relative h-44 overflow-hidden">
                          <Image
                            src={bgImage}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
                        </div>
                      )}
                      <div className="p-8 pt-4">
                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                          <Icon size={24} className="text-gold" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.shortDesc}</p>
                        <span className="text-gold text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn More <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 px-4 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3">What Sets Us Apart</p>
            <h2 className="text-4xl font-bold mb-6">A Decade at McLaren &amp; Rolls-Royce</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Könings Detailing is led by Michael Laskowski, who spent nearly a decade as a Paint Specialist at McLaren Automotive and later as a Master Technician in the Finesse Department at Rolls-Royce Motor Cars.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              He is the only detailing specialist to have worked with the National Motor Museum at Beaulieu. Our team is trusted by car collectors, high-end consultants, premium dealerships and private clients.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Official XPEL Centre", "Porsche Club GB Recommended", "Est. 2008", "Award Winning"].map((badge) => (
                <span key={badge} className="px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full border border-gold/20">
                  {badge}
                </span>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
            >
              Read Our Story <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/5 overflow-hidden relative">
              <Image
                src={images.mclaren}
                alt="McLaren supercar"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gold text-black px-6 py-3 rounded-xl font-bold text-lg shadow-xl">
              20+ Years Experience
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3">Testimonials</p>
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>

          <div className="relative">
            <div className="bg-[#141414] border border-white/5 rounded-2xl p-10">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                &ldquo;{testimonials[testimonialIdx].text}&rdquo;
              </p>
              <p className="font-semibold text-foreground">{testimonials[testimonialIdx].name}</p>
              {testimonials[testimonialIdx].title && (
                <p className="text-sm text-gold">{testimonials[testimonialIdx].title}</p>
              )}
              <p className="text-sm text-muted-foreground">{testimonials[testimonialIdx].car}</p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="p-2 border border-white/10 rounded-full hover:border-gold/30 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm text-muted-foreground">
                {testimonialIdx + 1} / {testimonials.length}
              </span>
              <button
                onClick={() => setTestimonialIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="p-2 border border-white/10 rounded-full hover:border-gold/30 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-muted-foreground">
              <span className="text-gold font-semibold">EXCELLENT</span> — Based on {testimonials.length}+ reviews on Google
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <Image
          src={images.nightCar}
          alt="Supercar at night"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/90" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Car Deserves the <span className="text-gold">Best Care</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Book in your vehicle for a free assessment at our Winchester studio, or use our interactive PPF configurator to build your quote online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-gold text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-gold-light transition-colors"
            >
              Book Now <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
