"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Calendar, Car, Wrench, Plus, CheckCircle } from "lucide-react";
import { services, bookingAddons } from "@/lib/data";
import { images } from "@/lib/images";

const steps = ["Service", "Vehicle", "Add-ons", "Schedule", "Confirm"];

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState({ make: "", model: "", year: "", colour: "" });
  const [addons, setAddons] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const service = services.find((s) => s.slug === selectedService);
  const tier = service?.tiers.find((t) => t.name === selectedTier);

  const addonTotal = addons.reduce((sum, id) => {
    const addon = bookingAddons.find((a) => a.id === id);
    return sum + (addon?.price || 0);
  }, 0);

  const total = (tier?.price || 0) + addonTotal;

  function toggleAddon(id: string) {
    setAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  }

  if (submitted) {
    return (
      <div className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-gold" />
            </div>
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">Booking Submitted!</h1>
          <p className="text-muted-foreground mb-2">Thank you for your enquiry. In a real scenario, we&apos;d confirm via email.</p>
          <div className="bg-[#141414] border border-white/5 rounded-xl p-6 text-left mt-8 space-y-2 text-sm">
            <p><strong>Service:</strong> {service?.title} — {tier?.name}</p>
            <p><strong>Vehicle:</strong> {vehicle.year} {vehicle.make} {vehicle.model} ({vehicle.colour})</p>
            <p><strong>Date:</strong> {date} at {time}</p>
            <p><strong>Estimated Total:</strong> <span className="text-gold font-bold">£{total.toLocaleString()}</span></p>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Demo mode — no real booking was created</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={images.darkCar}
          alt="Book your vehicle"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3">Book Your Vehicle</p>
          <h1 className="text-5xl font-bold">Smart Booking</h1>
        </div>
      </section>

      <div className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-muted-foreground text-center mb-8">Build your service package and get an instant estimate.</p>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                i <= step ? "bg-gold text-black" : "bg-white/5 text-muted-foreground"
              }`}>
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              <span className={`text-xs hidden sm:inline ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>
                {s}
              </span>
              {i < steps.length - 1 && <div className={`w-8 h-px ${i < step ? "bg-gold" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Step 0: Service Selection */}
            {step === 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Wrench size={20} className="text-gold" /> Select a Service
                </h2>
                {services.map((s) => (
                  <div key={s.slug}>
                    <button
                      onClick={() => { setSelectedService(s.slug); setSelectedTier(null); }}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        selectedService === s.slug ? "border-gold bg-gold/10" : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-sm text-muted-foreground">{s.shortDesc}</p>
                    </button>
                    {selectedService === s.slug && (
                      <div className="grid sm:grid-cols-2 gap-3 mt-3 ml-4">
                        {s.tiers.map((t) => (
                          <button
                            key={t.name}
                            onClick={() => setSelectedTier(t.name)}
                            className={`p-4 rounded-lg border text-left transition-all ${
                              selectedTier === t.name ? "border-gold bg-gold/5" : "border-white/10 hover:border-white/20"
                            }`}
                          >
                            <p className="font-medium text-sm">{t.name}</p>
                            <p className="text-gold font-bold">£{t.price.toLocaleString()}</p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Step 1: Vehicle Details */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Car size={20} className="text-gold" /> Vehicle Details
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { key: "make", label: "Make", placeholder: "e.g. Porsche" },
                    { key: "model", label: "Model", placeholder: "e.g. 911 GT3 RS" },
                    { key: "year", label: "Year", placeholder: "e.g. 2024" },
                    { key: "colour", label: "Colour", placeholder: "e.g. Guards Red" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="text-sm font-medium block mb-1">{field.label}</label>
                      <input
                        type="text"
                        value={vehicle[field.key as keyof typeof vehicle]}
                        onChange={(e) => setVehicle((prev) => ({ ...prev, [field.key]: e.target.value }))}
                        placeholder={field.placeholder}
                        className="w-full bg-[#1C1C1C] border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Add-ons */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Plus size={20} className="text-gold" /> Add-ons (Optional)
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {bookingAddons.map((addon) => {
                    const isSelected = addons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-4 rounded-lg border text-left transition-all flex items-center justify-between ${
                          isSelected ? "border-gold bg-gold/10" : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div>
                          <p className="font-medium text-sm">{addon.name}</p>
                          <p className="text-sm text-gold">£{addon.price}</p>
                        </div>
                        {isSelected && <Check size={18} className="text-gold" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Schedule */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Calendar size={20} className="text-gold" /> Preferred Date &amp; Time
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#1C1C1C] border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">Preferred Time</label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#1C1C1C] border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      <option value="">Select a time</option>
                      {["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">We&apos;ll confirm availability within 24 hours.</p>
              </div>
            )}

            {/* Step 4: Confirm */}
            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle size={20} className="text-gold" /> Review Your Booking
                </h2>
                <div className="bg-[#141414] border border-white/5 rounded-xl p-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Service</p>
                      <p className="font-semibold">{service?.title}</p>
                      <p className="text-gold">{tier?.name} — £{tier?.price.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Vehicle</p>
                      <p className="font-semibold">{vehicle.year} {vehicle.make} {vehicle.model}</p>
                      <p className="text-muted-foreground">{vehicle.colour}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Date &amp; Time</p>
                      <p className="font-semibold">{date || "Not selected"} at {time || "Not selected"}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Add-ons</p>
                      {addons.length > 0 ? (
                        addons.map((id) => {
                          const a = bookingAddons.find((x) => x.id === id);
                          return <p key={id} className="text-sm">{a?.name} — £{a?.price}</p>;
                        })
                      ) : (
                        <p className="text-muted-foreground">None</p>
                      )}
                    </div>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Estimated Total</span>
                      <span className="text-gold">£{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-white/10 text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:border-white/20 transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>
          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
              disabled={step === 0 && !selectedTier}
              className="flex items-center gap-2 bg-gold text-black px-6 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gold-light transition-colors"
            >
              Next <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={() => setSubmitted(true)}
              className="flex items-center gap-2 bg-gold text-black px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gold-light transition-colors"
            >
              Submit Booking <Check size={16} />
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
