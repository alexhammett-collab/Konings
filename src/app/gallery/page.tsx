"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Wrench, Tag } from "lucide-react";
import { projects } from "@/lib/data";
import { images, projectImages } from "@/lib/images";

const allTags = [...new Set(projects.flatMap((p) => p.tags))];

function BeforeAfterSlider({ imageSrc, title }: { imageSrc: string; title: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  function handleMove(clientX: number) {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] overflow-hidden cursor-col-resize select-none touch-none"
      onMouseDown={() => { isDragging.current = true; }}
      onMouseUp={() => { isDragging.current = false; }}
      onMouseLeave={() => { isDragging.current = false; }}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchStart={() => { isDragging.current = true; }}
      onTouchEnd={() => { isDragging.current = false; }}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* After — vibrant, corrected image (full background) */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={`${title} — after detailing`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          style={{ filter: "saturate(1.25) contrast(1.1) brightness(1.05)" }}
        />
      </div>

      {/* Before — faded, dull version (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={imageSrc}
          alt={`${title} — before detailing`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          style={{ filter: "saturate(0.3) contrast(0.85) brightness(0.7) sepia(0.2)" }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-xl border border-white/20">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3L2 8L5 13" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 3L14 8L11 13" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white/90 tracking-wider">BEFORE</div>
      <div className="absolute top-3 right-3 bg-gold/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-black tracking-wider">AFTER</div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const filtered = activeTag ? projects.filter((p) => p.tags.includes(activeTag)) : projects;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <Image src={images.supercarsRow} alt="Gallery" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3">Our Work</p>
          <h1 className="text-5xl font-bold">Project Gallery</h1>
        </div>
      </section>

      <div className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-8">
          Drag the slider to see the before and after transformation on each project.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !activeTag ? "bg-gold text-black" : "border border-white/10 text-muted-foreground hover:border-white/20"
            }`}
          >
            All Projects
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTag === tag ? "bg-gold text-black" : "border border-white/10 text-muted-foreground hover:border-white/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#141414] border border-white/5 rounded-xl overflow-hidden"
            >
              <BeforeAfterSlider
                imageSrc={projectImages[project.id]?.after || projectImages["1"].after}
                title={project.car}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-gold" />
                    {project.hours} hours
                  </span>
                  <span className="flex items-center gap-1">
                    <Wrench size={12} className="text-gold" />
                    {project.service}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded text-xs">
                      <Tag size={10} className="text-gold" />
                      {tag}
                    </span>
                  ))}
                </div>

                {project.products.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-foreground">Products used:</strong>{" "}
                      {project.products.join(", ")}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
