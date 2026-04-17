"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Shield, Snowflake, Gem, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { images, serviceImages } from "@/lib/images";

const iconMap: Record<string, React.ElementType> = { Sparkles, ShieldCheck, Shield, Snowflake, Gem };

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image src={images.studioLight} alt="Car studio" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3">Our Services</p>
          <h1 className="text-5xl font-bold">Premium Car Care</h1>
        </div>
      </section>

      <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12">
          From paint correction to PPF installation, every service is tailored to your vehicle&apos;s unique needs.
        </p>

        <div className="space-y-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="group bg-[#141414] border border-white/5 rounded-xl p-8 hover:border-gold/30 transition-all duration-300 grid md:grid-cols-[1fr_2fr] gap-8">
                    <div>
                      <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                        <Icon size={28} className="text-gold" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                      <p className="text-gold font-semibold">
                        From £{service.tiers[0].price.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-4">{service.longDesc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tiers.map((tier) => (
                          <span key={tier.name} className="px-3 py-1 bg-white/5 text-sm rounded-full">
                            {tier.name}
                          </span>
                        ))}
                      </div>
                      <span className="text-gold text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}
