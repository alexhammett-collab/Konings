"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { serviceImages } from "@/lib/images";

export default function ServiceDetailPage() {
  const params = useParams();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="py-24 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services" className="text-gold hover:underline">Back to Services</Link>
      </div>
    );
  }

  const heroImage = serviceImages[service.slug];

  return (
    <div>
      {/* Hero Banner */}
      {heroImage && (
        <section className="relative h-72 md:h-96 overflow-hidden">
          <Image
            src={heroImage}
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/30" />
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-5xl mx-auto">
            <Link href="/services" className="text-sm text-gold/80 hover:text-gold mb-3 inline-block">
              ← Back to Services
            </Link>
            <h1 className="text-5xl font-bold">{service.title}</h1>
          </div>
        </section>
      )}

      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {!heroImage && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-gold mb-6 inline-block">
                ← Back to Services
              </Link>
              <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
            </motion.div>
          )}
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
            {service.longDesc}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {service.tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`bg-[#141414] border rounded-xl p-8 ${
                  i === service.tiers.length - 1 ? "border-gold/30" : "border-white/5"
                }`}
              >
                {i === service.tiers.length - 1 && (
                  <span className="text-xs text-gold uppercase tracking-wider font-semibold mb-3 block">Most Popular</span>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-gold mb-4">
                  From £{tier.price.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="text-gold mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/booking"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold transition-colors ${
                    i === service.tiers.length - 1
                      ? "bg-gold text-black hover:bg-gold-light"
                      : "border border-white/20 hover:bg-white/5"
                  }`}
                >
                  Book This Service <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
