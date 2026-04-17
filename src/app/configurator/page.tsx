"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Check, RotateCcw } from "lucide-react";
import { ppfZones, ppfFilmTypes, carModels } from "@/lib/data";
import Link from "next/link";
import CarSilhouette from "@/components/car-silhouette";

export default function ConfiguratorPage() {
  const [selectedCar, setSelectedCar] = useState(carModels[0].id);
  const [selectedFilm, setSelectedFilm] = useState(ppfFilmTypes[0].id);
  const [selectedZones, setSelectedZones] = useState<string[]>([]);

  const film = ppfFilmTypes.find((f) => f.id === selectedFilm)!;
  const totalPrice = selectedZones.reduce((sum, zoneId) => {
    const zone = ppfZones.find((z) => z.id === zoneId);
    return sum + (zone ? zone.price * film.priceMultiplier : 0);
  }, 0);

  function toggleZone(id: string) {
    setSelectedZones((prev) =>
      prev.includes(id) ? prev.filter((z) => z !== id) : [...prev, id]
    );
  }

  function selectPreset(preset: string) {
    switch (preset) {
      case "essential":
        setSelectedZones(["front-bumper", "bonnet", "left-wing", "right-wing", "mirrors"]);
        break;
      case "full-front":
        setSelectedZones(["front-bumper", "bonnet", "left-wing", "right-wing", "headlights", "mirrors"]);
        break;
      case "performance":
        setSelectedZones(["front-bumper", "bonnet", "left-wing", "right-wing", "headlights", "mirrors", "a-pillars", "roof", "left-sill", "right-sill"]);
        break;
      case "full":
        setSelectedZones(ppfZones.map((z) => z.id));
        break;
    }
  }

  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3">Interactive Tool</p>
          <h1 className="text-5xl font-bold mb-4">PPF Configurator</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your vehicle, choose your film type, and pick the panels you want to protect. Get an instant estimate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Main Panel */}
          <div className="space-y-8">
            {/* Car Selection */}
            <div className="bg-[#141414] border border-white/5 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">1. Select Your Vehicle</h2>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {carModels.map((car) => (
                  <button
                    key={car.id}
                    onClick={() => setSelectedCar(car.id)}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      selectedCar === car.id
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <span className="text-2xl block mb-1">{car.image}</span>
                    <span className="text-xs">{car.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Film Type */}
            <div className="bg-[#141414] border border-white/5 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">2. Choose Film Type</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {ppfFilmTypes.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFilm(f.id)}
                    className={`p-4 rounded-lg border text-left transition-all ${
                      selectedFilm === f.id
                        ? "border-gold bg-gold/10"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <p className="font-semibold text-sm">{f.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{f.description}</p>
                    {f.priceMultiplier > 1 && (
                      <p className="text-xs text-gold mt-1">+{Math.round((f.priceMultiplier - 1) * 100)}% premium</p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Presets */}
            <div className="bg-[#141414] border border-white/5 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">3. Select Coverage</h2>
                <button
                  onClick={() => setSelectedZones([])}
                  className="text-xs text-muted-foreground hover:text-gold flex items-center gap-1"
                >
                  <RotateCcw size={12} /> Reset
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { id: "essential", label: "Essential Front", desc: "from £839" },
                  { id: "full-front", label: "Full Front", desc: "from £1,580" },
                  { id: "performance", label: "Performance Pack", desc: "from £2,160" },
                  { id: "full", label: "Full Coverage", desc: "from £4,560" },
                ].map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => selectPreset(preset.id)}
                    className="px-4 py-2 rounded-lg border border-white/10 hover:border-gold/30 text-sm transition-colors"
                  >
                    <span className="font-medium">{preset.label}</span>
                    <span className="text-muted-foreground ml-2 text-xs">{preset.desc}</span>
                  </button>
                ))}
              </div>

              {/* Zone Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ppfZones.map((zone) => {
                  const isSelected = selectedZones.includes(zone.id);
                  return (
                    <button
                      key={zone.id}
                      onClick={() => toggleZone(zone.id)}
                      className={`p-3 rounded-lg border text-left transition-all relative ${
                        isSelected
                          ? "border-gold bg-gold/10 text-foreground"
                          : "border-white/10 hover:border-white/20 text-muted-foreground"
                      }`}
                    >
                      {isSelected && (
                        <Check size={14} className="absolute top-2 right-2 text-gold" />
                      )}
                      <p className="text-xs font-medium">{zone.label}</p>
                      <p className="text-xs text-muted-foreground">
                        £{Math.round(zone.price * film.priceMultiplier).toLocaleString()}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar - Quote Summary */}
          <div className="lg:sticky lg:top-24 h-fit space-y-6">
            <CarSilhouette selectedZones={selectedZones} onToggleZone={toggleZone} />
            <div className="bg-[#141414] border border-gold/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Shield size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold">Your Quote</h3>
                  <p className="text-xs text-muted-foreground">{film.name}</p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {selectedZones.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-4 text-center">
                    Select panels to build your quote
                  </p>
                ) : (
                  selectedZones.map((zoneId) => {
                    const zone = ppfZones.find((z) => z.id === zoneId)!;
                    return (
                      <div key={zoneId} className="flex justify-between text-sm">
                        <span>{zone.label}</span>
                        <span className="text-muted-foreground">
                          £{Math.round(zone.price * film.priceMultiplier).toLocaleString()}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>

              {selectedZones.length > 0 && (
                <>
                  <div className="border-t border-white/5 pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Estimated Total</span>
                      <span className="text-gold">£{Math.round(totalPrice).toLocaleString()}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      *Final price may vary based on vehicle model and condition
                    </p>
                  </div>

                  <Link
                    href="/booking"
                    className="block w-full text-center bg-gold text-black py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors"
                  >
                    Book PPF Installation
                  </Link>
                </>
              )}

              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">XPEL 10-Year Warranty</strong> — All PPF installations include XPEL&apos;s manufacturer warranty against yellowing, cracking, peeling, and delamination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
